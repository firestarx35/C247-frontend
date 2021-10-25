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
                    <img :src="leftscroll" alt="left scroll"  > <!--v-show="scrollsAvailable"-->
                </div>
                
                <section ref="scrollBlock">
                    <transition-group name="flip-list" tag="div" class="card-scroll">
                       
                        <single-ticket v-for="(aticket, index) in tickets" :key="aticket[2]" :ticket="aticket" @ticket-expand="activateExpansion(index)"> </single-ticket >
                   
                    </transition-group>
                </section>
                    <div class="btn-block" @click="scrollRight" >                    <!-- :class="active" -->
                        <img :src="rightscroll" alt="right scroll"  > <!-- v-show="scrollsAvailable" -->
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
        const valve = ref(true)
        
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

        const tickets = computed(function() { if (valve.value == true) { return props.tickets.slice(0, 3) }
                                                else { return props.tickets.slice(3, 6)}})


        function scrollLeft() {
            console.log("scroll left")
            valve.value = true
            console.log(valve)
        }
        
        function scrollRight() {
            console.log("scroll right", scrollBlock.value.clientWidth, scrollBlock.value.scrollWidth)
            valve.value = false
           
        }
        function activateExpansion(i) {
            isExpanded.value = true;
            ExpandedCardindex.value = i;
        }
        
        return { leftscroll, rightscroll, isExpanded,scrollBlock, scrollRight, scrollLeft, activateExpansion, props, airline, detailedData, tickets }
    },
} 
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.8s ease;
}

#airline_listing {
    padding: 0 20px;
    z-index: 0;
    padding-left: 1rem;
}

.airline-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1600px;    
    margin: 20px auto;
    padding: 10px 0 10px 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background: #cccccc9f;
}

.logo-name {
    display: flex;
    width: 130px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px 0 0 16px;
    background: #fff;
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
}

.logo-name div > img {
    width: 100px;
    object-fit: contain;
    margin-bottom: 10px;
}

.logo-name div > p {
    width: max-content;
    font-family: 'Inconsolata';
    font-weight: bold;
}

.card-nav-wrapper {
    display: block;
    width: 100%;
    /* border: red 2px solid; */
    overflow: hidden;
}

.slide-block {
    display: flex;
    justify-content: flex-start;
    width: auto;
    overflow: auto;
    /* border: black 2px dashed; */
}

.btn-block {
    display: flex;
    width: auto;
    height: 100%;
    cursor: pointer;
    padding: 5px;
    align-self: center;
    /* border: pink 2px solid; */
}


/* Scrollbar */
.card-scroll {
    display: flex;
    overflow: auto;
    padding-right: 10px;
    height: auto;
 
}

::-webkit-scrollbar {
    height: 6px;
}

  /* Track */
::-webkit-scrollbar-track {
    background: hsl(0, 0%, 100%); 
}

  /* Handle */
::-webkit-scrollbar-thumb {
    background: #ffcb00; 
}

  /* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #8a6e00; 
}

.expansion-wrapper {
    width: 100%;
    display: block;
    min-height: 280px;
    padding: 0.6rem 1.2rem;
    overflow: auto;
}




</style>

