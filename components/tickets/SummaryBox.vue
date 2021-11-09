<template>
    <div class="summary-bar">
        <div>
            <div class="summary-bar-airports">
                <h1>{{topform.from}}</h1>
                <img :src="aeroplane_logo" alt="aeroplane"> 
                <h1>{{topform.to}}</h1>
                <!-- <h1>{{topform.date}}</h1> -->
            </div>
            <div class="summary-bar-totals">
                <h3>Volume: {{cargo_summary.summary.volume}} {{cargo_summary.units.vol}}</h3>
                <h3>Weight: {{cargo_summary.summary.weight}} kg</h3>
                <h3>Quantity: {{cargo_summary.summary.quantity}}</h3>
                <!-- <h3>Date: {{cargosummary[0].TotalQuantity}}</h3> -->
            </div>
            <button class="btn btn-1" type="submit" @click="$emit('edit-form')">Edit</button>
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { summarisedData } from '../../ticketData'
import { imgs } from '../../asset'

export default {
    emits: ['edit-form'],

    setup() {
        const store = useStore()
        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')

        const topform = computed(function() { return store.getters['bookingdat/getTopform'] })
        const cargo_summary = computed(function() { return summarisedData() })
        
        return { aeroplane_logo, topform, cargo_summary }
    },
}
</script>