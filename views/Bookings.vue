<template>
    <div class="booking-history-container">
    <section id="booking-history">
        <h1>Booking History</h1>
        <div class="filters-search">

            <div class="search-bar">
                <h4>Search</h4>
                <input type="text">
            </div>
        </div>

        <div class="heading-grid">
            <h4>Booking Date</h4>
            <h4>Flight Date</h4>
            <h4>AWB</h4>
            <h4>Airline</h4>
            <h4>Source</h4>
            <h4>Destination</h4>
            <h4>Status</h4>
        </div>
            <div v-if="!!Transactions">
                <transactions-list v-for="transaction in Transactions" :key="transaction[0]" :transaction="transaction"></transactions-list>
            </div>   
            <div class="empty-pallet" v-else>
                <img :src="empty_pallet" alt="Empty Wallet">
                <h1>Its empty here. Get some Bookings done!</h1>
            </div>
        </section>
    </div>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import TransactionsList from '../components/transaction/TransactionsList.vue'
import { imgs } from '../asset'

export default {
    components: {
        TransactionsList
    },

    setup() {
        const store = useStore()
        const empty_pallet = imgs('empty_pallet_icon.svg')

        const Transactions = computed(function() { return store.getters['userdat/getTransactions']} )

        onBeforeMount(function () { if (!!store.getters['userdat/getTransactions']) {  }
                                    else { store.dispatch('userdat/fetchTransactions') }
                                    }
                    )

        return { empty_pallet, Transactions }
        
    },
}
</script>
