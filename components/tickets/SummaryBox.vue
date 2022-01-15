<template>
<section id="airline-listings-2">
      <div id="edit-details-bar">
            <div class="airport-date">
                <div class="airports-2">
                    <div id="dep-airport">
                        <p id="dep-full">{{topform.source.address}}</p>
                        <p id="dep-id">{{topform.source.code}}</p>
                    </div>
                    <div id="bar-icon"><img :src="aeroplane_icon" alt="aeroplane"></div>
                    <div id="arr-airport">
                            <p id="arr-full">{{topform.destination.address}}</p>
                            <p id="arr-id">{{topform.destination.code}}</p>
                    </div>
                    <div id="dep-date">
                        <p>{{topform.date}}</p>
                        <p>Mon</p>
                    </div>
                </div>
            </div>
    
            <div id="button-div">
                <button class="btn-3 btn" @click="$emit('edit-form')">Edit Cargo</button>
                <button class="btn-3 btn" @click="changeView">Switch View</button>
            </div>
    
        </div>

        <div class="best-dep">

            <div class="ticket-filters">
                <h2>Best Departures</h2>
                <div id="cargo-specs">
                    <p>Chargeable weight: {{cargo_summary.chargeable}}</p>
                    <p>Dimension: {{cargo_summary.dimension}}</p>
                </div>
                <div id="filters-div">
                    <h3>Filters:</h3>                           
                    <p id="airline-filter" @click="airlineList = !airlineList">{{airline}}</p>
                     <ul class="dropdown-search" v-if="airlineList">
                        <li v-for="airline in airlines" :key="airline.code"  @click="setAirline(airline.name)"><h3>{{airline.name}}</h3></li> 
                    </ul>
                    <p id="economical" :class="{selected: cheapestFilter}" @click="changeFilter('cheapest')">Economical</p>
                    <p id="fastest" :class="{selected: earliestFilter}" @click="changeFilter('earliest')">Earliest</p>
                    <p id="greenest" :class="{selected: greenestFilter}" @click="changeFilter('greenest')">Greenest</p>
                </div>
            </div>

            <section v-if="isView">
                <single-card  v-for="ticket in unsorted" :key="ticket[12]" :ticket="ticket" @cargo-details="$emit('cargo-details')"></single-card>
            </section>
            <section v-else>
                <single-airline v-for="airline in sorted" :key="airline" :tickets="airline" @cargo-details="$emit('cargo-details')"> </single-airline>
            </section>
    </div>

</section>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { imgs } from '../../asset'
import SingleCard from '../tickets/multiairline/SingleCard.vue'
import SingleAirline from '../tickets/oneairline/SingleAirline.vue'
import { airportData } from '../../ticketData';

export default {
    components: {
        SingleCard,
        SingleAirline
    },
    emits: ['edit-form', 'cargo-details'],

    setup() {
        const store = useStore()
        const aeroplane_icon = imgs('plane_blinking_icon.png')
        const airline = ref('Airline')
        const airlineList = ref(false)

        const airlines = store.getters['bookingdat/getAirlines']
        
        const isView = ref(true)
        const earliestFilter = ref(false)
        const cheapestFilter = ref(true)
        const greenestFilter = ref(false)

        const topform = computed(function() { return { source: airportData(store.getters['bookingdat/getTopform'].source), destination: airportData(store.getters['bookingdat/getTopform'].destination), date: store.getters['bookingdat/getTopform'].date } })
        
        const cargo_summary = computed(function() { const data = store.getters['bookingdat/getformSummary'][0]
        if ( data ) { 
            return { dimension: data.midform.length +'x'+ data.midform.width +'x'+ data.midform.height +' '+ data.unit_system, chargeable: data.Chargeable +' kg'}
        } else { 
            return { dimension: 'NA', chargeable: 'NA'}
            }
        })

        const sorted = computed(function() {
            return store.getters['ticketsdat/getSorted']
        })

        const unsorted = computed(function() {
            return store.getters['ticketsdat/getUnsorted']
        })

        function changeView() {
            isView.value = !isView.value
        }

        function changeFilter(val) {
            earliestFilter.value = false;
            cheapestFilter.value = false;
            greenestFilter.value = false;
            if (val == 'earliest') { earliestFilter.value = true }
            else if (val == 'cheapest') { cheapestFilter.value = true }
            else if (val == 'greenest') { greenestFilter.value = true }
            store.dispatch('ticketsdat/filterChange', val);
        }
        function setAirline(val) {
            console.log(val)
            if (val === 'All') {
                airline.value = 'Airline'
            } else {
                airline.value = val
            }
            airlineList.value = false 
        }
        
        return { aeroplane_icon, topform, cargo_summary, changeFilter, changeView, isView, earliestFilter, cheapestFilter, greenestFilter, sorted, unsorted, airlines, airline, airlineList, setAirline }
    },
}
</script>