<template>
    <div class="searchable">
        <input type="text" ref="input_field" :placeholder="props.station" v-model.trim="station" @input="onChange()" @keyup.down="arrowDown" @keyup.up="arrowUp" @keyup.enter.prevent="onEnter()">
            <ul class="dropdown-search" v-show="isOpen">
                <li :class="{ 'active-list': index === arrowCounter }" v-for="(result, index) in results.slice(0,9)" :key="index" @click.capture="setResult(result.airportCode)" ><h3>{{result.airportCode}}, {{ result.airportName}}, {{result.cityName}}</h3></li>
            </ul>
    </div> 
</template>

<script>
import { ref, computed , onMounted} from "vue";
import { useStore } from 'vuex';

export default {
    emits:['send-result'],
    props: ['station'],

    setup(props, {emit}) {
        const store = useStore();
        
        const station = ref('')
        const input_field = ref('')
        const arrowCounter = ref(-1);
        const results = ref([]);
        const isOpen = ref(null);
        const airports = computed(function() { return store.getters['bookingdat/getAirports'] }) ;

        onMounted(function() { if (props.station == 'source') { setTimeout(function() {input_field.value.focus()}, 1000 ) } })


        function getResults() {
            var dat = station.value.toLowerCase()
            if (dat !== '') { results.value = airports.value.filter(function airportCheck(value) {
                var code = value.airportCode.toLowerCase().indexOf(dat)
                var name = value.airportName.toLowerCase().indexOf(dat)
                var city = value.cityName.toLowerCase().indexOf(dat)
                if ((name == 0) || (code == 0) || (city == 0)) { return true; }
                    })
                }
        }
        function onChange() {
            if (store.getters['bookingdat/getAirports']) {
                getResults();
                isOpen.value = true; 
            } else { store.dispatch('bookingdat/fetchAirports') }  
        }

        function arrowDown() {
            if (arrowCounter.value < results.value.slice(0,9).length) { 
                arrowCounter.value = arrowCounter.value + 1
                station.value = results.value[arrowCounter.value].airportCode 
                } 
            }

        function arrowUp() {
            if (arrowCounter.value > 0) { 
                arrowCounter.value = arrowCounter.value - 1
                station.value = results.value[arrowCounter.value].airportCode
                } 
            }

        function onEnter() {
            isOpen.value = false; 
            arrowCounter.value = -1;
            sendResult()
        }

        function setResult(i) {
            station.value = i
            isOpen.value = false 
            arrowCounter.value = -1;
            sendResult()        
        }

        function sendResult() {
            emit('send-result', station.value)
        }
    return{ props, station, input_field, onChange, arrowDown, arrowUp, arrowCounter, onEnter, setResult, isOpen, results}
    }
}
</script>

