<template>
    <div class="cargo-details-container">
        <h1>Cargo Summary</h1>
        <div class="cargo-details-subcontainer-6">
            <div class="cargo-summary-element">
                <strong><p>Total Quantity</p></strong>
                <p>{{summ.summary.quantity}}</p>
                <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
            </div>
            <div class="cargo-summary-element">
                <p><strong>Total Volume </strong>({{summ.units.vol}})</p>
                <p>{{summ.summary.volume}}</p>
                <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
            </div>
            <div class="cargo-summary-element">
                <p><strong>Total Weight </strong>(kg)</p>
                <p>{{summ.summary.weight}}</p>
                <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
            </div>
            <div class="cargo-summary-element">
                <p><strong>Density </strong>({{summ.units.densi}})</p>
                <p>{{summ.summary.density}}</p>
                <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
            </div>
            <div class="cargo-summary-element">
               <p><strong>Chargeable Weight</strong></p>
               <p>NA</p>
                <!-- <p v-for="(item, index) in summ" :key="index">NA</p> -->
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { summarisedData } from '../../ticketData'

export default {
    setup() {
        const summ = computed(function() { return summarisedData() })

        return { summ }
    },
}
</script>