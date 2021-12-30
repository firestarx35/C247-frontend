<template>
 <div class="saved-container">
    <div class="saved-card">
        <div class="cross-button" @click="$emit('remove-wallet', ticket_data.flightno)"><span>&#10539;</span></div>
        <p>Time left: {{time_left}} left to book</p>
        <div class="flight-num">
            <img :src="ticket_data.airline.logo" :alt="ticket_data.airline.name">
            <p>{{ticket_data.flightid}}</p>
        </div>
        <div class="airports-data">
                <div class="source">
                    <h3>{{ticket_data.source_date.date}} {{ticket_data.source_date.time}}</h3>
                    <h2>{{ticket_data.source.code}}</h2>
                    <p>{{ticket_data.source.name}}</p>
                    <p>{{ticket_data.source.address}}</p>
                </div>
                <div class="flight-time">
                    <img :src="aeroplane_logo" alt="aeroplane">
                    <p>{{ticket_data.duration}}</p>
                </div>
 
                <div class="destination">
                    <h3>{{ticket_data.destination_date.date}} {{ticket_data.destination_date.time}}</h3>
                    <h2>{{ticket_data.destination.code}}</h2>
                    <p>{{ticket_data.destination.name}}</p>
                    <p>{{ticket_data.destination.address}}</p>
                </div>
        </div>
        <div class="cost-details">
            <p>Current Rate   :  <span>{{ticket_data.rate}}</span></p>
            <p>Total Weight    :   <span>{{ticket_data.cargodetails.weight}}</span></p>
            <p>Type  :  <span>{{ticket_data.cargodetails.type}}</span></p>
            <div id="expandable-button">
                <button id="book-update" type="submit" @click="CheckoutData" v-if="!showUpdate">Book/Update</button>
                <button id="now" class="btn" type="submit" @click="CheckoutNow" v-if="showBooknow">Book Now</button>
                <button id="update" class="btn" type="submit" @click="UpdateDetails" v-if="showUpdate">Update and Book</button>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { imgs } from '../../asset'
import { walletData } from '../../ticketData'

export default {
    emits: ['remove-wallet', 'update-details'],
    props: ['savedTicket'],
    setup(props, { emit }) {
        const store = useStore();
        const router = useRouter();

        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')
        const showBooknow = ref(false)
        const showUpdate = ref(false)
        const showwalletForm = ref(false)
        const time_left = ref('5 days') //Change this reactive stuff


        const ticket_data = computed(function() { return walletData(props.savedTicket) })

        function CheckoutData() {
            showUpdate.value = true
            if (props.savedTicket.length > 12) { 
                showBooknow.value = true
            }
        }

        function CheckoutNow() {
            const midform =  { id: 1, length: props.savedTicket[14], width: props.savedTicket[15],
                                height: props.savedTicket[16], weight: props.savedTicket[18],
                                quantity: props.savedTicket[17], type: props.savedTicket[20],
                                stacking: props.savedTicket[21], weighing: props.savedTicket[19],
                                turnable: props.savedTicket[22], dimension: props.savedTicket[13]
                                }
                store.dispatch('bookingdat/addmidformData', midform )
                store.dispatch('bookingdat/addCheckout', props.savedTicket[12]);
                router.push('/search/checkout')

        }

        function UpdateDetails() {
                store.dispatch('bookingdat/clearMidForm')
                store.dispatch('bookingdat/addCheckout', props.savedTicket[12])  
                emit('update-details')
            }

        
        return { aeroplane_logo, ticket_data, time_left, CheckoutData, CheckoutNow, UpdateDetails, showBooknow, showUpdate, showwalletForm }
    },
}
</script>
