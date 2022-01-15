<template>
    <div id="loading-screen-container">
        <div class="loading-screen-animation">
            <img :src="plane_blinking" alt="aeroplane">
            <div class="circle one"></div>
            <div class="circle two"></div>
            <div class="circle tail-light"></div>
        </div>
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
