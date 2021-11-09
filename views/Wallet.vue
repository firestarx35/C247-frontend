<template>
    <section id="saved-entries">
            <div v-if="savedTicketStatus">
                    <div class="saved-container">

                        <wallet-ticket v-for="savedTicket in savedTickets" :key="savedTicket" :savedTicket="savedTicket" @remove-wallet="removeWallet"> </wallet-ticket>
                    
                    </div>
            </div>
            <h1 v-else> Your Wallet is Empty! </h1>
    </section>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import WalletTicket from '../components/wallet/WalletTicket.vue'

export default {
    components: {
        WalletTicket
    },

    setup() {
        const store = useStore();
        const savedTickets = computed(function() { return store.getters['userdat/getWallet']} )
        const savedTicketStatus = computed(function() { if (store.getters['userdat/getWalletStatus']) { if (store.getters['userdat/getWallet'].length > 0) { return true }
                                                                                                      else { return false }}
                                                        else { return false }})

        onBeforeMount(function () { if (!store.getters['userdat/getWalletStatus']) { store.dispatch('userdat/fetchWallet') }} )
        
        function removeWallet(id) {
            store.dispatch('userdat/updateWallet', [id, false])
        }

        return { savedTickets, savedTicketStatus, removeWallet }
        
    },
}
</script>
