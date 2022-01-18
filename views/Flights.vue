<template>

<section>
  <keep-alive>  
      <search-form @get-tickets="getTickets" v-if="!areticketAvailable"></search-form>
  </keep-alive>
      <summary-box v-if="areticketAvailable" @edit-form="editForm" @cargo-details="inputCargo"></summary-box>
      
      <div id="cargo-details-overlay" class="overlay" v-if="showForm"> 
        <div class="cross-button closebtn" @click="closeForm"><img :src="cross_button" alt="close"></div>
        <div class="overlay-content">
            <div>
                <midform-summary formname="Book Now" @midform-button="updateCargo"> </midform-summary>
            </div>
        </div>
      </div> 

</section>
    
</template>

<script>
import SearchForm from '@/components/Form/SearchForm.vue'                 // @ is an alias to /src
import SummaryBox from '../components/tickets/SummaryBox.vue'
import MidformSummary from '../components/Form/MidformSummary.vue'
import { ref, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { imgs } from '../asset'

export default {
  components: {
    SearchForm,
    SummaryBox,
    MidformSummary
  },

  setup() {
    const store = useStore()
    const router = useRouter()
    const cross_button = imgs('cross_button.svg')

    const showTicket = ref(false)
    const showForm = ref(false)


    onBeforeMount(function() {
      if (!store.getters['bookingdat/getAirportstatus']) { store.dispatch('bookingdat/fetchAirports')}
      if (!store.getters['userdat/getWallet']) { store.dispatch('userdat/fetchWallet') }
      if (!store.getters['userdat/getProfileStatus']) { store.dispatch('userdat/fetchProfile') }
      if (!!store.getters['userdat/getTransactions']) { store.dispatch('userdat/fetchTransactions') }
      if (!store.getters['bookingdat/getAirlinestatus']) { store.dispatch('bookingdat/fetchAirlines')}
    })

    const areticketAvailable = computed(function() {
      return (store.getters['ticketsdat/getTicketstatus'] && showTicket.value)
    })

    function getTickets() {
      store.dispatch('ticketsdat/fetchTickets')
      showTicket.value = true
    }
    function editForm() {
      showTicket.value = false
      store.dispatch('ticketsdat/clearTickets')
    }

    function inputCargo() {
      showForm.value = true
    }

    function closeForm() {
      showForm.value = false    
    }

    function updateCargo() {
      if (store.getters['bookingdat/getMidForm']) {
        closeForm()
        router.push('/checkout/summary')
      } else {
        store.dispatch('userdat/displayError', { message: "Complete the form!", type: false })
      }
    }

    return { areticketAvailable, cross_button, getTickets, editForm, showForm, inputCargo, closeForm, updateCargo }
  },
}
</script>
