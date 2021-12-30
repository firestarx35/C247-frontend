<template>
    <div class="cargo-details-container">
        <h1>Cargo Summary</h1>
        <div class="cargo-details-subcontainer-6">
            <div class="cargo-summary-element">
                <strong><p>Total Quantity</p></strong>
                <p>{{props.midformSummary[0].midform.quantity}}</p>
                <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
            </div>
            <div class="cargo-summary-element">
                <p><strong>Total Volume </strong>({{props.midformSummary[0].volume_unit}})</p>
                <p>{{props.midformSummary[0].TotalVolume}}</p>
                <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
            </div>
            <div class="cargo-summary-element">
                <p><strong>Total Weight </strong>(kg)</p>
                <p>{{props.midformSummary[0].TotalWeight}}</p>
                <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
            </div>
            <div class="cargo-summary-element">
                <p><strong>Density </strong>({{props.midformSummary[0].density_unit}})</p>
                <p>{{props.midformSummary[0].Density}}</p>
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
import { computed } from '@vue/runtime-core'
export default {
    props: ['midformSummary'],
    
    setup(props) {

        const comp = computed(function() { console.log(props); return null })

    return { props } 
}
}
</script>