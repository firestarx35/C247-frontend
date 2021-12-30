<template>
    <div class="summary-bar">
        <div>
            <div class="summary-bar-airports">
                <h1>{{topform.source}}</h1>
                <img :src="aeroplane_logo" alt="aeroplane"> 
                <h1>{{topform.destination}}</h1>
                <!-- <h1>{{topform.date}}</h1> -->
            </div>
            <div class="summary-bar-totals">
                <h3>Volume: {{cargo_summary.volume}} {{cargo_summary.volume_unit}}</h3>
                <h3>Weight: {{cargo_summary.weight}}</h3>
                <h3>Quantity: {{cargo_summary.quantity}}</h3>
                <!-- <h3>Date: {{cargosummary[0].TotalQuantity}}</h3> -->
            </div>
            <button class="btn-1" type="submit" @click="$emit('edit-form')">Edit</button>
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { imgs } from '../../asset'

export default {
    emits: ['edit-form'],

    setup() {
        const store = useStore()
        const aeroplane_logo = imgs('AEROPLANE-LOGO.png')

        const topform = computed(function() { return store.getters['bookingdat/getTopform'] })
        const cargo_summary = computed(function() { const data = store.getters['bookingdat/getformSummary'][0]
        if ( data ) { 
            return { quantity: data.midform.quantity, weight: data.TotalWeight, volume: data.TotalVolume+' kg', density: data.Density, volume_unit: data.volume_unit }
        } else { 
            return { quantity:'NA', weight: 'NA', volume: 'NA', density:'NA', volume_unit: '' }
            }
        })
        
        return { aeroplane_logo, topform, cargo_summary }
    },
}
</script>