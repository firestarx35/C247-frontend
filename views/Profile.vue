<template>
    <section id="profile-section" class="profile" v-if="profileStatus">
        <div class="profile-container">

            <div class="achievement-tag">
                <div class="tag-texts">
                    <h1>150 <span>this month.</span></h1>
                    <h3>My Bookings</h3>
                    <p>Total Bookings: 17000</p>
                </div>
                <div>
                    <img :src="tick_mark">
                </div>
            </div>

            <div class="achievement-tag">
                <div class="tag-texts">
                    <h1>70 <span>this month.</span></h1>
                    <h3>Bookings Requests</h3>
                    <p>Total Requests Booked: 1700</p>
                </div>
                <div>
                    <img :src="request_icon">
                </div>
            </div>

            <div class="achievement-tag">
                <div class="tag-texts">
                    <h1>70 <span>Hrs this month.</span></h1>
                    <h3>Waiting Time Saved</h3>
                    <p>Total Time Saved: 1700 Hrs</p>
                </div>
                <div>
                    <img :src="clock_icon">
                </div>
            </div>
        </div>

        <div class="profile-container-2">

            <div class="user-detail-container">

                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>First Name</h4>                        
                        <div class="searchable-2">
                            <input type="text" :placeholder="profileData[0]">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Last Name</h4>                        
                        <div class="searchable-2">
                            <input type="text" :placeholder="profileData[1]">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Email</h4>                        
                        <div class="searchable-2">
                            <input type="text" :placeholder="profileData[2]">                            
                        </div>
                    </div>
                </div>
                
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Phone Number</h4>                        
                        <div class="searchable-2">
                            <input type="text" :placeholder="profileData[7]">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Company Name</h4>                        
                        <div class="searchable-2">
                            <input type="text" :placeholder="profileData[4]">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>IATA Code</h4>                        
                        <div class="searchable-2">
                            <input type="text" :placeholder="profileData[3]">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Pincode</h4>                        
                        <div class="searchable-2">
                            <input type="text" :placeholder="profileData[6]">                            
                        </div>
                    </div>
                </div>

            </div>

            <div class="chats">
                <div>
                    <img style="height: 3rem; width: 3rem;" src="/images/blinking_plane_gif.gif" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { imgs } from '../asset'

export default {
    setup() {
        const store = useStore();
        
        const tick_mark = imgs('tick_mark.png')
        const request_icon = imgs('request_icon.png')
        const clock_icon = imgs('clock_icon.png')
        
        const profileData = computed(function() { return store.getters['userdat/getProfile']} )
        const profileStatus = computed(function() { if (store.getters['userdat/getProfileStatus']) { if (store.getters['userdat/getProfile'].length > 0) { return true }
                                                                                                    else { return false }}
                                                    else { return false }})
                                                    
        onBeforeMount(function () { if (store.getters['userdat/getProfileStatus']) { }
                                    else { store.dispatch('userdat/fetchProfile') }
                                    })

        return { tick_mark, request_icon, clock_icon, profileData, profileStatus }
        
    },
}
</script>