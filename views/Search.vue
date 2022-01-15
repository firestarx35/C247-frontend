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
import Flights from './Flights.vue'

export default {
  components: {
    Flights,
  },
  setup() {
    
  },
}
</script>