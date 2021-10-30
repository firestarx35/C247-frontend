<template>
<section id="booking">

    <div class="booking-container">
        <div class="summary-section">
            <h1>Flight Summary</h1>
            <div class="flight-grid">
                <div class="source-info">
                    <h1>DEL</h1>
                    <h3>1 JAN | MON</h3>
                    <div>
                        <h4>Latest acceptance time</h4>
                        <h5>Airport City, Pin Code</h5>
                        <h5>Airport Name</h5>
                    </div>
                </div>
                <div class="icons">
                    <img :src="AEROPLANE_LOGO" alt="">
                    <img :src="Airline_logo" alt="">
                </div>
                <div class="dest-info">
                    <h1>BOM</h1>
                    <h3>2 JAN | TUE</h3>
                    <div>
                        <h4>Arrival time</h4>
                        <h5>Airport City, Pin Code</h5>
                        <h5>Airport Name</h5>
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


        <div class="cost-section">
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
    </div>
</section>

</template>

<script>

import { imgs } from '../../asset'
export default {
    setup() {
        const AEROPLANE_LOGO = imgs('AEROPLANE_LOGO.png');
        const Airline_logo = imgs('Air_India_Express_logo.svg')


        return { AEROPLANE_LOGO, Airline_logo }
    }

}
</script>

<style>

</style>