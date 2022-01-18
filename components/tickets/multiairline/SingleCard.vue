<template>
<div class="card-container-2 btn" @click="expandTicket" v-click-outside="shrinkTicket">

        <div class="card-container-strip">

            <div class="airline-logo">
                <img :src="ticketdata.airline.logo" :alt="ticketdata.airline.name">
            </div>

            <div class="data-1">
                <p class="p-1">{{ticketdata.source_date.date}}</p>
                <p class="p-2">{{ticketdata.airline.name}}</p>
            </div>

            <div class="data-2">
                <p class="p-11 p-l">{{ticketdata.source_date.time}}</p>
                <img class="p-11" :src="Dots" alt="Dots">
                <p class="p-11 p-r">{{ticketdata.destination_date.time}}</p>
                <p class="p-22 p-l">{{ticketdata.source_code}}</p>
                <p class="p-22">{{ticketdata.duration}}</p>
                <p class="p-22 p-r">{{ticketdata.destination_code}}</p>
            </div>

            <div class="data-3">
                <p class="p-1">{{route.direct}}</p>
                <p class="p-2">{{route.stops}}</p>
            </div>

            <div class="data-4">
                <p class="p-1">{{charges}}</p>
                <p class="p-2">All inclusive</p>
            </div>

            <div class="filter-space">
            <p :id="styleclass.id">{{styleclass.text}}</p>
            </div>
                    
        </div>
            <expansion-card v-if="isExpanded" :ticket="props.ticket" @cargo-details="$emit('cargo-details')"></expansion-card>
    </div>

</template>

<script>
import { ref, computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import ExpansionCard from '../ExpansionCard.vue'
import { imgs } from '../../../asset'
import { unsortedData } from '../../../ticketData'
export default {
    components: {
        ExpansionCard,
    },
    props: ['ticket'],
    emits: ['cargo-details'],
    
    setup(props) {
        const store = useStore()

        const isExpanded = ref(false)
        const Dots = imgs('Dots.svg')
        
        const ticketdata = computed(function() { return unsortedData(props.ticket)})
        const route = computed(function() { 
            if (props.ticket[6] > 0) {
                return {direct: 'Indirect', stops: props.ticket[6]}
            } else {
                return {direct: 'Direct', stops: 'Non-stop'}
            } 
        })
        const styleclass = computed(function() {
            if (store.getters['ticketsdat/getCheapest'] == props.ticket[12]) { return {id: 'economical', text: 'Economical' } }
            else if (store.getters['ticketsdat/getEarliest'] == props.ticket[12]) { return {id: 'fastest', text: 'Fastest' } }
            else { return {id: null, text: null} }
        })

        const charges = computed(function() {
            if (ticketdata.value.amount.available) {
                return 'INR ' + ticketdata.value.amount.total
            } else {
                return 'INR ' + ticketdata.value.amount.rate + '/kg'
            }
        })

        function expandTicket() {
            isExpanded.value = true
        }
        function shrinkTicket() {
            isExpanded.value = false
        }


        return { isExpanded, Dots, ticketdata, charges, expandTicket, shrinkTicket, props, route, styleclass }
    }

}
</script>

