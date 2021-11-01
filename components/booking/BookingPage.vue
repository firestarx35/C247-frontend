<template>
<section id="booking">
    <div class="booking-container">
           <div class="summary-section">
                <h1>Flight Summary</h1>

                <div class="flight-grid">
                    <div class="source-info">
                        <h1>{{booking_data.from}} </h1>
                        <h3>{{booking_data.dep_date}}</h3>
                        <div>
                            <h4>Latest acceptance time:  {{booking_data.acceptance_time}}</h4>
                            <h5>{{booking_data.from_address}}</h5>
                            <h5>{{booking_data.from_airport}}</h5>
                        </div>
                    </div>
                    <div class="icons">
                        <img :src="AEROPLANE_LOGO" alt="Aeroplane">
                        <img :src="Airline_logo">
                    </div>
                    <div class="dest-info">
                        <h1>{{booking_data.to}}</h1>
                        <h3>{{booking_data.arr_date}}</h3>
                        <div>
                            <h4>Arrival time:  {{booking_data.arrival_time}}</h4>
                            <h5>{{booking_data.to_address}}</h5>
                            <h5>{{booking_data.to_airport}}</h5>
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

        <div class="cost-section" v-if="booking_status">
            <h1>Booking Details</h1>

            <form class="booking-form" action="">
                <label for="awb">Enter AWB Number</label>
                <input class="awb-input" type="text" placeholder="AWB Number">
            </form>

            <div class="cost-grid" id="air-fright-cost">
                <div><h4>Air Freight Cost</h4></div>
                <div><h4>$120</h4></div>
            </div>
            <div class="cost-grid" id="additional-cost">
                <div><h4>Additional Cost</h4></div>
                <div><h4>$120</h4></div>
            </div>
            <div class="cost-grid" id="total-cost">
                <div><h1>Total</h1></div>
                <div><h1>$120</h1></div>
            </div>

            <div class="terms-box">
                <h5><a href="#">Terms: General Terms of Carriage</a></h5>
                <h5><a href="#">Cancellation Policy</a></h5>
                <h5><a href="#">Load Information</a></h5>
            </div>

            <button class="btn-2 btn">Book Now</button>

        </div>

        <div class="cost-section" v-else>
        <h1>Booking Details</h1>

        <form class="booking-form" action="">
            <label for="awb">AWB Number</label>
            <h5>111-898995065</h5>
        </form>

        <div class="cost-grid" id="air-fright-cost">
            <div><h4>Air Fright Cost</h4></div>
            <div><h4>$120</h4></div>
        </div>
        <div class="cost-grid" id="additional-cost">
            <div><h4>Additional Cost</h4></div>
            <div><h4>$120</h4></div>
        </div>
        <div class="cost-grid" id="total-cost">
            <div><h1>Total</h1></div>
            <div><h1>$120</h1></div>
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

import { imgs } from '../../asset'
import { useStore } from 'vuex';

export default {
   
   setup() {
       const store = useStore();
       const AEROPLANE_LOGO = imgs('AEROPLANE-LOGO.png')
       const Airline_logo = imgs('Air_India_Express_logo.svg')
       const save_icon = imgs('save_16.png')
       const printer_icon = imgs('printer_11.png')

       const booking_status = ref('true')

       const booking_data = computed(function() { return { from: 'DEL',
                                                           from_airport: 'Indira Gandhi International Airport',
                                                           from_address: 'New Delhi', 
                                                           dep_date: '1 JAN | MON ',
                                                           acceptance_time: '08:00 PM',
                                                           to: 'BOM',
                                                           to_airport: 'Chhatrapati Shivaji Maharaj International Airport',
                                                           to_address: 'Mumbai',
                                                           arr_date: '2 JAN | TUE', 
                                                           arrival_time: '10:20 AM',
                                                        }
                                                })


    return { AEROPLANE_LOGO, Airline_logo, save_icon, printer_icon, booking_status, booking_data }
    }

}
</script>
