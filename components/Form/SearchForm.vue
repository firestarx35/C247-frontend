<template>
<div>
    <section class="cargo-details-section">
        <top-form @get-tickets="$emit('get-tickets')"></top-form>
        <mid-form v-for="i in formcounter" :key="i" formname="Search Quotes" :formid="i" :formno="formcounter" @midform-button="searchQuotes" @addmid-form="addmidForm" > </mid-form>
        <summary-form v-if="!!midformSummary" :midformSummary="midformSummary"></summary-form>
    </section>
 </div>
</template>

<script>
import TopForm from './TopForm.vue';
import MidForm from './MidForm.vue';
import SummaryForm from './SummaryForm.vue';

import { computed, ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    TopForm,
    MidForm,
    SummaryForm
  },
  emits: ['get-tickets'],

    setup(_, {emit}) { 
        const store = useStore();
        
       

        const formcounter = ref(1);

        onBeforeMount(function() { store.dispatch('bookingdat/clearMidForm') })
        
        const midformSummary = computed(function() { return store.getters['bookingdat/getformSummary'] })
        
        function addmidForm() {
            if (store.getters['bookingdat/getmidform'].length == formcounter.value) { formcounter.value += 1; }  ///checks if previous form has been filled
        }
        function searchQuotes() {
          if (store.getters['bookingdat/getformSummary']) {
            emit('get-tickets')
          } else {
            console.log("Complete the form")
          }
        }

        return { formcounter, addmidForm, midformSummary, searchQuotes }
        
        }
}
</script>
