<template>
<section @click="openExpansion" v-click-outside="closeExpansion">

 <div class="expansion-container" >
    <div class="entry-grid">
        <h4>{{dates.booking_date.date}}</h4>
        <h4>{{dates.source_date.date}} | {{dates.source_date.time}}</h4>
        <h4>{{props.transaction[2]}}</h4>
        <h4>{{airline.name}}</h4>
        <h4>{{props.transaction[5]}}</h4>
        <h4>{{props.transaction[7]}}</h4>
        <h4>{{flight_status}}</h4>
    </div>
    <div class="saved-card" v-if="isExpanded" >
        <div class="airline">
            <img :src="airline.tail" alt="Aeroplane tail">
        </div>
        <div class="details">
            <div class="column-1">
                <div class="departure">
                    <h1>{{dates.destination_date.date}} | {{dates.destination_date.time}}</h1>
                    <p>Expected Delivery Date</p>
                </div>
                <div class="arrival">
                    <h3>{{props.transaction[1]}}</h3>
                    <p>Transaction Id</p>
                </div>
            </div>

            <div class="column-2">
                <p>Total Cost: {{props.transaction[10]}} {{props.transaction[9]}}</p>
                <p>Chargable Weight: {{props.transaction[11]}} kg</p>
                <button class="btn-3 btn">Raise issue</button>
                <button class="btn-3 btn" @click="getInvoice">Invoice</button>
            </div>
        </div>
    </div>
</div>
</section>


</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { airlineData , customDate2 } from '../../ticketData'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['transaction'],
    
    setup(props) {
        const store = useStore()
        const router = useRouter()

        const isExpanded = ref(false)

        const airline = computed(function() { 
            return airlineData(props.transaction[4])
        })
        const dates = computed(function() { 
            return {booking_date: customDate2(props.transaction[3]), source_date: customDate2(props.transaction[6]), destination_date: customDate2(props.transaction[8]) }
        })

        const flight_status = computed(function() {
            const code = props.transaction[12] 
            if (code == 1) {
                return 'Inflight'
            } else if (code == 2){
                return 'Delayed'
            } else if (code == 3) {
                return 'Delivered'
            } else {
                return 'Pending'
            }
        })

        function openExpansion() {
            isExpanded.value = true
        }

        function closeExpansion() {
            isExpanded.value = false
        }

        function getInvoice() {
            store.dispatch('userdat/updateTransactionId', props.transaction[1])
            router.push('/checkout/confirmed')
        }

        return { props,  airline, dates, flight_status, isExpanded, openExpansion, closeExpansion , getInvoice }

    },
}
</script>
