<template>
<section v-if="confirmBooking">
        <div class="filter-grid">
            <h3>Filters</h3>
            <div class="filter-box earliest" v-bind:class="{earliestInactiveClass: !earliestFilter}" @click="changeFilter('earliest')">Earliest</div>
            <div class="filter-box cheapest" v-bind:class="{cheapestActiveClass: cheapestFilter}" @click="changeFilter('cheapest')">Cheapest</div>
            <div class="filter-box sameday" v-bind:class="{samedayActiveClass: samedayFilter}" @click="changeFilter('same-day')">Same day</div>
            <div class="filter-box best" v-bind:class="{bestActiveClass: bestFilter}" @click="changeFilter('best')">Best</div>
            <div class="filter-box greenest" v-bind:class="{greenestActiveClass: greenestFilter}" @click="changeFilter('greenest')">Greenest</div>
        </div>
        <single-airline v-for="airline in Airlines" :key="airline" :tickets="airline" > </single-airline>
</section>
</template>

<script>
import SingleAirline from './SingleAirline.vue';

import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
        SingleAirline,
    },

    setup() {
        const store = useStore();

        const earliestFilter = ref(true);
        const cheapestFilter = ref(false);
        const samedayFilter = ref(false);
        const bestFilter = ref(false);
        const greenestFilter = ref(false);
        const confirmBooking = ref(true);

        const earliestActiveClass = 'earliestActiveClass'

        const Airlines = computed(function() {
            return store.getters['ticketsdat/getTickets']
        })

        function changeFilter(val) {
            earliestFilter.value = false;
            cheapestFilter.value = false;
            samedayFilter.value = false;
            bestFilter.value = false;
            greenestFilter.value = false;
            if (val == 'earliest') { earliestFilter.value = true }
            else if (val == 'cheapest') { cheapestFilter.value = true }
            else if (val == 'same-day') { samedayFilter.value = true }
            else if (val == 'best') { bestFilter.value = true }
            else if (val == 'greenest') { greenestFilter.value = true }
            store.dispatch('ticketsdat/filterChange', val);
        }

        return { Airlines, changeFilter, earliestFilter, earliestActiveClass, cheapestFilter, samedayFilter, bestFilter, greenestFilter, confirmBooking  }
    },
}
</script>
