<template>
    <div class="card-container" v-bind:class="styleclass.activestyle" @click="$emit('ticket-expand')">
        <div class="card-grid">
            <div class="card-grid-rows-top">
                <div class="card-flex-box text-left">{{ticketdata.sourcedate.date}}</div>
                <div class="card-flex-box text-right">{{ticketdata.destinationdate.date}}</div>
            </div>
        </div>
            
        <div class="card-grid-rows" >
            <div class="card-flex-box-left text-left">
                <strong><p>{{ticketdata.sourcedate.time}}</p></strong>
                <p>{{props.ticket[4]}}</p>
            </div>
            <div class="card-flex-box-center text-center">
                <div class="card-img">
                    <img :src="aeroplane_logo" alt="aeroplane">
                </div>
                <p>{{ticketdata.duration}} Hrs</p>
            </div>
            <div class="card-flex-box-right text-right">
                <strong><p>{{ticketdata.destinationdate.time}}</p></strong>
                <p>{{props.ticket[5]}}</p>
            </div>
        </div>
        <div class="card-grid-rows-bottom">
            <div class="card-flex-box text-left text-black">Rate:&#8377;{{ticketdata.cost.value}}/kg</div>
            <div class="card-flex-box text-right text-white"></div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { imgs } from '../../asset'

export default {
    props: ['ticket'],
    emits: ['ticket-expand'],

    setup(props) {
        const store = useStore();
        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')

        const isQuote = ref(false); ///Set it by getter 
        const ticketdata = computed(function() {
            return {sourcedate: customDate(props.ticket[1]), 
                    destinationdate: customDate(props.ticket[6]),
                    duration: duration.value,
                    cost: cost,
                  }
        })
    //cost generator
        const cost = computed(function() {
            if (isQuote.value == false) { return props.ticket[11] }
            else { return  'Total:' + props.ticket[11];}          ///Multiply it by weight
        })
    //Class generator
        const styleclass = computed(function() { 
            const ndate = new Date(props.ticket[1]);
            if (store.getters['ticketsdat/getCheapest'] == props.ticket[2]) { return {activestyle: 'cheapest-card'}}
            else if (store.getters['ticketsdat/getEarliest'] == props.ticket[2]) { return { activestyle: 'earliest-card'}}
            else if (store.getters['bookingdat/getTopform'].date == ndate.toISOString().split('T')[0]) { return {activestyle:'priority-card'}}
            else { return {activestyle: null}}
        })
    //Duration generator
        const duration = computed(function() {
            const minutes = ((new Date(props.ticket[6]) -  new Date(props.ticket[1]))/60000);
            const hours = Math.floor(minutes/60);
            const remainingminutes = minutes%60;
            return  hours + ':'+ remainingminutes
        })
    //test

    //Date generator
        function customDate(dates) {
            const newDate = new Date(dates)
            const month = newDate.toLocaleString('default', { month: 'short' });
            const dayName = newDate.toString().split(' ')[0];
            const datetime = { date: newDate.getDate() + ' '+ month.toUpperCase() + ' | ' +  dayName.toUpperCase(),
                                time: newDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'}) }
            return datetime }

        return {aeroplane_logo, props, ticketdata, styleclass }
    }  
}
</script>

