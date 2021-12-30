<template>
    <div v-bind:class="[ticketstate, styleclass.activestyle]" @click="expandTicket" v-click-outside="shrinkTicket">
        <div class="card-grid">
            <div class="card-grid-rows-top">
                <div class="card-flex-box text-left">{{ticketdata.source_date.date}}</div>
                <div class="card-flex-box text-right">{{ticketdata.destination_date.date}}</div>
            </div>
        </div>
            
        <div class="card-grid-rows" >
            <div class="card-flex-box-left text-left">
                <strong><p>{{ticketdata.source_date.time}}</p></strong>
                <p>{{ticketdata.source_code}}</p>
            </div>
            <div class="card-flex-box-center text-center">
                <div class="card-img">
                    <img :src="aeroplane_logo" alt="aeroplane">
                </div>
                <p>{{ticketdata.duration}} Hrs</p>
            </div>
            <div class="card-flex-box-right text-right">
                <strong><p>{{ticketdata.destination_date.time}}</p></strong>
                <p>{{ticketdata.destination_code}}</p>
            </div>
        </div>
        <div class="card-grid-rows-bottom">
            <div class="card-flex-box text-left text-black">{{ticketdata.amount}}</div>
            <div class="card-flex-box text-right text-white"></div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { imgs } from '../../asset'
import { ticketData } from '../../ticketData'

export default {
    props: ['ticket'],
    emits: ['ticket-expand'],

    setup(props, { emit }) {
        const store = useStore();
        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')
        const ticketstate = ref('card-container')

        const ticketdata = computed(function() { return ticketData(props.ticket)})
        
        const styleclass = computed(function() { 
            const ndate = new Date(props.ticket[4]);
            if (store.getters['ticketsdat/getCheapest'] == props.ticket[12]) { return {activestyle: 'cheapest-card'}}
            else if (store.getters['ticketsdat/getEarliest'] == props.ticket[12]) { return { activestyle: 'earliest-card'}}
            else if (store.getters['bookingdat/getTopform'].date == ndate.toISOString().split('T')[0]) { return {activestyle:'priority-card'}}
            else { return {activestyle: null}}
        })

        function expandTicket() {
            emit('ticket-expand')
            ticketstate.value = 'active-card'
        }
        function shrinkTicket() {
            if (ticketstate.value == 'active-card') {
                ticketstate.value = 'card-container'
            }
        }

        return {aeroplane_logo, expandTicket, shrinkTicket, ticketdata, styleclass, ticketstate }
    }  
}
</script>

