<template>
        
    <div class="card-expansion-container">
        <div class="airline-breakdown">
           
            <div class="source-destination">
                <div class="source-text">
                    <h3>{{ticketData.source.code}}</h3>
                    <h3>{{ticketData.source_date.date}}</h3>
                    <h2>{{ticketData.source_date.time}}</h2>
                    <h5>{{ticketData.source.name}}</h5>
                    <h5>{{ticketData.source.address}}</h5>
                </div>
                
                <div class="plane-number-logo">
                    <img :src="aeroplane_logo" alt="Aeroplanes">
                    <h2>{{ticketData.flightid}}</h2>
                </div>
                
                <div class="dest-text">
                    <h3>{{ticketData.destination.code}}</h3>
                    <h3>{{ticketData.destination_date.date}}</h3>
                    <h2>{{ticketData.destination_date.time}}</h2>
                    <h5>{{ticketData.destination.name}}</h5>
                    <h5>{{ticketData.destination.address}}</h5>
                </div>
            </div>
        </div>
        
        <div class="cost-breakdown">
            <div class="rate-duration-total">
                <h3>Rate: {{ticketData.amount.rate}}</h3>
                <h3>Duration: {{ticketData.duration}} Hrs</h3>
                <h3>Total: <span v-if="ticketData.amount.available"> </span>{{ticketData.amount.Total}}</h3><button class="btn-3" v-if="!ticketData.amount.available" @click="$emit('edit-form')"> Add Cargo Details</button>
            </div>

            <div class="costs" v-if="ticketData.amount.available">
                <h3> Airline Costs:{{ticketData.amount.airline_cost}}</h3>
                <h3>+</h3>
                <h3>Fuel Surcharge:{{ticketData.amount.fuel_surcharge}}</h3>
                <h3>+</h3>
                <h3>GST: {{ticketData.amount.gst}}</h3>
                <h3>+</h3>
                <h3>Cargo247 Charge:{{ticketData.amount.cargo247_charge}}</h3>
            </div>

            <div>
                <button class="btn-3" @click="addtoWallet">Save for later</button>
                <button class="btn-3" v-if="ticketData.amount.available" @click="CheckoutData">Book Now</button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { imgs } from '../../asset'
import { detailedData } from '../../ticketData'

export default {
    emits: ['edit-form'],
    props: ['ticket'],
    setup(props) {
        const store = useStore();
        const router = useRouter();

        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')

        const ticketData = computed (function() { return detailedData(props.ticket) })

        function addtoWallet() {
            const existing_tickets = store.getters['userdat/getWallet']
            if (store.getters['userdat/getWalletStatus']) {
                if (existing_tickets != undefined && existing_tickets.some(function(element) { return element[2] == props.ticket[2] })) {
                //Alert("Ticket already added to wallet", warning)
            } else { 
                store.dispatch('userdat/updateWallet', [props.ticket[2], true])
                //Alert("Ticket added to wallet", "Success")
             }
            }
        }
        function CheckoutData() {
            store.dispatch('bookingdat/addCheckoutData', props.ticket[2]);
            router.push('/search/checkout')
        }

        return { aeroplane_logo, ticketData, addtoWallet, CheckoutData }
    },
}
</script>
