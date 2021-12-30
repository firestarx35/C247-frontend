<template>
<div class="cargo-details-container">
    <h1>Enter Flight Details</h1>

    <form @submit.prevent="null" class="form-grid">
        <div class="form-element">
            <div class="fill-in my-1">
                
                <h4>From</h4>
               <airport-form station="source" @send-result="setSource"></airport-form>

            </div>
        </div>
        <div class="form-element">
            <div class="fill-in my-1">
                
                <h4>To</h4>
                <airport-form station="destination" @send-result="setDestination"></airport-form>                        
                
            </div>
        </div>
        <div class="form-element">
            <div class="fill-in my-1">
                
                <h4>Date</h4>                        
                <div class="searchable">
                    <input type="date" placeholder="dd/mm/yyyy"  ref="dates">
                </div>

            </div>
        </div>
        <div class="form-element">
            <div class="fill-in btn my-1">
        
                <button @click.prevent="fetchTickets">Search Flights</button>
            
            </div>
        </div>
    </form>
</div>
</template>
         
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import AirportForm from './AirportForm.vue'
            
export default {
    components: {
        AirportForm
    },
        emits:['get-tickets'],
        
        setup(_, { emit }) {
        const store = useStore();   

        const source = ref(null);
        const destination = ref(null);
        const dates = ref('');

        function setSource(val) {
            source.value = val
        }
        function setDestination(val) {
            destination.value = val
        }
      
        function fetchTickets() {
            if ( (source.value != null) && (destination.value != null) && (dates.value.value !='') ) {
                if (source.value != destination.value) {
                    const routedata = { source: source.value.toUpperCase(), destination: destination.value.toUpperCase(), date: dates.value.value }
                    store.dispatch('bookingdat/addtopform', routedata)
                    store.dispatch('ticketsdat/fetchTickets')
                    emit('get-tickets')
                } else {
                    store.dispatch('userdat/displayError', {message: 'Source and Destination must be different', type: false})
                }
            } else {
                console.log("Complete the form") //ErrorShow.vue
            }
        }

        return { fetchTickets, setSource, setDestination, dates };
        }, 
}
</script>


