<template>
        
    <div class="card-expansion-container">
        <div class="airline-breakdown">
           
            <div class="source-destination">
                <div class="source-text">
                    <h3>{{detailedData.source_airport}}</h3>
                    <h3>{{detailedData.source_date.date}}</h3>
                    <h2>{{detailedData.source_date.time}}</h2>
                    <h5>{{detailedData.source_airport_name}}</h5>
                    <h5>{{detailedData.source_airport_address}}</h5>
                </div>
                
                <div class="plane-number-logo">
                    <img :src="aeroplane_logo" alt="Aeroplanes">
                    <h2>{{detailedData.flightid}}</h2>
                </div>
                
                <div class="dest-text">
                    <h3>{{detailedData.destination_airport}}</h3>
                    <h3>{{detailedData.destination_date.date}}</h3>
                    <h2>{{detailedData.destination_date.time}}</h2>
                    <h5>{{detailedData.destination_airport_name}}</h5>
                    <h5>{{detailedData.destination_airport_address}}</h5>
                </div>
            </div>
        </div>
        
        <div class="cost-breakdown">
            <div class="rate-duration-total">
                <h3>Rate: &#8377; {{charges.rate}}/kg</h3>
                <h3>Duration: {{charges.duration}} Hrs</h3>
                <h3>Total: <span v-if="displayAddcargo">&#8377; </span>{{charges.Total}}</h3><button class="btn-3" v-if="!displayAddcargo" @click="$emit('edit-form')"> Add Cargo Details</button>
            </div>

            <div class="costs" v-if="displayAddcargo">
                <h3> Airline Costs: &#8377; {{charges.airline_cost}}</h3>
                <h3>+</h3>
                <h3>Fuel Surcharge: &#8377; {{charges.fuel_surcharge}}</h3>
                <h3>+</h3>
                <h3>GST @ 18%: &#8377; {{charges.gst}}</h3>
                <h3>+</h3>
                <h3>Cargo247 Charge: &#8377; {{charges.cargo247_charge}}</h3>
            </div>

            <div>
                <button class="btn-3" @click="addtoWallet">Save for later</button>
                <button class="btn-3" v-if="displayAddcargo" @click="CheckoutData">Book Now</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { imgs } from '../../asset'

export default {
    emits: ['edit-form'],
    props: ['ticket'],
    setup(props) {
        const store = useStore();
        const router = useRouter();

        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')

        const displayAddcargo = ref(false);

        const detailedData = computed (function() {
            return { source_airport: props.ticket[4],
                    source_date: customDate(props.ticket[1]),
                    source_airport_name: 'Airport Name',
                    source_airport_address: 'Airport Address',
                    flightid: props.ticket[3],
                    destination_airport: props.ticket[5],
                    destination_date: customDate(props.ticket[6]),
                    destination_airport_name: 'Airport Name',
                    destination_airport_address: 'Airport Address',
                }
        })

        const charges = computed(function() {
            const weight = store.getters['bookingdat/getWeight']
            if ( weight != null ) { 
                displayAddcargo.value = true; 
                const airline_cost = weight*props.ticket[11]; 
                const gst = Math.round(airline_cost*0.18);
                return { rate: props.ticket[11], duration: duration.value, airline_cost: airline_cost, gst: gst, Total: airline_cost + gst, fuel_surcharge: 120, cargo247_charge: 5 } ////To be replaced by airline data
            } else { 
                return { rate: props.ticket[11], duration: duration.value, Total: 'Cargo details required'} }
        })

        const duration = computed(function() {
            const minutes = ((new Date(props.ticket[6]) -  new Date(props.ticket[1]))/60000);
            const hours = Math.floor(minutes/60);
            const remainingminutes = minutes%60;
            return  hours + ':'+ remainingminutes
        })
        
        function customDate(dates) {
            const newDate = new Date(dates)
            const month = newDate.toLocaleString('default', { month: 'long' });
            const dayName = newDate.toString().split(' ')[0];
            const datetime = { date: newDate.getDate() + ' '+ month.toUpperCase() + ' ' +  dayName.toUpperCase(),
                                time: newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'})
                                }
            return datetime
        }

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

        return { aeroplane_logo, detailedData, displayAddcargo, charges, addtoWallet, CheckoutData }
    },
}
</script>
