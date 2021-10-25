<template>
    <div class="cargo-details-container">
        <h1>Cargo Summary</h1>
        <div class="cargo-details-subcontainer-6">
            <div class="cargo-summary-element">
                <strong><p>Total Quantity</p></strong>
                <p v-for="(item, index) in summary" :key="index">{{item.TotalQuantity}}</p>
            </div>
            <div class="cargo-summary-element">
                <p><strong>Total Volume </strong>({{dimensionSystem.vol}})</p>
                <p v-for="(item, index) in summary" :key="index">{{item.TotalVolume}}</p>
            </div>
            <div class="cargo-summary-element">
                <p><strong>Total Weight </strong>(kg)</p>
                <p v-for="(item, index) in summary" :key="index">{{item.TotalWeight}}</p>
            </div>
            <div class="cargo-summary-element">
                <p><strong>Density </strong>({{dimensionSystem.desi}})</p>
                <p v-for="(item, index) in summary" :key="index">{{item.Density}}</p>
            </div>
            <div class="cargo-summary-element">
               <p><strong>Chargeable Weight</strong></p>
                <p v-for="(item, index) in summary" :key="index">NA</p>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const summary = computed(function() {
            return store.getters['bookingdat/getformSummary']
        })
        const dimensionSystem = computed(function() { if (summary.value[0].dimension == true ) { return { vol: 'cm³', desi: 'cm³/kg'} }
                                                        else { return { vol: 'inch³', desi: 'inch³/kg' } 
                                                    }})

        return { summary, dimensionSystem }
    },
}
</script>