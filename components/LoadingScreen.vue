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

<style scoped>

.loading_container{
    background: transparent;
    display: flex;
    align-items: center;
    height: 50px;
    width: 50px;
    justify-content: center;
}
.circle {
    border-radius: 100%;
    background-color: #ffffff;
    width: 0.5rem;
    height: 0.5rem;
    box-shadow: 0 0 10px 10px #fff;
    flex-shrink: 0;
}
.one {
    animation: blink 1s infinite;
    transform: translate(2px,5px);
    z-index: 1100;
}
.two {
    animation: blink 1s infinite;
    transform: translate(-2px,5px);
    z-index: 1100;
}

.tail-light {
    background-color: rgb(255, 255, 255);
    transform: translate(-24.5px,13px);
    box-shadow: 0 0 10px 10px rgb(255, 255, 255);
    animation: blink-2 1s infinite;
    animation-delay: 0.5s;
    width: 0.2rem;
    height: 0.2rem;
}

img {
    height: 35px;
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    3% {
        opacity: 1;
    }
    6% {
        opacity: 0;
    }
    18%{
        opacity: 0;
    }
    21%{
        opacity: 1;
    }
    25% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

@keyframes blink-2 {
    0% {
        opacity: 0;
    }
    6% {
        opacity: 1;
    }
    15% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}
</style>