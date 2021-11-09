<template>
    <div class="saved-card">
        <div class="cross-button" @click="$emit('remove-wallet', ticket_data.flightno)"><span>&#10539;</span></div>
        <div class="flight-num">
            <img :src="ticket_data.airline.logo" alt="">
            <p>{{ticket_data.flightid}}</p>
        </div>
        <div class="airports-data">
                <div class="source">
                    <h3>{{ticket_data.source_date.date}} {{ticket_data.source_date.time}}</h3>
                    <h2>{{ticket_data.source.code}}</h2>
                    <p>{{ticket_data.source.name}}</p>
                    <p>{{ticket_data.source.address}}</p>
                </div>
                <img :src="aeroplane_logo" alt="">
                <div class="destination">
                    <h3>{{ticket_data.destination_date.date}} {{ticket_data.destination_date.time}}</h3>
                    <h2>{{ticket_data.destination.code}}</h2>
                    <p>{{ticket_data.destination.name}}</p>
                    <p>{{ticket_data.destination.address}}</p>
                </div>
        </div>
        <div class="cost-details">
            <p>Current Cost   :  <span>{{ticket_data.amount.rate}}</span></p>
            <p>Total Weight    :   <span>100 Kg</span></p>
            <p>Type  :  <span>General Cargo</span></p>
            <button class="btn" @click="CheckoutData">Book Now</button>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { imgs } from '../../asset'
import { detailedData } from '../../ticketData'

export default {
    emits: ['remove-wallet'],
    props: ['savedTicket'],
    setup(props) {
        const store = useStore();
        const router = useRouter();

        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')

        const ticket_data = computed(function() { return detailedData(props.savedTicket) })

        function CheckoutData() {
            store.dispatch('bookingdat/clearMidForm')
            if (props.savedTicket.length > 12) { 
                const midform =  { id: 1, length: props.savedTicket[13], width: props.savedTicket[14], height: props.savedTicket[15], weight: props.savedTicket[17], quantity: props.savedTicket[16], type: props.savedTicket[19], stacking: props.savedTicket[20], weighing: props.savedTicket[18], turnable: props.savedTicket[21], dimension: props.savedTicket[12]}
                store.dispatch('bookingdat/addmidformData', midform)
                store.dispatch('bookingdat/addCheckout', props.savedTicket[2]);
                router.push('/search/checkout')
            } else {
                store.dispatch('bookingdat/addCheckout', props.savedTicket[2]);
                //Pop up MID FORM
                router.push('/search/checkout')
            }
            
        }
        
        return {aeroplane_logo, ticket_data, CheckoutData }
    },
}
</script>
