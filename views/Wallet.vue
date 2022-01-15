<template>

<section>
    <section id="saved-entries">
            <div v-if="savedTicketStatus">
                <wallet-ticket v-for="savedTicket in savedTickets" :key="savedTicket" :savedTicket="savedTicket" @remove-wallet="removeWallet" @update-details="showwalletForm"> </wallet-ticket>
            </div>
            <div class="empty-pallet" v-else>
                <img :src="empty_pallet" alt="Empty Wallet">
                <h1>Its empty here.</h1>
            </div>
    </section>
    <div id="cargo-details-overlay" class="overlay" v-if="showForm"> 
        <div class="cross-button closebtn" @click="closeForm"><img :src="cross_button" alt="close"></div>
        <div class="overlay-content">
            <div >
                <midform-summary formname="Book" @midform-button="updateCargo"> </midform-summary>
            </div>
        </div>
    </div> 
</section>

</template>

<script>
import { ref, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import WalletTicket from '../components/wallet/WalletTicket.vue'
import MidformSummary from '../components/Form/MidformSummary.vue'
import { imgs } from '../asset'
import { useRouter } from 'vue-router'

export default {
    components: {
        WalletTicket,
        MidformSummary,
    },

    setup() {
        const store = useStore()
        const router = useRouter()
        const empty_pallet = imgs('empty_pallet_icon.svg')
        const cross_button = imgs('cross_button.svg')

        const showForm = ref(false)

        onBeforeMount(function() { 
            if (!!store.getters['userdat/getWallet']) {
                store.dispatch('userdat/fetchWallet')
            }
        })

        const savedTickets = computed(function() { 
            return store.getters['userdat/getWallet'] 
        })
        const savedTicketStatus = computed(function() { 
            if (!!store.getters['userdat/getWallet']) {
                if (store.getters['userdat/getWallet'].length > 0) { 
                    return true
                } else { 
                    return false
                }
            } else {
                return false
            }
        })

        function showwalletForm() {
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
                store.dispatch('userdat/displayError', { message: "Fill the form completely!", type: false })
            }
        }
        
        function removeWallet(id) {
            store.dispatch('userdat/updateWallet', [id, false])
        }

        return { empty_pallet, savedTickets, savedTicketStatus, removeWallet, showwalletForm, showForm, updateCargo, cross_button, closeForm}
        
    },
}
</script>
