<template>
  <section id="booking">
        <div class="booking-container">
            <div class="summary-section">

                <h2>Flight Summary</h2>
                <p><strong> Flight ID: </strong>{{data.flightid}}</p>

                <div class="flight-grid">

                    <div class="source-info">
                        <h2>{{data.source.code}}</h2>
                        <h3>{{data.source_date.date}}</h3>
                        <div>
                            <h4>Latest acceptance time: {{data.source_date.time}}</h4>
                            <h5>{{data.source.address}}</h5>
                            <h5>{{data.source.name}}</h5>
                        </div>
                    </div>
                    <div class="icons">
                        <img :src="AEROPLANE_LOGO" alt="aeroplane">
                        <img :src="data.airline.logo" :alt="data.airline.name">
                    </div>
                    <div class="dest-info">
                        <h2>{{data.destination.code}}</h2>
                        <h3>{{data.destination_date.date}}</h3>
                        <div>
                            <h4>Arrival time: {{data.destination_date.time}}</h4>
                            <h5>{{data.destination.address}}</h5>
                            <h5>{{data.destination.name}}</h5>
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
                        <h4>Weight</h4>
                    </div>
                    <div>
                        <h4>Volume</h4>
                    </div>
                    <div>
                        <h4>Chargeable</h4>
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
                <div class="cargo-grid" v-for="(summari, index) in Summary" :key="index">
                    <div>
                        <h4>{{index + 1}}</h4>
                    </div>
                    <div>
                        <h4>{{summari.midform.quantity}}</h4>
                    </div>
                    <div>
                        <h4>{{summari.TotalWeight}} kg</h4>
                    </div>
                    <div>
                        <h4>{{summari.TotalVolume}}{{summari.volume_unit}}</h4>
                    </div>
                    <div>
                        <h4>{{summari.Chargeable}}</h4>
                    </div>
                    <div>
                        <h4>{{summari.midform.type}}</h4>
                    </div>
                    <div>
                        <h4>{{summari.midform.stacking}}</h4>
                    </div>
                    <div>
                        <h4>{{summari.midform.turnable}}</h4>
                    </div>
                </div>

            </div>
            </div>


            <div class="cost-section">
                <h2>Booking Details</h2>

                <form class="booking-form">
                    <label for="awb">Enter AWB Number</label>
                    <input class="awb-input" type="text" placeholder="AWB Number" ref="awbno">
                </form>

                <div class="cost-grid" id="air-fright-cost">
                    <div><h4>Airline Cost</h4></div>
                    <div><h4>{{data.amount.airline_cost}}</h4></div>
                </div>
                <div class="cost-grid" id="additional-cost">
                    <div><h4>Additional Cost</h4></div>
                    <div><h4>{{data.amount.surcharge}}</h4></div>
                </div>
                <div class="cost-grid" id="total-cost">
                    <div><h2>Total</h2></div>
                    <div><h2>{{data.amount.total}}</h2></div>
                </div>

                <div class="terms-box">
                    <h5><a href="#">Terms: General Terms of Carriage</a></h5>
                    <h5><a href="#">Cancellation Policy</a></h5>
                    <h5><a href="#">Load Information</a></h5>
                </div>

                <button class="btn-2 btn" @click="confirmBooking">Book Now</button>

            </div>
        </div>

    </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'


import { imgs, fetchData } from '../../asset'
import { ExpansionData } from '../../ticketData'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const AEROPLANE_LOGO = imgs('AEROPLANE-LOGO.png')

        const awbno = ref(null)

        const data = computed(function() { return ExpansionData(store.getters['bookingdat/getCheckoutData'])})

        const Summary = computed(function() {
           return store.getters['bookingdat/getformSummary'] 
        })

        async function confirmBooking() {
            if (awbno.value.value.length == 11) {
                    const booking_data = { awb: parseInt(awbno.value.value), flight_id: data.value.flightno, booking_metric: Summary.value[0].midform.dimension,
                            booking_weight: parseFloat(Summary.value[0].midform.weight), booking_volume:parseFloat(Summary.value[0].TotalVolume), booking_chargeable: Summary.value[0].Chargeable, 
                            booking_length: parseFloat(Summary.value[0].midform.length), booking_width: parseFloat(Summary.value[0].midform.width), booking_height: parseFloat(Summary.value[0].midform.height), 
                            booking_quantity: parseInt(Summary.value[0].midform.quantity), booking_rate: 202, booking_cost: parseFloat(data.value.amount.total), 
                            currency: 'INR', cargo_type: Summary.value[0].midform.type, stackable: Summary.value[0].midform.stacking, turnable: Summary.value[0].midform.turnable,
                        }
                    const status = await fetchData({ url: 'submit_transaction', query: null, body: { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json', Authorization: "Bearer" + " " + store.getters['userdat/getToken'] },
                                                                                                body: JSON.stringify(booking_data) } })
                    if ( status.status == 200 ) {
                        store.dispatch('userdat/updateTransactionId', status.message)
                        router.push('/checkout/confirmed')
                    } else {
                        store.dispatch('userdat/displayError', { message: "Booking Failed!", type: false })
                    }
            } else {
                store.dispatch('userdat/displayError', { message: "AWB should be 11 digits!", type: false })
            }
        }
    

        return { data, AEROPLANE_LOGO, Summary, awbno, confirmBooking }
    }

}
</script>

