<template>
   <section class="logout-section">
        <div id="logout">
            <h1>Logout</h1>
            <h3>You have been successfully logged out.</h3>
            <h3>Have a nice day!</h3>
            <button class="btn" @click="$router.push('/')">Got more to do! Login.</button>
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        onMounted( function() { store.dispatch('userdat/unauthenticateUser') })
    },
}
</script>