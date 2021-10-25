<template>
    <div class="summary-bar">
        <div>
            <div class="summary-bar-airports">
                <h1>{{topform.from}}</h1>
                <img src="https://c247feedbacktrial-ver1.herokuapp.com/api/assets/?name=AEROPLANE-LOGO.png" alt="aeroplane"> 
                <h1>{{topform.to}}</h1>
                <!-- <h1>{{topform.date}}</h1> -->
            </div>
            <div class="summary-bar-totals">
                <h3>Total volume: {{cargosummary[0].TotalVolume}} {{dimensionSystem}}</h3>
                <h3>Total weight: {{cargosummary[0].TotalWeight}} kg</h3>
                <h3>Total quantity: {{cargosummary[0].TotalQuantity}}</h3>
                <!-- <h3>Date: {{cargosummary[0].TotalQuantity}}</h3> -->
            </div>
            <button class="btn btn-1" type="submit" @click="$emit('edit-form')">Edit</button>
        </div>
    </div>

</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    emits: ['edit-form'],

    setup() {
        const store = useStore()

        const topform = computed(function() { return store.getters['bookingdat/getTopform'] })
        const cargosummary = computed(function() { const data = store.getters['bookingdat/getformSummary'] 
                                                    if (data) { return store.getters['bookingdat/getformSummary'] }
                                                    else { return [{TotalVolume: 'NA', TotalWeight: 'NA', TotalQuantity:'NA'}] }
                                                    })
        const dimensionSystem = computed(function() { if (cargosummary.value) 
                                                        { if (cargosummary.value[0].dimension == true ) { return 'cm³' }
                                                          else { return 'inch³' } 
                                                    }})
        
        return { topform, cargosummary, dimensionSystem }
    },
}
</script>