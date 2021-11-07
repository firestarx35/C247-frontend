<template>
    <div class="loading_container">
        <div class="circle one"> </div>
            <img :src="plane_blinking" alt="">
            <div class="circle two"> </div>
            <div class="circle tail-light"></div>
    </div>
</template>

<script>
import { imgs } from '../asset'
export default {
    setup() {
        const plane_blinking = imgs('plane_blinking_icon.png')
        
        return { plane_blinking }
    },
}
</script>