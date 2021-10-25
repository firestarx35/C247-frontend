<template>
<section>
 <div class="home-logo"><a :href="home_link"><img :src="CARGO247_White_BG_Logo" alt="Cargo247 Logo" ref></a></div>
    <section class="login-signup">
        <h2 v-if="isSelected">Let's start!</h2>
        <h2 v-else>Let's set you up!</h2>

            <h3 id="login-error" v-if="error" :class="error_style"> {{error_text}} </h3>
        
        <slide-button @get-mode="getSelected" :modes="['Login', 'Sign Up']" :mode="isSelected"></slide-button>

        <div class="login-form" v-if="isSelected">
            <div class="form-element">
                <div class="fill-in">
                    <h4>Email</h4>
                    <div class="searchable">
                        <input type="email" placeholder="" ref="login_email" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Password</h4>
                    <div class="searchable">
                        <input type="text" placeholder="" ref="login_password" @input="error = false">
                    </div>
                </div>
                <div class="fill-in btn">
                    <button type="submit" @click.prevent="submitLogin">Login</button>
                </div>
            </div>            
            <a href="https://c247feedbacktrial-ver1.herokuapp.com/reset_password" id="forget-password"><p>Forgot Password</p></a>
        </div>

<!-- signup -->
        <div class="signup-form" v-if="!isSelected">
            <div class="form-element">
                <div class="fill-in">
                    <h4>First Name</h4>
                    <div class="searchable">
                        <input type="text" ref="first_name" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Last Name</h4>
                    <div class="searchable">
                        <input type="text" ref="last_name" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Company Email</h4>
                    <div class="searchable">
                        <input type="email" ref="signup_email" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Password</h4>
                    <div class="searchable">
                        <input type="text" ref="signup_password" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Confirm Password</h4>
                    <div class="searchable">
                        <input type="text" ref="confirm_password" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>IATA Number</h4>
                    <div class="searchable">
                        <input type="text" placeholder="IATA Number" ref="iata_number" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Company Name</h4>
                    <div class="searchable">
                        <input type="text" ref="company_name" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Mobile Number</h4>
                    <div class="searchable">
                        <input type="text" ref="mobile_number" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Country</h4>
                    <div class="searchable">
                        <input type="text" placeholder="India" ref="country" @input="error = false">
                    </div>
                </div>
                <div class="fill-in">
                    <h4>Pincode</h4>
                    <div class="searchable">
                        <input type="text" ref="pincode" @input="error = false">
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
import { ref, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import SlideButton from '../components/SlideButton.vue'
import { links, imgs } from '../asset'

export default {
    components: {
        SlideButton
    },

    setup() {
        const store = useStore();
        const router = useRouter();
        const CARGO247_White_BG_Logo = imgs('CARGO247_White_BG_Logo.svg');
        const home_link = links('home')

        const isSelected = ref(true);
        const error = ref(false);
        const error_text = ref('');
        const error_style = ref('');

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
            error.value = false;
            isSelected.value = val;
        }

        onBeforeMount(async function() {
            //const token = '123'
            const token = localStorage.getItem('c247-token')
            if ( token && token !="" && token != undefined ) {
                const response = await fetch(links('auto_login'), { method: 'GET', mode: 'cors', headers: { Authorization: "Bearer" + " " + token }});
                if ( response.ok ) { 
                    const res = await response.json(); 
                    if (res.Login == true) { store.dispatch('userdat/authenticateUser', token); router.push('/search')}  }
                else if ( response.status >= 400 ) { console.log(response.statusText); } 
            
            } else { console.log('login user') }
        })
            
        async function postData(url = '', data = {}) {
            const response = await fetch(url, { method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json' },
                                                body: JSON.stringify(data)} );
                            return response.json(); }

        async function submitSignup() {
            if ((first_name.value.value!=='')&&(last_name.value.value!=='')&&(signup_email.value.value!=='')&&(signup_password.value.value!=='')&&
            (confirm_password.value.value!=='')&&(iata_number.value.value!=='')&&(pincode.value.value!=='')&&(country.value.value!=='')&&
            (company_name.value.value!=='')&&(mobile_number.value.value!=='')) {

                if ( signup_password.value.value == confirm_password.value.value ) {
                    postData(links('signup_user'), { first_name: first_name.value.value, last_name: last_name.value.value,
                                                            email: signup_email.value.value, login_psk: signup_password.value.value,
                                                            cass_no: iata_number.value.value, pincode: pincode.value.value, 
                                                            country: country.value.value, company: company_name.value.value, 
                                                            mobile_no: mobile_number.value.value})
                    .then(data => { if (data.user == true) { errorCall("User already exists!", false); isSelected.value = true;}
                                    else { if( data.register == true) { errorCall("Account has been created! Login to your account", true); isSelected.value = true; }
                                            else { erroCall("Unable to create account!", false)}
                                        }
                                })
                    } else { errorCall("Passswords do not match!", false) }
                } else { errorCall("All fields should be filled !", false) }
            }
            
        async function submitLogin() {
            if ((login_email.value.value!=='')&&(login_password.value.value!=='')) {
                postData(links('login_user'), { email: login_email.value.value, psk: login_password.value.value })
                .then(data => { if (data.user == false ) { errorCall("Account does not exist! Please Signup to continue", false); isSelected.value = false; }
                                else { if (data.login == false) { errorCall("Invalid Password!", false) }
                                        else {  errorCall("Login successful", true);  localStorage.setItem('c247-token', data.access_token); store.dispatch('userdat/authenticateUser', data.access_token ); router.push('/search') }
                                    }
                            });
                }
                else { errorCall("All fields should be filled!", false) } }
       

        function errorCall(val, display_type) {
            if (display_type == true ) { error_style.value = 'bluestyle' }
            else { error_style.value = 'redstyle' }
            error.value = true;
            error_text.value = val;
        }
        
        return { CARGO247_White_BG_Logo, home_link, isSelected, submitSignup, submitLogin, login_email, login_password, first_name, 
        last_name, signup_email, company_name, signup_password, confirm_password, iata_number, pincode, country, mobile_number,
        error, error_text, error_style, getSelected } 
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