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

<style scoped>

.card-container {
    width: 390px;
    height: 98px;
    background: #fff;
    border-bottom: 35px solid #ffcb00;
    border-radius: 13px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    margin: 10px 0px 10px 15px;
    cursor: pointer;
}

.priority-card {
    background: #333;
    border-color: #ffcb00;
    color: #fff;
}
.card-container:hover {
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.3);
}
.cheapest-card {
    border-bottom: 35px solid #8f55a2

}
.earliest-card {
    border-bottom: 35px solid #345EFF;
}

.card-grid-rows {
    display: flex;
    width: 100%;
    /* border: red 1px solid; */
    
}
.card-grid-rows-top {
    display: flex;
    width: 100%;
    padding-top: 5px;
    /* border: red 1px solid; */
    
}
.card-grid-rows-bottom {
    display: flex;
    width: 100%;
    padding-top: 5px;
    /* border: red 1px solid; */
    
}

.card-flex-box {
    font-family: 'Inconsolata', monospace;
    font-weight: bold;
    /* font-size: 15px; */
    width: 195px;
    padding: 0 10px;
}
.card-flex-box-left {
    display: flex;
    font-family: 'Inconsolata', monospace;
    /* font-weight: bold; */
    /* font-size: 15px; */
    width: 130px;
    padding: 4px 0 10px 10px;
    flex-direction: column;
}
.card-flex-box-center {
    display: flex;
    font-family: 'Inconsolata', monospace;
    /* font-weight: bold; */
    font-size: 15px;
    width: 130px;
    height: 40px;
    padding: 4px 0 10px 10px;
    flex-direction: column;
    margin-top: -8px;
}
.card-flex-box-right {
    display: flex;
    font-family: 'Inconsolata', monospace;
    /* font-weight: bold; */
    /* font-size: 15px; */
    width: 130px;
    padding: 4px 10px 010px;
    flex-direction: column;
}

.card-flex-box-center .card-img {
    width: 100%;
}

.card-img img {
    display: block;
    height: 25px;
    object-position: -10px ;
}
.text-left {
    text-align: left;
}
.text-right {
    text-align: right;
}
.text-center {
    text-align: center;
}
.text-white {
    color: #fff;
}
.text-black {
    color: black;
}




</style>