<template>
<section v-if="confirmBooking">
    <div class="filters">
        <div class="filter-grid">
            <h3>Filters</h3>
            <div class="filter-box earliest" v-bind:class="{earliestInactiveClass: !earliestFilter}" @click="changeFilter('earliest')">Earliest</div>
            <div class="filter-box cheapest" v-bind:class="{cheapestActiveClass: cheapestFilter}" @click="changeFilter('cheapest')">Cheapest</div>
            <div class="filter-box sameday" v-bind:class="{samedayActiveClass: samedayFilter}" @click="changeFilter('same-day')">Same day</div>
            <div class="filter-box best" v-bind:class="{bestActiveClass: bestFilter}" @click="changeFilter('best')">Best</div>
            <div class="filter-box greenest" v-bind:class="{greenestActiveClass: greenestFilter}" @click="changeFilter('greenest')">Greenest</div>
        </div>
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

<style scoped>
.filters {
    width: 100%;
    max-width: 1600px;
    margin: 1rem auto 0 auto;
}
.filter-grid {
    display: grid;
    grid-template-columns: repeat(6,10rem);
    justify-content: space-between;
}
.filter-grid h3 {
    margin: auto;
}
.filter-box {
    padding: .5rem 2rem .5rem 1rem;
    border-left: 2rem #3f3f3f solid;
    /* box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3); */
    border-radius: 0.5rem;
    background: #fff;
    opacity: .4;
    cursor: pointer ;
}
.earliest {
    border-left: 2rem #345EFF solid;
    opacity: 1;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}
.sameday {
    background: #333;
    border-left: 2rem #ffcb00 solid;
    color: #fff;
}
.cheapest {
    border-left: 2rem #8F55A2 solid;
}
.greenest {
    border-left: 2rem #9ACD32 solid;
    
}
.best {
    border-left: 2rem solid #459FE3;
}
.filter-box:hover {
    opacity: 1;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}


.earliestInactiveClass {
    padding: .5rem 2rem .5rem 1rem;
    border-radius: 0.5rem;
    background: #fff;
    opacity: .4;
    cursor: pointer ;
    border-left: 2rem #345EFF solid;
}

.cheapestActiveClass {
    padding: .5rem 2rem .5rem 1rem;
    border-left: 2rem #3f3f3f solid;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    background: #fff;
    opacity: .6;
    cursor: pointer ;
    border-left: 2rem #8F55A2 solid;
    opacity: 1;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}
.samedayActiveClass {
    padding: .5rem 2rem .5rem 1rem;
    border-left: 2rem #3f3f3f solid;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    background: #fff;
    opacity: .6;
    cursor: pointer ;
    background: #333;
    border-left: 2rem #ffcb00 solid;
    color: #fff;
    opacity: 1;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}
.bestActiveClass {
    padding: .5rem 2rem .5rem 1rem;
    border-left: 2rem #3f3f3f solid;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    background: #fff;
    opacity: .6;
    cursor: pointer ;
    border-left: 2rem solid #459FE3;
    opacity: 1;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}
.greenestActiveClass {
    padding: .5rem 2rem .5rem 1rem;
    border-left: 2rem #3f3f3f solid;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    background: #fff;
    opacity: .6;
    cursor: pointer ;
    border-left: 2rem #9ACD32 solid;
    opacity: 1;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}

</style>