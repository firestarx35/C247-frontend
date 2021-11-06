<template>
<section id="booking">
    <div class="booking-container">
           <div class="summary-section">
                <h1>Flight Summary</h1>

                <div class="flight-grid">
                    <div class="source-info">
                        <h1>FROM {{booking_data.source_name}} </h1>
                        <h3>Departure date: {{booking_data.source_date}}</h3>
                        <div>
                            <h4>Latest acceptance time: {{booking_data.source_date}} </h4>
                            <h5>From address: {{booking_data.source_airport_address }}</h5>
                            <h5>From airport: {{booking_data.source_airport_name}}</h5>
                        </div>
                    </div>
                    <div class="icons">
                        <img :src="AEROPLANE_LOGO" alt="Aeroplane">
                        <img :src="booking_data.airline.logo">
                    </div>
                    <div class="dest-info">
                        <h1>TO {{booking_data.destination_name}}</h1>
                        <h3>Arrival date: {{booking_data.destination_date}}</h3>
                        <div>
                            <h4>Arrival time: {{booking_data.destination_date}}</h4>
                            <h5>To address: {{booking_data.destination_airport_address}} </h5>
                            <h5>To airport: {{booking_data.destination_airport_name}} </h5>
                        </div>
                    </div>
                </div>

                <h1>Cargo Summary</h1>
                <div class="cargo-summary">
                <div class="cargo-grid">
                    <div>
                        <h4>Sr No</h4>
                    </div>
                    <div>
                        <h4>Quantity</h4>
                    </div>
                    <div>
                        <h4>Weight</h4>
                    </div>
                    <div>
                        <h4>Volume</h4>
                    </div>
                    <div>
                        <h4>Type</h4>
                    </div>
                    <div>
                        <h4>Secured</h4>
                    </div>
                    <div>
                        <h4>Stackable</h4>
                    </div>
                    <div>
                        <h4>Turnable</h4>
                    </div>
                </div>
                <div class="cargo-grid">
                    <div>
                        <h4>1</h4>
                    </div>
                    <div>
                        <h4>10</h4>
                    </div>
                    <div>
                        <h4>10kg</h4>
                    </div>
                    <div>
                        <h4>10 m3</h4>
                    </div>
                    <div>
                        <h4>General</h4>
                    </div>
                    <div>
                        <h4>Yes</h4>
                    </div>
                    <div>
                        <h4>Yes</h4>
                    </div>
                    <div>
                        <h4>Yes</h4>
                    </div>
                </div>

            </div>
            </div>

        <div class="cost-section" v-if="!booking_status">
            <h1>Booking Details</h1>

            <form class="booking-form" action="">
                <label for="awb">Enter AWB Number</label>
                <input class="awb-input" type="text" placeholder="AWB Number">
            </form>

            <div class="cost-grid" id="air-fright-cost">
                <div><h4>Air Freight Cost</h4></div>
                <div><h4>${{booking_data.amount.airline_cost}}</h4></div>
            </div>
            <div class="cost-grid" id="additional-cost">
                <div><h4>Additional Cost</h4></div>
                <div><h4>${{booking_data.amount.fuel_surcharge}}</h4></div>
            </div>
            <div class="cost-grid" id="total-cost">
                <div><h1>Total</h1></div>
                <div><h1>${{booking_data.amount.Total}}</h1></div>
            </div>

            <div class="terms-box">
                <h5><a href="#">Terms: General Terms of Carriage</a></h5>
                <h5><a href="#">Cancellation Policy</a></h5>
                <h5><a href="#">Load Information</a></h5>
            </div>

            <button class="btn-2 btn" @click="bookNow">Book Now</button>

        </div>

        <div class="cost-section" v-else>
        <h1>Booking Details</h1>

        <form class="booking-form" action="">
            <label for="awb">AWB Number</label>
            <h5>111-898995065</h5>
        </form>

        <div class="cost-grid" id="air-fright-cost">
            <div><h4>Air Fright Cost</h4></div>
            <div><h4>${{booking_data.amount.airline_cost}}</h4></div>
        </div>
        <div class="cost-grid" id="additional-cost">
            <div><h4>Additional Cost</h4></div>
            <div><h4>${{booking_data.amount.fuel_surcharge}}</h4></div>
        </div>
        <div class="cost-grid" id="total-cost">
            <div><h1>Total</h1></div>
            <div><h1>${{booking_data.amount.Total}}</h1></div>
        </div>

        <div class="terms-box">
            <h5><a href="#">Terms: General Terms of Carriage</a></h5>
            <h5><a href="#">Cancellation Policy</a></h5>
            <h5><a href="#">Load Information</a></h5>
        </div>

        <div class="confirmation-text">
            <h1>Booking Confirmed</h1>
        </div>
        
        <div class="page-save-icon">
            <img :src="save_icon"  alt="Save">
            <img :src="printer_icon" alt="Print">
        </div>
    </div>
        
    </div>
</section>

</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import { imgs, links } from '../../asset'
import { detailedData } from '../../ticketData'

export default {
   
   setup() {
       const store = useStore();
       const AEROPLANE_LOGO = imgs('AEROPLANE-LOGO.png')
       const Airline_logo = imgs('Air_India_Express_logo.svg')
       const save_icon = imgs('save_16.png')
       const printer_icon = imgs('printer_11.png')
       const booking_status = ref(false)
       
       const raw_data = computed(function() {
           const ticket_no = store.getters['bookingdat/getCheckoutData'];
           const ticketData = store.getters['ticketsdat/getTickets'].find(element => element[2] == ticket_no)
           if (ticketData != undefined && ticketData != '') {
               return ticketData
               }
            else {
                fetch(links('flight') + new URLSearchParams({id: ticket_no}), { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + store.getters['userdat/getToken']}})
                .then((response) => {
                    if (response.ok) { return response.json() }
                    else if (response.status >= 400) { router.replace('/') }
                    else { console.log("fetch failed") }
                })
                .then((data)=> {
                    return data
                })
            }      
        })
                // const response = await fetch(links('flight') + new URLSearchParams({id: ticket_no}), { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + store.getters['userdat/getToken']}})
                // let data = null
                // if (response.ok) { data = await response.json() }
                // else if (response.status >= 400) { router.replace('/') }
                // else { console.log("fetch failed") }
                // const dat = await data
                // return dat
       const booking_data = computed(function() { return detailedData(raw_data) })
      
        function bookNow() { console.log(raw_data.value)}

    return { AEROPLANE_LOGO, Airline_logo, save_icon, printer_icon, booking_status, bookNow, booking_data }
    }

}
</script>
