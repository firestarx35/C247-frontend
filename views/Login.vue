<template>
<section>
 <div class="home-logo"><a :href="home_link"><img :src="CARGO247_White_BG_Logo" alt="Cargo247 Logo"></a></div>
    <section class="login-signup">
        <h2 v-if="isSelected">Let's start!</h2>
        <h2 v-else>Let's set you up!</h2>
        
        <slide-button @get-mode="getSelected" :modes="['Login', 'Sign Up']" :mode="isSelected"></slide-button>

        <div class="login-form" v-if="isSelected">
            <div class="form-element">
                <div class="fill-in">
                    <h4>Email</h4>
                    <div class="searchable">
                        <input type="email" placeholder="" ref="login_email" @blur="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Password</h4>
                    <div class="searchable">
                        <input type="text" placeholder="" ref="login_password" v-on:keyup.enter="submitLogin" @blur="removeError">
                    </div>
                </div>
                <div class="fill-in btn">
                    <button type="submit" @click.prevent="submitLogin">Login</button>
                </div>
            </div>            
            <a :href="reset_password" id="forget-password"><p>Forgot Password</p></a>
        </div>
<!-- signup -->
        <div class="signup-form" v-if="!isSelected">
            <div class="form-element">
                <div class="fill-in">
                    <h4>First Name <span>*</span></h4>
                    <div class="searchable">
                        <input type="text" ref="first_name" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Last Name</h4>
                    <div class="searchable">
                        <input type="text" ref="last_name" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Company Email <span>*</span></h4>
                    <div class="searchable">
                        <input type="email" ref="signup_email" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Password <span>*</span></h4>
                    <div class="searchable">
                        <input type="text" ref="signup_password" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Confirm Password <span>*</span></h4>
                    <div class="searchable">
                        <input type="text" ref="confirm_password" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>IATA Number</h4>
                    <div class="searchable">
                        <input type="text" placeholder="IATA Number" ref="iata_number" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Company Name</h4>
                    <div class="searchable">
                        <input type="text" ref="company_name" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Mobile Number <span>*</span></h4>
                    <div class="searchable">
                        <input type="text" ref="mobile_number" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Country <span>*</span></h4>
                    <div class="searchable">
                        <input type="text" placeholder="India" ref="country" @input="removeError">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Pincode <span>*</span></h4>
                    <div class="searchable">
                        <input type="text" ref="pincode" @input="removeError">
                    </div>
                </div>
                <div class="fill-in btn">
                    <button type="submit" @click.prevent="submitSignup">Sign Up</button>
                </div>
            </div>
        </div>

    </section>
</section>
</template>

<script>
import { ref, onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { links, imgs } from '../asset'

export default {

    setup() {
        const store = useStore();
        const router = useRouter();
        const CARGO247_White_BG_Logo = imgs('CARGO247_White_BG_Logo.svg');
        const home_link = links('home')
        const reset_password = links('reset_password')

        const isSelected = ref(true);
        
        const login_email = ref('');
        const login_password = ref('');

        const first_name = ref('');
        const last_name = ref('');
        const signup_email = ref('');
        const signup_password = ref('');
        const confirm_password = ref('');
        const iata_number = ref('');
        const pincode= ref('');
        const country = ref('');
        const company_name = ref('');
        const mobile_number = ref('');

       function getSelected(val) {
            isSelected.value = val;
        }

        onBeforeMount(async function() {
            const token = localStorage.getItem('c247-token')
            if ( token && token !="" && token != undefined && token != 'undefined' ) {
                const response = await fetch(links('auto_login'), { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + token }});
                if ( response.ok ) { store.dispatch('userdat/authenticateUser', token); router.push('/search') }
                else { store.dispatch('userdat/displayError', {message: "Session Expired", type: false }) }
            }
        })

        onMounted(function() {
            setTimeout(function() { login_email.value.focus()}, 1500)
        })

        async function submitSignup() {
            if ((first_name.value.value!=='')&&(last_name.value.value!=='')&&(signup_email.value.value!=='')&&(signup_password.value.value!=='')&&
            (confirm_password.value.value!=='')&&(iata_number.value.value!=='')&&(pincode.value.value!=='')&&(country.value.value!=='')&&
            (company_name.value.value!=='')&&(mobile_number.value.value!=='')) {
                if ( signup_password.value.value == confirm_password.value.value ) {
                    signup_data = { first_name: first_name.value.value, last_name: last_name.value.value,
                                    email_id: signup_email.value.value, login_psk: signup_password.value.value,
                                    iata_no: iata_number.value.value, pincode: pincode.value.value, 
                                    country: country.value.value, company_name: company_name.value.value, 
                                    phone_number: mobile_number.value.value
                                    }
                    await fetch(links('signup_user'), { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json' },
                                                        body: JSON.stringify(signup_data)})
                                                        .then(function(response) {
                                                            if (response.ok) {return response }
                                                            throw Error(response.status)
                                                        })
                                                        .then(function(response) { 
                                                            store.dispatch('userdat/displayError', { message: "Account created", type: true })
                                                        })
                                                        .catch(function(error) {
                                                            if (error.message == 409) {
                                                                store.dispatch('userdat/displayError', { message: "Account already exist! Please login to continue", type: false }) 
                                                                isSelected.value = true; 
                                                            } else {
                                                                console.warn("Fetch Failed")
                                                            }
                                                        })
                } else { store.dispatch('userdat/displayError', { message: "Passswords do not match!", type: false })}
            } else { store.dispatch('userdat/displayError', { message: "All fields must be filled!", type: false }) }
        }

        async function submitLogin() {
            if ((login_email.value.value!=='')&&(login_password.value.value!=='')) {
                var userdat = new FormData()
                userdat.append("username", login_email.value.value)
                userdat.append("password", login_password.value.value)
                await fetch(links('login_user'), { method: 'POST', mode: 'cors', body: userdat })
                .then(function(response) {
                    if (response.ok) { return response }
                    throw Error(response.status)
                    })
                    .then(function(response) { 
                        return response.json()
                        })
                        .then(function(dat) {
                                store.dispatch('userdat/displayError', { message: "Login successful", type: true })
                                localStorage.setItem('c247-token', dat.access_token); 
                                store.dispatch('userdat/authenticateUser', dat.access_token )
                                router.push('/search')
                            })
                            .catch(function(error) {
                                if (error.message == 404) {
                                    store.dispatch('userdat/displayError', { message: "Account does not exist! Please signup to continue", type: false })
                                    isSelected.value = false
                                }
                                else if (error.message == 406) {
                                    store.dispatch('userdat/displayError', { message: "Invalid Password!", type: false })
                                }
                                else { 
                                    console.warn("Fetch Failed")
                                }
                            })
                }
        }
            

       

        return { CARGO247_White_BG_Logo, home_link, reset_password, isSelected, submitSignup, submitLogin, login_email, login_password, first_name, 
        last_name, signup_email, company_name, signup_password, confirm_password, iata_number, pincode, country, mobile_number,
        getSelected } 
    },
}

</script>

<style scoped>

.redstyle {
    color: #FF0000
}
.bluestyle {
    color: #00ff007b
}

h1 {
    color: #0a0092;
}

</style>