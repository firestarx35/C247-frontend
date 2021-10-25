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
                    <img src="/images/tick_mark.png" alt="">
                </div>
            </div>

            <div class="achievement-tag">
                <div class="tag-texts">
                    <h1>70 <span>this month.</span></h1>
                    <h3>Bookings Requests</h3>
                    <p>Total Requests Booked: 1700</p>
                </div>
                <div>
                    <img src="/images/request_icon.png  " alt="">
                </div>
            </div>

            <div class="achievement-tag">
                <div class="tag-texts">
                    <h1>70 <span>Hrs this month.</span></h1>
                    <h3>Waiting Time Saved</h3>
                    <p>Total Time Saved: 1700 Hrs</p>
                </div>
                <div>
                    <img src="/images/clock_icon.png" alt="">
                </div>
            </div>

        </div>

        <div class="profile-container-2">

            <div class="user-detail-container">

                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>First Name</h4>                        
                        <div class="searchable-2">
                            <p>{{profileData[0]}}</p>
                            <input type="text" placeholder="James">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Last Name</h4>                        
                        <div class="searchable-2">
                            <p>{{profileData[1]}}</p>
                            <input type="text" placeholder="Bondwa">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Email</h4>                        
                        <div class="searchable-2">
                            <p>{{profileData[2]}}</p>
                            <input type="text" placeholder="Bondwa">                            
                        </div>
                    </div>
                </div>
                
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Phone Number</h4>                        
                        <div class="searchable-2">
                            <p>{{profileData[7]}}</p>
                            <input type="text" placeholder="9876543210">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Company Name</h4>                        
                        <div class="searchable-2">
                            <p>{{profileData[4]}}</p>
                            <input type="text" placeholder="Bigger Than Apple Inc.">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>IATA Code</h4>                        
                        <div class="searchable-2">
                            <p>{{profileData[3]}}</p>
                            <input type="text" placeholder="ABC79065015">                            
                        </div>
                    </div>
                </div>
                <div class="form-element-2">
                    <div class="fill-in-2 my-1">
                        <h4>Pincode</h4>                        
                        <div class="searchable-2">
                            <p>{{profileData[6]}}</p>
                            <input type="text" placeholder="1111111">                            
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

export default {
    setup() {
        const store = useStore();
        const profileData = computed(function() { return store.getters['userdat/getProfile']} )
        const profileStatus = computed(function() { if (store.getters['userdat/getProfileStatus']) { if (store.getters['userdat/getProfile'].length > 0) { return true }
                                                                                                    else { return false }}
                                                    else { return false }})
                                                    
        onBeforeMount(function () { if (store.getters['userdat/getProfileStatus']) { console.log("Profile data is already present", "| Code from Profile.vue"); }
                                    else { store.dispatch('userdat/fetchProfile') }
                                    })

        return { profileData, profileStatus }
        
    },
}
</script>