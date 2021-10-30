<template>
 <section id="airline_listing">
    <div class="airline-bar">
       
        <div class="logo-name">
            <div><img :src="airline[1]" alt="airline logo"></div>
            <div><p>{{airline[0]}}</p></div>
        </div>
       
        <div class="card-nav-wrapper">
            <div class="slide-block">
                <div class="btn-block" @click="scrollLeft" >                        
                    <img :src="leftscroll" alt="left scroll"  v-show="scrollsAvailable"> <!---->
                </div>
                <div class="card-scroll" ref="scrollBlock">
            
                    <single-ticket v-for="(aticket, index) in props.tickets" :key="aticket[2]" :ticket="aticket" @ticket-expand="activateExpansion(index)"> </single-ticket>
                   
                </div>
                    <div class="btn-block" @click="scrollRight" >                    <!-- :class="active" -->
                        <img :src="rightscroll" alt="right scroll" v-show="scrollsAvailable"> <!--  -->
                    </div>
                
                </div>
                <div class="expansion-wrapper" v-if="isExpanded" >
                    <single-expansion :ticket="detailedData"></single-expansion>
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

export default {
    components: {
        SingleTicket,
        SingleExpansion,
    },
    props: ['tickets'],

    setup(props) {

        const isExpanded = ref(false);
        const ExpandedCardindex = ref(0);
        const leftscroll = imgs('scrollarrowleft.svg')
        const rightscroll = imgs('scrollarrowright.svg')
        const scrollBlock = ref('')
        
        const airline = computed(function() {
            if (props.tickets[0][0] == 1) { return ['Spice jet', imgs('spice-jet-logo.png')]}
            else if (props.tickets[0][0] == 2) { return ['Air India', imgs('Air-India-Express-logo.svg')]}
            else if (props.tickets[0][0] == 3) { return ['Indigo', imgs('indigo-logo.png')]}
            else if (props.tickets[0][0] == 4) { return ['Lufthansa', imgs('lufthansa-logo.png')]}
            else if (props.tickets[0][0] == 5) { return ['Vistara', imgs('Vistara-logo.svg')]}
            else if (props.tickets[0][0] == 6) { return ['DHL', imgs('DHL-Express-logo.png')]}
            else if (props.tickets[0][0] == 7) { return ['Blue Dart', imgs('Blue-Dart-logo.png')]}
            else if (props.tickets[0][0] == 8) { return ['Turkish Airways', imgs('turkish-airlines-logo.png')]}
        })
        const detailedData = computed(function() {
            return props.tickets[ExpandedCardindex.value];
        } )
        const scrollsAvailable = computed( function() { if (scrollBlock.value.scrollWidth > scrollBlock.value.clientWidth) { return true }
                                                        else { return false }
                                                        })

        function scrollLeft() {
            scrollBlock.value.scrollLeft = scrollBlock.value.scrollLeft - 200
        }
        
        function scrollRight() {
            // console.log(scrollBlock.value.offsetWidth, scrollBlock.value.offsetLeft, scrollBlock.value.scrollLeft, scrollBlock.value.scrollWidth)
           scrollBlock.value.scrollLeft = scrollBlock.value.scrollLeft + 200
        }
        function activateExpansion(i) {
            console.log("Trigerred expansion", i, detailedData)
            isExpanded.value = true;
            ExpandedCardindex.value = i;
        }
        
        return { leftscroll, rightscroll, isExpanded,scrollBlock, scrollRight, scrollLeft, activateExpansion, props, airline, detailedData, scrollsAvailable}
    },
} 
</script>
