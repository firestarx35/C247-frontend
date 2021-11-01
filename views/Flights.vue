<template>

<section>
  <keep-alive>  
      <search-form @get-tickets="getTickets" v-if="!areticketAvailable"></search-form>
      <summary-box v-else @edit-form="editForm"></summary-box>
  </keep-alive>
      <multiple-airlines v-if="areticketAvailable"></multiple-airlines>
</section>
    
</template>

<script>
import SearchForm from '@/components/Form/SearchForm.vue'                 // @ is an alias to /src
import MultipleAirlines from '@/components/tickets/MultipleAirlines.vue'
import SummaryBox from '../components/booking/SummaryBox.vue'

import { ref, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    SearchForm,
    MultipleAirlines,
    SummaryBox
  },

  setup() {
    const store = useStore();

    const showTicket = ref(false);

    onBeforeMount(function() {
      if (!store.getters['bookingdat/getAirportstatus']) { store.dispatch('bookingdat/fetchAirports'); }
      if (!store.getters['userdat/getWalletStatus']) { store.dispatch('userdat/fetchWallet'); }
      if (!store.getters['userdat/getProfileStatus']) { store.dispatch('userdat/fetchProfile'); }
      if (!store.getters['userdat/getTransactionsStatus']) { store.dispatch('userdat/fetchTransactions'); }
    })

    const areticketAvailable = computed(function() {
      return (store.getters['ticketsdat/getTicketstatus'] && showTicket.value)
    })

    function getTickets() {
      showTicket.value = true;
    }
    function editForm() {
      showTicket.value = false;

    }
    return { areticketAvailable, getTickets, editForm }
  },
}
</script>
