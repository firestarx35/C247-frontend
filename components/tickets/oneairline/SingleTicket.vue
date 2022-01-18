<template>

<div :class="styleclass[0]" @click="expandTicket" v-click-outside="shrinkTicket">
    <div class="card-grid">
        <div class="card-grid-rows-top">
            <div class="card-flex-box text-left">{{ticketdata.source_date.date}}</div>
            <div class="card-flex-box text-right">{{ticketdata.destination_date.date}}</div>
        </div>
    </div>
        
    <div class="card-grid-rows">
        <div class="card-flex-box-left text-left">
            <p>{{ticketdata.source_date.time}}</p>
            <p>{{ticketdata.source_code}}</p>
        </div>
        <div class="card-flex-box-center text-center">
            <div class="card-img">
                <img :src="aeroplane_logo" alt="aeroplane">
            </div>
            <p>{{ticketdata.duration}}</p>
        </div>
        <div class="card-flex-box-right text-right">
            <p>{{ticketdata.destination_date.time}}</p>
            <p>{{ticketdata.destination_code}}</p>
        </div>
    </div>
    <div class="card-grid-rows-bottom">
        <div :class="styleclass[1]">{{ charges }} </div>
        <div class="card-flex-box text-right">All Inclusive</div>
    </div>
</div>

</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { imgs } from '../../../asset'
import { sortedData } from '../../../ticketData'

export default {
    props: ['ticket'],
    emits: ['ticket-expand'],

    setup(props, { emit }) {
        const store = useStore();
        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')
        
        const ticketstate = ref(false)
        const ticketdata = computed(function() { return sortedData(props.ticket)})
        const charges = computed(function() {
            if (ticketdata.value.amount.available) {
                return 'INR ' + ticketdata.value.amount.total
            } else {
                return 'INR ' + ticketdata.value.amount.rate + '/kg'
            }
        })

        const styleclass = computed(function() {
            // const ndate = new Date(props.ticket[4]);
            var style = 'card-container '
            var text = 'card-flex-box text-left '
            if (store.getters['ticketsdat/getCheapest'] == props.ticket[12]) { style += 'cheapest-card'; text += 'text-white' }
            else if (store.getters['ticketsdat/getEarliest'] == props.ticket[12]) { style += 'earliest-card'; text += 'text-white'  }
            // else if (store.getters['bookingdat/getTopform'].date == ndate.toISOString().split('T')[0]) { style += 'priority-card'}
            if (ticketstate.value == true) {
                style += ' selected'
            }
            return [style, text]
        })

        function expandTicket() {
            emit('ticket-expand')
            ticketstate.value = true
        }
        function shrinkTicket() {
                ticketstate.value = false
        }

        return {aeroplane_logo, expandTicket, shrinkTicket, ticketdata, charges, styleclass }
    }  
}
</script>

