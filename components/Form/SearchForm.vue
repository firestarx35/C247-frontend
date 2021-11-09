<template>
<div>
    <section class="cargo-details-section">
        <top-form @get-tickets="$emit('get-tickets')"></top-form>
        <mid-form v-for="i in formcounter" :key="i" :formid="i" :formno="formcounter" @addmid-form="addmidForm" > </mid-form>
        <summary-form v-if="summaryAvailable"></summary-form>
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

    setup() { 
        const store = useStore();

        const formcounter = ref(1);
        onBeforeMount(function() { store.dispatch('bookingdat/clearMidForm') })

        const summaryAvailable = computed(function() { if (store.getters['bookingdat/getformSummary']) { return true }
                                                     else { return false }
                                                     })
        function addmidForm() {
            if (store.getters['bookingdat/getmidform'].length == formcounter.value) { formcounter.value += 1; }  ///checks if previous form has been filled
        }

        return { formcounter, addmidForm, summaryAvailable };}
}
</script>
