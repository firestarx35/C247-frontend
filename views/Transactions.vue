<template>
    <section>
        <h1>Bookings</h1>
            <div v-if="TransactionStatus">
                <h1>booking list</h1>
                <transactions-list v-for="transac in Transactions" :key="transac[0]" :Transac="transac"></transactions-list>
            </div>
            <h1 v-else> No transactions to show! Get some booking done.</h1>
    </section>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import TransactionsList from '../components/transaction/TransactionsList.vue'

export default {
    components: {
        TransactionsList
    },

    setup() {
        const store = useStore();
        const Transactions = computed(function() { return store.getters['userdat/getTransactions']} )
        const TransactionStatus = computed(function() { if (store.getters['userdat/getTransactions'].length > 0) { return true }
                                                        else { return false }})

        onBeforeMount(function () { if (store.getters['userdat/getTransactionsStatus']) { console.log("Transaction data is already present", "| Code from Transactions.vue"); }
                                    else { store.dispatch('userdat/fetchTransactions') }
                                    }
                    )

        return { Transactions, TransactionStatus }
        
    },
}
</script>
