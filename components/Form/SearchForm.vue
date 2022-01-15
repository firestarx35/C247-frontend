<template>
<div>
    <section class="cargo-details-section">
        <top-form @get-tickets="getTickets"></top-form>
        <midform-summary formname="Book" @midform-button="searchQuotes"></midform-summary>
    </section>
 </div>
</template>

<script>
import TopForm from './TopForm.vue'
import MidformSummary from './MidformSummary.vue'
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex'

export default {
  components: {
    TopForm,
    MidformSummary,
  },
  emits: ['get-tickets'],

    setup(_, {emit}) { 
        const store = useStore()
      
        onBeforeMount(function() { 
          store.dispatch('bookingdat/clearMidForm') 
        })

        function getTickets() {
          emit('get-tickets')
        }

        function searchQuotes() {
          if (store.getters['bookingdat/getTopform']) {
            if (store.getters['bookingdat/getformSummary']) {
              getTickets()
            } else {
              store.dispatch('userdat/displayError', { message: "Cargo details required!", type: false }) 
            }
          } else {
            store.dispatch('userdat/displayError', { message: "Flight details required!", type: false }) 
          }
        }

        return { getTickets, searchQuotes }
        
        }
}
</script>
