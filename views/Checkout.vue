<template>

<component :is="currentComponent"></component>
   
</template>

<script>
import "animate.css"
import BookingPage from '../components/booking/BookingPage.vue'
import BookingConfirmation from '../components/booking/BookingConfirmation.vue'

export default {
    components: {
        BookingPage,
        BookingConfirmation,
    },

    setup() {
        const currentComponent = 'BookingPage'




        return { currentComponent }
    }

}
</script>

<style>

</style>