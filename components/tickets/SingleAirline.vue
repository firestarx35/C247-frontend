<template>
 <section id="airline_listing">
    <div class="airline-bar">
       
        <div class="logo-name">
            <div><img :src="airline.logo" alt="airline logo"></div>
            <div><p>{{airline.name}}</p></div> 
        </div>
       
        <div class="card-nav-wrapper">
            <div class="slide-block">
                <div class="btn-block" @click="scrollLeft" v-bind:style="disablescrollStyle">                        
                    <img :src="leftscroll" alt="left scroll" v-bind:style="disablescrollStyle"> 
                </div>
                <div class="card-scroll" ref="scrollBlock">
            
                    <single-ticket v-for="(aticket, index) in props.tickets" :key="aticket[2]" :ticket="aticket" @ticket-expand="activateExpansion(index)" > </single-ticket>
                   
                </div>
                    <div class="btn-block" @click="scrollRight" v-bind:style="disablescrollStyle">                    <!-- :class="active" -->
                        <img :src="rightscroll" alt="right scroll" v-bind:style="disablescrollStyle"> 
                    </div>
                
                </div>
                <div class="expansion-wrapper" v-if="isExpanded" >
                    <single-expansion :ticket="detailedData" @edit-form="$emit('edit-form')" ></single-expansion>
                </div>
            
            </div>
        </div>
    </section>
</template>

<script>
import SingleTicket from './SingleTicket.vue';
import SingleExpansion from './SingleExpansion.vue';

import { ref, computed } from 'vue';
import { imgs } from '../../asset'
import { airlineData } from '../../ticketData'

export default {
    components: {
        SingleTicket,
        SingleExpansion,
    },
    emits: ['edit-form'],
    props: ['tickets'],

    setup(props) {

        const isExpanded = ref(false);
        const ExpandedCardindex = ref(0);
        const leftscroll = imgs('scrollarrowleft.svg')
        const rightscroll = imgs('scrollarrowright.svg')
        const scrollBlock = ref('')
        
        const disablescrollStyle = computed(function() {
            if (scrollBlock.value.scrollWidth == scrollBlock.value.clientWidth) { return { cursor: 'default', opacity: 0 }; } 
        })
        
        const airline = computed(function() { return airlineData(props.tickets[0][0]) })
        
        const detailedData = computed(function() {
            return props.tickets[ExpandedCardindex.value];
        } )

        function scrollLeft() {
            scrollBlock.value.scrollLeft = scrollBlock.value.scrollLeft - 200
        }
        
        function scrollRight() {
           scrollBlock.value.scrollLeft = scrollBlock.value.scrollLeft + 200
        }
        function activateExpansion(i) {
            isExpanded.value = true;
            ExpandedCardindex.value = i;
        }
       
        return { leftscroll, rightscroll, isExpanded, scrollBlock, scrollRight, scrollLeft, 
        activateExpansion, props, airline, detailedData, disablescrollStyle }
    },
} 
</script>
