<template>
<section id="booking">
    <div class="booking-container">
           <div class="summary-section">
                <h1>Flight Summary</h1>

                <div class="flight-grid">
                    <div class="source-info">
                        <h1>{{booking_data.source.code}} </h1>
                        <h3>{{booking_data.source_date.date}}</h3>
                        <div>
                            <h4>Latest acceptance time: {{booking_data.source_date.time}} </h4>
                            <h5>Airport: {{booking_data.source.name}}</h5>
                            <h5>Address: {{booking_data.source.address }}</h5>
                        </div>
                    </div>
                    <div class="icons">
                        <img :src="AEROPLANE_LOGO" alt="Aeroplane">
                        <img :src="booking_data.airline.logo">
                    </div>
                    <div class="dest-info">
                        <h1>{{booking_data.destination.code}}</h1>
                        <h3>{{booking_data.destination_date.date}}</h3>
                        <div>
                            <h4>Arrival time: {{booking_data.destination_date.time}}</h4>
                            <h5>Airport: {{booking_data.destination.name}} </h5>
                            <h5>Address: {{booking_data.destination.address}} </h5>
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
                        <h4>{{cargo_summary.summary.quantity}}</h4>
                    </div>
                    <div>
                        <h4>{{cargo_summary.summary.weight}} kg</h4>
                    </div>
                    <div>
                        <h4>{{cargo_summary.summary.volume}} {{cargo_summary.units.vol}}</h4>
                    </div>
                    <div>
                        <h4>{{cargo_summary.units.type}}</h4>
                    </div>
                    <div>
                        <h4>{{cargo_summary.units.secured}}</h4>
                    </div>
                    <div>
                        <h4>{{cargo_summary.units.stackable}}</h4>
                    </div>
                    <div>
                        <h4>{{cargo_summary.units.turnable}}</h4>
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
                <div><h4>{{booking_data.amount.fuel_surcharge}}</h4></div>
            </div>
            <div class="cost-grid" id="total-cost">
                <div><h1>Total: </h1></div>
                <div><h1>{{booking_data.amount.Total}}</h1></div>
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
            <div><h4>Air Freight Cost</h4></div>
            <div><h4>{{booking_data.amount.airline_cost}}</h4></div>
        </div>
        <div class="cost-grid" id="additional-cost">
            <div><h4>Additional Cost</h4></div>
            <div><h4>{{booking_data.amount.fuel_surcharge}}</h4></div>
        </div>
        <div class="cost-grid" id="total-cost">
            <div><h1>Total: </h1></div>
            <div><h1>{{booking_data.amount.Total}}</h1></div>
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

import { imgs } from '../asset'
import { detailedData, summarisedData } from '../ticketData'

export default {
   
   setup() {
       const store = useStore();
      
       const AEROPLANE_LOGO = imgs('AEROPLANE-LOGO.png')
       const Airline_logo = imgs('Air_India_Express_logo.svg')
       const save_icon = imgs('save_16.png')
       const printer_icon = imgs('printer_11.png')
       const booking_status = ref(false)
       
       const booking_data = computed(function() { return detailedData(store.getters['bookingdat/getCheckoutData']) })
       const cargo_summary = computed(function() { return summarisedData() })
      

       function bookNow() { booking_status.value = true;}

    return { AEROPLANE_LOGO, Airline_logo, save_icon, printer_icon, booking_status, bookNow, booking_data, cargo_summary }
    }

}
</script>
