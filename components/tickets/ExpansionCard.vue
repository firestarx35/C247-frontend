<template>

<div class="exp-aline-aport-wrapper">

    <div class="exp-aline-aport">

        <div class="icon-no">
            <div class="aline-icon"><img :src="ticketData.airline.tail" :alt="ticketData.airline.name"></div>
            <p class="aline-id">{{ticketData.flightid}}</p>
        </div>

        <div class="transit-port">
            <div>
                <div class="a-icon"><img :src="takeoff_icon" alt="take-off"></div>
                <p><strong> {{ticketData.source_date.date}},  {{ticketData.source_date.time}}</strong>   -  {{ticketData.source.name}}</p>
            </div>
            <div>
                <div class="a-dot"></div>
                <p>Transit:  {{ticketData.duration}}</p>
            </div>
            <div>
                <div class="a-icon"><img :src="landing_icon" alt="landing"></div>
                <p><strong> {{ticketData.destination_date.date}},  {{ticketData.destination_date.time}}</strong>   -  {{ticketData.destination.name}}</p>
            </div>
        </div>

    </div>

</div>

<div class="p-btn">
    <div class="price-breakdown">
            <p v-if="ticketData.amount.available">Airline Cost</p>
            <p v-if="ticketData.amount.available">INR {{ticketData.amount.airline_cost}}</p>
            <p v-if="ticketData.amount.available">Fuel Surcharge</p>
            <p v-if="ticketData.amount.available">INR {{ticketData.amount.surcharge}}</p>
            <p v-if="ticketData.amount.available">Total</p>
            <p v-if="ticketData.amount.available">INR {{ticketData.amount.total}}</p>
            <p v-if="!ticketData.amount.available">Airline Rate</p>
            <p v-if="!ticketData.amount.available">INR {{ticketData.amount.rate}} /kg</p>
    </div>
        <button class="btn-3 btn" @click="addtoWallet">Freeze</button>
        <br>
        <button class="btn-3 btn" @click="CheckoutData">Book Now</button>
</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { imgs } from '../../asset'
import { ExpansionData } from '../../ticketData'

export default {
    emits: ['cargo-details'],
    props: ['ticket'],
    setup(props, { emit }) {
        const store = useStore()
        const router = useRouter()

        const takeoff_icon = imgs('takeoff_plane_icon.svg')
        const landing_icon = imgs('landing_plane_icon.svg')

        const ticketData = computed (function() { return ExpansionData(props.ticket) })

        function addtoWallet() {
            const existing_tickets = store.getters['userdat/getWallet']
            if (!!existing_tickets && store.getters['userdat/getWalletfetchStatus']) {
                if (existing_tickets.some(function(element) { return element[12] == props.ticket[12]})) {
                    store.dispatch('userdat/displayError', { message: "Ticket already exists!", type: false })
                } else { 
                    store.dispatch('userdat/updateWallet', [props.ticket[12], true])
                }
            } else if (store.getters['userdat/getWalletfetchStatus']) {
                store.dispatch('userdat/updateWallet', [props.ticket[12], true])
            }
        }
        function CheckoutData() {
            store.dispatch('bookingdat/addCheckout', props.ticket[12])
            if (store.getters['bookingdat/getformSummary']) {
                router.push('/checkout/summary')
            } else {
                emit('cargo-details')
            }
        }

        return { takeoff_icon, landing_icon, ticketData, addtoWallet, CheckoutData }
    },
}
</script>
