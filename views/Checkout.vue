<template>
    <router-view v-slot="{ Component }">
        <transition
         enter-active-class="animate__animated animate__fadeInRight"
         leave-active-class="animate__animated animate__fadeOutLeft"
         mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script>
import "animate.css"
import CheckoutSummary from '../components/checkout/CheckoutSummary.vue'
import CheckoutConfirmed from '../components/checkout/CheckoutConfirmed.vue'

export default {
    components: {
        CheckoutSummary,
        CheckoutConfirmed,
    },
   
   setup() {
      
    return {  }
    }
}
</script>
