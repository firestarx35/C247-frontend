<template>

<section>
    <section id="saved-entries">
            <div v-if="savedTicketStatus">

                <wallet-ticket v-for="savedTicket in savedTickets" :key="savedTicket" :savedTicket="savedTicket" @remove-wallet="removeWallet" @update-details="showwalletForm"> </wallet-ticket>
                    
            </div>
            <h1 v-else> Your Wallet is Empty! </h1>
    </section>
    <div id="cargo-details-overlay" class="overlay" v-if="showForm"> 
        <div class="overlay-content">
            <!-- =============================A div container for cargo details and cargo summary containers Starts============================ -->
            <div v-click-outside="updateCargo">
                <mid-form v-for="i in formcounter" :key="i" formname="Update" :formid="i" :formno="formcounter" @midform-button="updateCargo" @addmid-form="addmidForm"> </mid-form>
                <summary-form v-if="!!midformData" :midformdata="midformSummary"></summary-form>
            <!-- =============================A div container for cargo details and cargo summary containers Ends============================ -->
            </div>
        </div>
    </div> 
            <!-- ======================= Cargo details overlay Ends ======================================== -->
</section>

</template>

<script>
import { ref, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import WalletTicket from '../components/wallet/WalletTicket.vue'
import MidForm from '../components/Form/MidForm.vue'
import SummaryForm from '../components/Form/SummaryForm.vue'

export default {
    components: {
        WalletTicket,
        MidForm,
        SummaryForm
    },

    setup() {
        const store = useStore();

        const showForm = ref(false)
        const formcounter = ref(1);

        onBeforeMount(function () { if (!store.getters['userdat/getWalletStatus']) { store.dispatch('userdat/fetchWallet') }} )

        const savedTickets = computed(function() { return store.getters['userdat/getWallet'] } )
        const savedTicketStatus = computed(function() { if (store.getters['userdat/getWalletStatus']) { if (store.getters['userdat/getWallet'].length > 0) { return true }
                                                                                                      else { return false }}
                                                        else { return false }})
        const midformSummary = computed(function() { return store.getters['bookingdat/getformSummary'] })

        function showwalletForm() {
            showForm.value = true
        }

        function updateCargo() {
            showForm.value = false
        }
        
        function addmidForm() {
            if (store.getters['bookingdat/getmidform'].length == formcounter.value) { formcounter.value += 1; }  ///checks if previous form has been filled
        }
        
        function removeWallet(id) {
            store.dispatch('userdat/updateWallet', [id, false])
        }

        return { savedTickets, savedTicketStatus, removeWallet, showwalletForm, showForm, formcounter, addmidForm, updateCargo, midformSummary }
        
    },
}
</script>
