<template>
    <h1>Booking</h1>
    <p>Booking date</p>
    <p>Flight date</p>
    <p>Arrival Date</p>
    <p>AWB</p>
    <p>Flight ID</p>
    <p>Source</p>
    <p>Airline Logo</p>
    <p>Destination</p>
    <p>Status</p> 
</template>

<script>
import { computed } from 'vue'


export default {
    props: ['Transac'],

    setup(props) {
        console.log(props.Transac)
    return { props }
    },
}
</script>