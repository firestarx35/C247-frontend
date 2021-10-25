<template>
    <nav v-if="isAuth">
        <div class="nav-container">
            <div class="logo"><a :href="home_link"><img :src="CARGO247_Dark_BG_Logo" alt=""></a></div>
            <div class="nav-links">
                <router-link to="/search">Search</router-link>
                <router-link to="/transactions">Bookings</router-link>
                <router-link to="/wallet"> Wallet</router-link>
                <router-link to="/requests">Requests</router-link>
                <a @click="isProfile = !isProfile"><span class="profile-tag">{{user}}</span></a>
                <ul class="dropdown-profile" v-if="isProfile">
                    <li><h3>My Profile</h3></li>
                    <li><h3>Sign Out</h3></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { links, imgs } from '../asset'

export default {
    setup() {
        const store = useStore();
        const CARGO247_Dark_BG_Logo = imgs('CARGO247_Dark_BG_Logo.svg')
        const home_link = links('home')

        const isProfile = true;

        const user = computed(function() { if (store.getters['userdat/getProfileStatus']) { return store.getters['userdat/getName'] } 
                                            else { return 'Hi'} })

        const isAuth = computed(function() { return store.getters['userdat/getAuthStatus'] })
      
      return { CARGO247_Dark_BG_Logo, home_link, isProfile, isAuth, user }
    },
}
</script>
