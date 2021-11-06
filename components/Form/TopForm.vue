<template>
<div class="cargo-details-container">
    <h1>Enter Flight Details</h1>

    <form @submit.prevent="null" class="form-grid">
        <div class="form-element">
            <div class="fill-in my-1">
                
                <h4>From</h4>
                <div class="searchable">
                <input type="text" placeholder="Source" v-model.trim="source" @input="onChange('source')" @keyup.down="arrowDown" @keyup.up="arrowUp" @keyup.enter.prevent="onEnter('source')" @blur="fetchTickets">
                    <ul class="dropdown-search" v-show="sourceOpen">
                        <li :class="{ 'active-list': i === arrowCounter }" v-for="(result, i) in results.slice(0,9)" :key="i" @click="setResult(i, 'source'); console.log('Trigerred click 1')" ><h3>{{result.airportCode}},   {{ result.airportName}},   {{result.cityName}}</h3></li>
                    </ul>
                </div>   
            
            </div>
        </div>
        <div class="form-element">
            <div class="fill-in my-1">
                
                <h4>To</h4>                        
                <div class="searchable">
                <input type="text" placeholder="Destination" v-model.trim="destination" @input="onChange('destination')" @keyup.down="arrowDown" @keyup.up="arrowUp" @keyup.enter.prevent="onEnter('destination')" @blur="fetchTickets">
                    <ul class="dropdown-search" v-show="destinationOpen">
                        <li :class="{ 'active-list': i === arrowCounter }" v-for="(result, i) in results.slice(0,9)" :key="i" @click="setResult(i,'destination')" ><h3>{{result.airportCode}},   {{ result.airportName}},   {{result.cityName}}</h3></li>
                    </ul>
                </div> 

            </div>
        </div>
        <div class="form-element">
            <div class="fill-in my-1">
                
                <h4>Date</h4>                        
                <div class="searchable">
                    <input type="date" placeholder="dd/mm/yyyy"  ref="dates"  @blur="fetchTickets">
                </div>

            </div>
        </div>
        <div class="form-element">
            <div class="fill-in btn my-1">
                
                <button @click.prevent="fetchTickets(); $emit('get-tickets')">Search Flights</button>
            
            </div>
        </div>
    </form>
</div>
</template>
         
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
            
export default {
        emits:['get-tickets'],
        
        setup() {
        const store = useStore();

        const airports = computed(function() { return store.getters['bookingdat/getAirports'] }) ;
        const arrowCounter = ref(-1);
        const results = ref([]);
        const sourceOpen = ref(null);
        const destinationOpen = ref(null);
 
        const source = ref('');
        const destination = ref('');
        const dates = ref('');

        function getResults(val) {
            var dat = null
            if (val === 'source') { dat = source.value.toLowerCase() }
            else { dat = destination.value.toLowerCase() }
            if (dat !== '') { results.value = airports.value.filter(function airportCheck(value) {
                var code = value.airportCode.toLowerCase().indexOf(dat)
                var name = value.airportName.toLowerCase().indexOf(dat)
                var city = value.cityName.toLowerCase().indexOf(dat)
                if ((name == 0) || (code == 0) || (city == 0)) { return true; }
                    })
                }
        }

        function onChange(val) {
            if (store.getters['bookingdat/getAirports']) {
                if (val === 'source') { getResults(val); sourceOpen.value = true; destinationOpen.value = false; }
                else { getResults(val); sourceOpen.value = false; destinationOpen.value = true;}
            } else { store.dispatch('bookingdat/fetchAirports') }  
        }

        function arrowDown() {
            if (arrowCounter.value < results.value.length) { arrowCounter.value = arrowCounter.value + 1;} 
            }

        function arrowUp() {
            if (arrowCounter.value > 0) { arrowCounter.value = arrowCounter.value - 1;} 
            }

        function onEnter(val) {
            if (val === 'source') { source.value = results.value[arrowCounter.value].airportCode; sourceOpen.value = false; }
            else { destination.value = results.value[arrowCounter.value].airportCode; destinationOpen.value = false}
            arrowCounter.value = -1;
        }

        function setResult(i, val) {
            if (val === 'source') {
                console.log('Trigerred click')
                source.value = results.value[i].airportCode;
                sourceOpen.value = false
            } else {
                 destination.value = results.value[i].airportCode
                 destinationOpen.value = false
                  }
        }
       
        function fetchTickets() {
            if ( (source.value != '') && (destination.value != '') && (dates.value.value !='') ) {
                const routedata = { from: source.value.toUpperCase(), to: destination.value.toUpperCase(), date: dates.value.value };
                store.dispatch('bookingdat/addtopform', routedata);
            }}

        return { sourceOpen, source, destinationOpen, destination, dates, onEnter, onChange, arrowDown, arrowCounter, arrowUp, setResult, getResults, fetchTickets, results};
        }, 
}
</script>


