<template>
   <section id="booking" v-if="dataAvailable">
        <div class="booking-container">
            <div class="summary-section">
                <h2>Flight Summary</h2>
                <p><strong>Transaction ID:</strong> {{data[1]}} </p>
                <div class="flight-grid">

                    <div class="source-info">
                        <h2>{{route.source.airport.code}}</h2>
                        <h3>{{route.source.date.date}}</h3>
                        <div>
                            <h4>Latest acceptance time: {{route.source.date.time}}</h4>
                            <h5>{{route.source.airport.address}}</h5>
                            <h5>{{route.source.airport.name}}</h5>
                        </div>
                    </div>
                    <div class="icons">
                        <img :src="AEROPLANE_LOGO" alt="">
                        <img :src="airline.logo" alt="">
                    </div>
                    <div class="dest-info">
                        <h2>{{route.destination.airport.code}}</h2>
                        <h3>{{route.destination.date.date}}</h3>
                        <div>
                            <h4>Arrival time: {{route.destination.date.time}}</h4>
                            <h5>{{route.destination.airport.address}}</h5>
                            <h5>{{route.destination.airport.name}}</h5>
                        </div>
                    </div>
                </div>

                <h2>Cargo Summary</h2>
                <div class="cargo-summary">
                <div class="cargo-grid">
                    <div>
                        <h4>Sr No</h4>
                    </div>
                    <div>
                        <h4>Quantity</h4>
                    </div>
                    <div>
                        <h4>Weight(kg)</h4>
                    </div>
                    <div>
                        <h4>Volume({{data[11]}})</h4>
                    </div>
                    <div>
                        <h4>Chargeable(kg)</h4>
                    </div>
                    <div>
                        <h4>Type</h4>
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
                        <h4>{{data[18]}}</h4>
                    </div>
                    <div>
                        <h4>{{data[12]}}}</h4>
                    </div>
                    <div>
                        <h4>{{data[13]}}</h4>
                    </div>
                    <div>
                        <h4>{{data[14]}}</h4>
                    </div>
                    <div>
                        <h4>{{data[22]}}</h4>
                    </div>
                    <div>
                        <h4>{{data[23]}}</h4>
                    </div>
                    <div>
                        <h4>{{data[24]}}</h4>
                    </div>
                </div>


            </div>
            </div>


            <div class="cost-section">
                <h2>Booking Details</h2>

                <form class="booking-form" action="">
                    <label for="awb">AWB Number</label>
                    <h5>{{data[2]}}</h5>
                </form>

                <div class="cost-grid" id="air-fright-cost">
                    <div><h4>Airline Cost</h4></div>
                    <div><h4>{{data[21]}} {{data[20]}}</h4></div>
                </div>
                <div class="cost-grid" id="additional-cost">
                    <div><h4>Additional Cost</h4></div>
                    <div><h4>NA</h4></div>
                </div>
                <div class="cost-grid" id="total-cost">
                    <div><h2>Total</h2></div>
                    <div><h2>{{data[21]}} {{data[20]}}</h2></div>
                </div>

                <div class="terms-box">
                    <h5><a href="#">Terms: General Terms of Carriage</a></h5>
                    <h5><a href="#">Cancellation Policy</a></h5>
                    <h5><a href="#">Load Information</a></h5>
                </div>

                <div class="confirmation-text">
                    <p>Booking Confirmed</p>
                </div>
                
                <div class="page-save-icon">
                    <img :src="save_16" alt="Save">
                    <img :src="printer_11" alt="Print">
                </div>

            </div>
        </div>

    </section>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { imgs } from '../../asset'
import { airlineData, customDate1, airportData } from '../../ticketData'
export default {
    setup() {
        const store = useStore()
        const AEROPLANE_LOGO = imgs('AEROPLANE-LOGO.png')
        const save_16 = imgs('save_16.png')
        const printer_11 = imgs('printer_11.png')


        const dataAvailable = ref(false)
        const data = ref(null)

        onBeforeMount(async function() {
            const status = await fetchData({ url: 'transaction_quote', query: {transaction_no: store.getters['userdat/getTransactionId'] }, body: { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + store.getters['userdat/getToken'] }}})

            if (status.status == 200) {
                data.value = status.message
                dataAvailable.value = true
            } else {
                store.dispatch('userdat/displayError', { message: "Failed to fetch Data!", type: false })
            }
        })

        const airline = computed(function() { 
            return airlineData(data.value[4])
        })
        const route = computed(function() { 
            return { source: { airport:  airportData(data.value[6]), date: customDate1(data.value[7]) }, 
                     destination: { airport: airportData(data.value[8]), date: customDate1(data.value[9]) }
                    }
        })


        return { AEROPLANE_LOGO, save_16, printer_11, dataAvailable, data, airline , route}
    }

}
</script>

<style>

</style>