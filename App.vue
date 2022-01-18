<template> 
    <nav-bar></nav-bar>   
    <error-show></error-show>
    <loading-screen v-if="isLoading"></loading-screen> 
    <router-view v-slot="{ Component }" v-if="!isLoading">
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
import NavBar from './components/NavBar.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    components: {
        NavBar,
        LoadingScreen,
    },
  setup() {
    const store = useStore()
    const isLoading = computed(function() { return store.getters['userdat/loadingState']})
    
  return { isLoading }},
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');


/* Added styles */
.active-list {
    background: #fff;
    border-radius: 2rem;
    color: #000;
}

/* For highlighting expanded airline card in airline listings page. */
.active-card {
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.3);
}
/* Added ends */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  font-weight: 500;
}

body {
  background: #f0f0f0;
  position: relative;
}

h3,
h4,
h5 {
  font-weight: 400;
}

h1 {
  font-size: 2rem;
  font-weight: 300;
}

h2 {
  font-weight: 300;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  top: 0;
  background: #000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 10;
}

.nav-container {
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding: 0 20px;
}

.nav-links {
  display: flex;
  align-items: center;
  position: relative;
}

.current-page {
  background-color: #ffcb00;
  border-radius: 3px;
  color: #000 !important;
}

/* Hero Section */
#hero-section {
  border-bottom: 200px solid transparent;
  width: 100vw;
  margin-top: 5rem;
  border-bottom: solid 70px #ffcd00;
  display: flex;
  justify-content: center;
}
.hero-container {
  margin-bottom: -1rem;
}
.hero-container img {
  margin: auto;
  width: 100%;
  max-width: 1200px;
  object-position: bottom;
  margin-bottom: -20px;
  display: flex;
}
.hero-container > img {
  margin: auto auto -5rem auto;
  z-index: 100;
}

/* Steps Section */
#steps {
  width: 100vw;
  margin-top: -50px;
}

.step-container {
  max-width: 1400px;
  height: 90vh;
  min-height: 50rem;
  width: 95%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: auto;
  align-items: center;
  margin-top: -20px;
  padding: 0 10px;
}
.bg-yellow {
  background: #ffcd00;
}
.row-reverse {
  flex-direction: row-reverse;
}

.step-img {
  width: 70%;
  height: auto;
}

.step-img .twin-image-container {
  position: relative;
}

.step-img img {
  object-position: center center;
  height: auto;
  width: 100%;
  padding: 10px;
  object-fit: contain;
  border-radius: 20px;
  margin: auto;
}

.step-img .twin-image-container img:last-child {
  width: 13rem;
  position: absolute;
  top: 18%;
  right: 40%;
  animation: fade-in 2s 1 forwards;
  animation-delay: 1s;
  /* opacity: 0; */
}

@keyframe fade-in {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.step-content {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 0 3rem;
  width: 30%;
  /* border: solid 2px red; */
}

.step-content h1 {
  font-weight: 500;
  word-spacing: 4px;
}

.step-content p {
  margin-top: 1.5rem;
  word-spacing: 3px;
}

.call-to-action-window {
  width: 100%;
  padding: 5%;
  height: 20rem;
  display: grid;
  grid-template-columns: 3fr 7fr;
  background-color: #ffcb00;
}

.call-to-action-window-button {
  width: 100%;
  height: auto;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  /* border: solid 2px red; */
  justify-content: center;
  align-items: center;
  /* background-color: #ffcb00; */
}

.call-to-action-window-button button {
  border: none;
  outline: none;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: large;
  font-family: 'montserrat';
  font-weight: 500;
  border-radius: 1rem;
  cursor: pointer;
  background: f;
  white-space: nowrap;
  box-shadow: 0px 0px 5px 3px rgb(0 0 0 / 15%);
}

.call-to-action-window-button button:hover {
  box-shadow: 0px 0px 8px 3px rgb(0 0 0 / 35%);
}

.call-to-action-window-button .loading_container  img {
  transform: translateY(-18px);
}

.signup-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.signup-text p{
  color: #000;
  text-align: center;
}
.signup-text h1{
  font-weight: 500;
}


/* ====================Clouds Start=================== */
.hero-bg {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.spacer {
  flex-grow: 1;
}
.spacer:last-child {
  background-color: #f0f0f0;
}
.svg {
  width: 100vw;
  height: auto;
}
.main {
  max-width: 700px;
  width: calc(100% - 4rem);
  margin: 4rem auto;
}
/* ====================Clouds End=================== */


#steps > h1 {
  text-align: center;
}

.step-content h1:nth-child(2) {
  text-align: left;
  color: #b88d00;
}
.white-text h1:nth-child(2) {
  text-align: left;
  color: #fff;
}
.step-content > p {
  line-height: 1.8;
}
/* ==================================Navbar============================= */

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 10;
}

.nav-container {
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding: 0 20px;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 12px 15px;
}

.nav-links a > .profile-tag {
  color: #ffcb00;
}

.logo {
  display: flex;
  justify-items: center;
  align-self: center;
  height: 30px;
}

.logo img {
  height: 100%;
}
/* ==================================Navbar Ends============================= */

/* ==================================Section Starts============================= */

#profile-section {
  margin: 2rem auto auto auto;
  padding: 2rem 5rem;
  max-width: 1800px;
}

.profile-container {
  border-radius: .4rem;
  background: #fff;
  padding: 1rem 0;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px 4px rgba(92, 92, 92, 0.315);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}
.profile-container-2 {
  border-radius: .4rem;
  background: #fff;
  padding: 1rem 4rem 1rem 4rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px 4px rgba(92, 92, 92, 0.315);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.achievement-tag {
  background-color: #ffcb00;
  border-radius: .4rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: 8rem;
  width: 20rem;
  box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.achievement-tag div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.achievement-tag div img {
  height: 4rem;
}

.tag-texts h1 span {
  font-size: 1.1rem;
  font-weight: 400;
}

.tag-texts p {
  font-size: 0.9rem;
}

/* ==================================Section Ends============================= */

.user-detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0 2rem;
}

.chats {
  background-color: rgb(204, 204, 204);
  width: 100%;
  height: 90%;
  margin: 1rem;
  padding: 1rem;
  border-radius: .4rem;
  box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.2);
}

/* ==================================Form Starts============================= */

.form-element-2 {
  width: 100%;
}
.fill-in-2 {
  width: 100%;
  background-color: #ffcb00;
  border-radius: 1.4rem;
  color: #000;
  display: flex;
  border: #ffcb00 3px solid;
  margin: 2rem 0;
  flex-direction: column;
  padding: 0.2rem;
}

.my-1 {
  margin: 1rem 0;
}

.fill-in-2 h4 {
  font-weight: bold;
  padding: 0 1rem;
  margin: 0.5rem 0;
  justify-self: flex-start;
  font-size: 12px;
  align-content: center;
}
.searchable-2 {
  margin: 0;
  border-radius: 2rem;
  position: relative;
  height: 2.2rem;
}
.searchable-2 input {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 12px;
  font-weight: 500;
  font-family: "montserrat";
}
.searchable-2 input:focus {
  box-shadow: 0 0 0px 5px #fcf4d9;
  background: #fcf4d9;
}

.fill-in-2 button {
  border: none;
  outline: none;
  width: 100%;
  background-color: #ffcb00;
  padding: 0.1rem 1rem;
  margin: 0.5rem 0;
}

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
}

.login-form > p {
  opacity: 0.7;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
/* ==================================Form Starts============================= */

/* ==================================Footer Starts============================= */
footer {
  display: grid;
  background: #fff;
  border-radius: 2rem 2rem 0 0;
  padding: 2rem 5rem;
  bottom: 0;
  width: 100vw;
  height: 200px;
}
footer .logo-description {
  grid-column: 3 / span 2;
  grid-row: 1;
  width: 350px;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
footer .logo-description p {
  margin-top: 2rem;
}
footer .copyright {
  grid-column: 1 / span 11;
  grid-row: 2;
  text-align: center;
}
.logo-description img {
  width: 98%;
}
footer .nav-links {
  grid-column: 5 / span 5;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}
footer .nav-links a {
  color: #000000cc;
  text-decoration: none;
}
footer .nav-links div {
  padding-top: 12px;
}
footer .nav-links div p {
  margin: 12px;
}
footer .nav-links a:hover {
  text-decoration: underline;
}
/* ==================================Footer Ends============================= */

/* ==================================Call to Action Starts============================= */

/* ==================================Loading Animation Starts============================= */
.call-to-action {
  display: flex;
  height: 4rem;
  align-items: center;
  background-color: #ffcb00;
  border-radius: 1rem;
  padding: 1rem;
  width: 16rem;
  position: absolute;
  top: 18rem;
  left: 45vw;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
}
.call-to-action:hover {
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.651);
}
.call-to-action button {
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 1.3rem;
  font-family: "montserrat";
  font-weight: 500;
}
.loading_container {
  background: transparent;
  display: flex;
  align-items: center;
  height: 50px;
  width: 50px;
  justify-content: center;
  position: relative;
  transform: translate(0, 5px);
  /* border: black 2px solid; */
}
.circle {
  border-radius: 100%;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 10px 10px rgb(255, 255, 255);
  flex-shrink: 0;
  position: absolute;
  animation: blink 1s infinite;
  z-index: 1100;
}
.one {
  transform: translate(15px, 0px);
}
.two {
  transform: translate(-15px, 0px);
}

.tail-light {
  background-color: rgb(255, 255, 255);
  transform: translate(0px, 8px);
  box-shadow: 0 0 10px 10px rgb(255, 255, 255);
  animation: blink-2 1s infinite;
  animation-delay: 0.5s;
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
}

.loading_container > img {
  height: 30px;
  width: auto;
  transform: translateY(-30px);
  margin-top: 1.9rem;
}
/* ==================================Loading Animation Starts============================= */
@keyframes blink {
  0% {
    opacity: 0;
  }
  3% {
    opacity: 1;
  }
  6% {
    opacity: 0;
  }
  18% {
    opacity: 0;
  }
  21% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes blink-2 {
  0% {
    opacity: 0;
  }
  6% {
    opacity: 1;
  }
  15% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
/* ==================================Loading Animation Ends============================= */

/* ==================================Media Queries Start============================= */

@media screen and (max-width: 1000px) {
  .step-container {
    height: 80vw;
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  .step-container {
    flex-direction: column;
  }

  .step-img {
    width: 90%;
  }

  .step-content {
    width: auto;
    height: fit-content;
    text-align: center;
  }
}

@media screen and (min-width: 1000px) {
  .call-to-action {
    top: 20rem;
    left: 40vw;
  }
}

@media screen and (min-width: 1920px) {
  .hero-container {
    margin-top: 5rem auto 0 auto;
  }
  .hero-container > img {
    max-width: 1600px;
  }
  .step-container {
    height: 40vw;
  }
  .step-img {
    width: 90%;
    height: auto;
  }
  .call-to-action {
    top: 30rem;
  }
}

@media screen and (min-width: 2560px) {
  .hero-container {
    margin-top: 5rem auto 0 auto;
  }
  .hero-container > img {
    max-width: 1600px;
    margin-bottom: -5rem;
  }
}

@media screen and (max-width: 1000px) {
  .logo-description img {
    width: 50%;
    align-self: flex-start;
  }
}

@media screen and (max-width: 1200px) {
  .nav-links {
    flex-wrap: wrap;
  }

  footer .logo-description {
    height: 10rem;
  }
}

/* ==================================Media Query Starts for profile page============================= */
@media screen and (max-width: 1200px) {
  .profile-container > * {
    transform: scale(0.8);
  }
  .profile-container {
    justify-content: space-evenly;
    padding: 0px;
  }
  .achievement-tag {
    border-radius: 1.6rem;
  }
}

@media screen and (max-width: 880px ) {
  .profile-container {
    grid-template-columns: 1fr 1fr;
  }
}
/* ==================================Media Query Ends for profile page============================= */

/* ==================================Airline listing Starts============================= */

/* ==================================Summary Bar Starts============================= */
.summary-bar {
  width: 100%;
  background: #dfdfdf;
  align-items: center;
  display: flex;
  padding: 0.3rem 2rem;
  border-top: 3.1rem solid rgb(59, 59, 59);
}

.summary-bar div {
  display: flex;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

.summary-bar button {
  height: auto ;
  padding: 0 2rem;
  margin-left: 1.5rem;
}

.summary-bar-airports {
  display: flex;
  align-items: center;
}


.summary-bar-airports img {
  height: 2rem;
  margin: auto 1rem;
}

.summary-bar-totals {
  display: flex;
  margin: auto;
  width: 100%;
}

.summary-bar-airports h1 {
  font-size: 1.5rem;
  font-weight: 400;
}

.summary-bar-totals h3 {
  margin: auto 5rem;
  font-size: 1rem;
}

.btn-1 {
  background: #ffcb00;
  color: #000;
  width: 10rem;
  border-radius: 2rem;
  border: none;
  box-shadow: 0px 0px 5px 4px rgb(92 92 92 / 32%);
}

#cargo-specs {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#cargo-specs p {
  margin: 0 1rem;
}

@media screen and (max-width: 1400px) {
  .summary-bar-airports h1 {
    font-size: 22px;
    font-weight: 400;
  }
  .summary-bar-totals h3 {
    font-size: 14px;
    font-weight: 400;
  }
  .summary-bar-totals h3 {
    margin: auto 1rem;
  }
  .summary-bar div {
    padding: 0 2rem;
  }
}
/* ==================================Summary Bar Ends============================= */
/* ==================================Filters Start================================= */
.ticket-filters {
  width: 100%;
  display: flex;
  margin: 0.4rem auto 0 auto;
  padding: 0 1rem;
  justify-content: space-between;
}
/* ==================================Filters Ends================================= */

/* ===================================Airline Card================================ */
.card-container {
  width: 390px;
  height: 98px;
  background: #fff;
  border-bottom: 35px solid #ffcb00;
  border-radius: .4rem;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  margin: 0 3rem .5rem .5rem;
  cursor: pointer;
}

.selected {
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.445);
  transform: scale(102%);
  z-index: 0;
}

.priority-card {
  background: #333;
  border-color: #ffcb00;
  color: #fff;
}

.cheapest-card {
  border-bottom: 35px solid #8f55a2;
}

.earliest-card {
  border-bottom: 35px solid #345eff;
}

.card-grid-rows {
  display: flex;
  width: 100%;
}

.card-grid-rows-top {
  display: flex;
  width: 100%;
  padding-top: 5px;
}

.card-grid-rows-bottom {
  display: flex;
  width: 100%;
  padding-top: 5px;
}

.card-flex-box {
  font-family: "Inconsolata", monospace;
  font-weight: 400;
  font-size: 15px;
  width: 195px;
  padding: 0 10px;
}

.card-flex-box-left {
  display: flex;
  font-family: "Inconsolata", monospace;
  font-weight: 400;
  font-size: 15px;
  width: 130px;
  padding: 4px 0 10px 10px;
  flex-direction: column;
}

.card-flex-box-center {
  display: flex;
  font-family: "Inconsolata", monospace;
  font-weight: 400;
  font-size: 15px;
  width: 130px;
  height: 40px;
  padding: 4px 0 10px 10px;
  flex-direction: column;
  margin-top: -8px;
}

.card-flex-box-right {
  display: flex;
  font-family: "Inconsolata", monospace;
  font-weight: 400;
  font-size: 15px;
  width: 130px;
  padding: 4px 10px 010px;
  flex-direction: column;
}

.card-flex-box-center .card-img {
  width: 100%;
}

.card-img img {
  display: block;
  height: 25px;
  object-position: -10px;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-white {
  color: #fff;
}

.priority-card {
  background: #333;
  border-color: #ffcb00;
  color: #fff;
}

.text-black {
  color: black;
}

/*******************************         SingleAirline.vue           ***********************/

.earliestInactiveClass {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #fff;
  opacity: 0.4;
  cursor: pointer;
  border-left: 2rem #345eff solid;
}

.cheapestActiveClass {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-left: 2rem #3f3f3f solid;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  background: #fff;
  opacity: 0.6;
  cursor: pointer;
  border-left: 2rem #8f55a2 solid;
  opacity: 1;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}

.samedayActiveClass {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-left: 2rem #3f3f3f solid;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  background: #fff;
  opacity: 0.6;
  cursor: pointer;
  background: #333;
  border-left: 2rem #ffcb00 solid;
  color: #fff;
  opacity: 1;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}

.bestActiveClass {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-left: 2rem #3f3f3f solid;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  background: #fff;
  opacity: 0.6;
  cursor: pointer;
  border-left: 2rem solid #459fe3;
  opacity: 1;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}

.greenestActiveClass {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-left: 2rem #3f3f3f solid;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  background: #fff;
  opacity: 0.6;
  cursor: pointer;
  border-left: 2rem #9acd32 solid;
  opacity: 1;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}

/*************************************     SingleExpansion.vue Ends           ****************************/

/* ======================================Airline Bar =====================================*/
.airline-bar {
  display: grid;
  grid-template-columns: 9rem auto;
  margin: 1rem 1rem;
  padding: 10px 10px 10px 10px;
  border-radius: .4rem;
  background: #fff;
}

.airline-bar:hover {
  transform: scale(101%);
  z-index: 0;
}

.logo-name {
  grid-column: 1;
  display: flex;
  width: 130px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: .6rem 0 0 .6rem;
  background: #fff;
  /* height: auto;
  padding-left: 10px;
  padding-right: 10px; */
}
.logo-name div > img {
  width: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}
.logo-name div > p {
  width: max-content;
  font-family: "Inconsolata" imp!;
  font-weight: 500;
}

/* Scrollbar */
.card-scroll {
  display: flex;
  overflow: auto;
  padding-right: .5rem;
  padding-top: .5rem;
  height: auto;
}

::-webkit-scrollbar {
  height: 6px;
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: hsl(0, 0%, 100%);
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(70, 70, 70, 0.582);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8a6e00;
}

/* Scroll Button */
.slide-block {
  display: flex;
  justify-content: flex-start;
  width: auto;
  overflow: auto;
  /* border: black 2px dashed; */
}
.btn-block {
  display: flex;
  width: auto;
  height: 100%;
  cursor: pointer;
  padding: 5px;
  align-self: center;
}

.btn-block img {
  height: 2rem;
}

/* ========================================= Airline Card Starts======================================= */
.card-nav-wrapper {
  grid-column: 2/2;
  display: block;
  width: 100%;
  /* border: red 2px solid; */
  overflow: hidden;
}

.expansion-wrapper {
  width: 100%;
  grid-column: 1/3;
  display: block;
  margin-top: .8rem;
  overflow: auto;
  border-radius: .4rem;
}

.expansion-wrapper .card-container-2 {
  margin-top: 0;
  margin-bottom: 0;
  background-color: #ececec;
}

.expansion-wrapper .card-container-2:hover {
  transform: scale(100%);
  z-index: 0;
}

/* ============ Button 3============= */
.btn-3 {
  background: #ffcc00;
  height: 2.5rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  width: 200px;
  font-size: 1rem;
  border-radius: 5rem;
  font-family: "montserrat";
  font-weight: 500;
}

/* ========================================= Airline Card Ends======================================= */
#airline_listing {
  margin: 6.5rem 1rem;
}


/* ========================================= Airline Card Expansion Starts======================================= */

.card-expansion-container {
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 0 auto; */
  background-color: rgba(255, 255, 255, 0.863);
  backdrop-filter: blur(6px);
  justify-self: center;
}
.card-expansion-container .cross-button {
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.airline-breakdown {
  display: flex;
  flex-direction: row;
  position: relative;
  margin: auto;
}

.source-destination {
  display: flex;
  padding: 0 1rem 1rem 1rem;
  width: 500px;
}

.source-text {
  text-align: end;
  padding-right: 1rem;
  border-right: solid 2px grey;
}

.plane-number-logo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}

.plane-number-logo img {
  width: 110px;
}

.dest-text {
  text-align: start;
  padding-left: 1rem;
  border-left: solid 2px grey;
}

.cost-breakdown {
  display: flex;
  flex-direction: column;
  position: relative;
}

.rate-duration-total {
  border-top: #bfc0c0 solid 2px;
}

.cost-breakdown div {
  display: flex;
  justify-content: space-evenly;
}

.cost-breakdown div:last-child {
  margin-top: 1rem;
}

.btn {
  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
}

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
}
/* ========================================= Airline Card Expansion Ends======================================= */

/* ==================================Airline listing Ends============================= */




/* ==================================Airline listing -2 Starts============================= */


#airline-listings-2 {
  margin-top: 3.5rem;
  display: grid;
}

/* =============================Edit bar Starts========================== */

/* ========================Airports options Starts======================= */

.airport-date {
  display: flex;
  flex-direction: row;
}

#edit-details-bar {
  position: fixed;
  display: flex;
  top: 3rem;
  width: 100%;
  padding: .2rem 2rem;
  background-color: #dfdfdf;
  height: auto;
  z-index: 1;
  justify-content: space-between;
} 

#bar-icon {
  height: 2rem;
  align-items: center;
  margin: 0 .3rem;
  transform: rotateZ(90deg);
}

#bar-icon > img {
  height: 2rem;
}

.airports-2 {
  display: flex;
  align-items: center;
  height: auto;
}

#dep-airport, #arr-airport {
  background-color: #fff;
  height: 2rem;
  margin: 0 .3rem;
  width: 14rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
}

#dep-full, #arr-full {
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 80%;
}

#dep-id, #arr-id {
  padding: 0 1rem;
  background-color: #ffcb00;
  border-radius: 0 2rem 2rem 0;
  font-size: 120%;
  display: flex;
  align-items: center;
}

#dep-date {
  background-color: #fff;
  height: 2rem;
  margin: 0 .3rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
}

#dep-date p:first-child {
  margin-left: 1rem;
  display: flex;
  align-items: center;
}
#dep-date p:last-child {
  padding: 0 1rem;
  background-color: #ffcb00;
  border-radius: 0 2rem 2rem 0;
  font-size: 120%;
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
/* ========================Airports options Ends======================= */

/* ========================Date range Starts======================= */

#button-div {
  height: 100%;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-self: end;
}
#button-div button {
  height: 2rem;
  margin: .3rem;
  width: auto;
  padding: 0 1rem 0 1rem ; 
}

/* ========================Date range Ends======================= */


/* ========================Filters Starts======================= */

#filters-div {
  display: flex;
  align-items: center;
}

#filters-div h3 {
  font-weight: 500;
  /* margin: auto 1rem auto auto; */
}

#filters-div p {
  margin: 0 .5rem;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  justify-self: auto;
}

#airline-filter {
  background-color: #fff;
  font-size: 80%;
  cursor: pointer;
}

#economical {
  background: #8f55a2;
  color: #fff;
  border-radius: 2rem;
  width: max-content;
  padding: .35rem 1rem;
  font-size: 80%;
  cursor: pointer;
}

#fastest {
  background: #345EFF;
  color: #fff;
  border-radius: 2rem;
  width: max-content;
  padding: .35rem 1rem;
  font-size: 80%;
  cursor: pointer;
}

#greenest {
  background: #9acd32;
  border-radius: 2rem;
  width: max-content;
  padding: .35rem 1rem;
  font-size: 80%;
  cursor: pointer;
}

/* ========================Filters Ends======================= */

@media screen and (max-width: 1200px) {
  #edit-details-bar {
    display: flex;
    flex-direction: column;
  }
}


/* =============================Edit bar Ends========================== */

.best-dep {
  margin: 2.8rem 2rem;
}

.card-container-2 {
  display: grid;
  border-radius: .4rem;
  margin: 1rem 0;
  background-color: #fff;
  grid-template-columns: 70% 20% 6rem;
  transition: all .2s ease;
}

.card-container-2:hover {
  transform: scale(101%);
  z-index: 0;
}

.best-dep > h2 {
  margin-bottom: 1rem;
}

.card-container-strip {
  width: 100%;
  grid-column: 1/5;
  height: 5rem;
  font-weight: 400;
  border-radius: .4rem;
  display: grid;
  grid-template-columns: 0.3fr .8fr .6fr .6fr .6fr .6fr 0.6fr;
  padding: 0 1rem;
  grid-gap: .5rem;
  justify-items: center;
}

.airline-logo {
  /* width: 4rem; */
  display: flex;
  align-items: center;
}

.airline-logo img {
  height: 4rem;
}

.data-1 {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.p-1 {
  font-size: 120%;
  margin-top: .4rem;
  margin-bottom: 0.4rem;
}

.p-2 {
  font-size: 100%;
  margin-bottom: .4rem;
  color:  navy;
}

.p-11 {
  font-size: 120%;
  margin-top: .4rem;
}

.p-22 {
  font-size: 100%;
  color:  navy;
  margin-bottom: .4rem;
}

.p-l {
  text-align: left;
  width: 100%;
}

.p-r {
  text-align: right;
  width: 100%;
}

.data-2 {
  display: grid;
  grid-template-columns: .7fr 1fr .7fr;
  grid-column: span 2;
  align-items: center;
  justify-items: center;
  width: max-content;
}

.data-2 img {
  width: 5rem;
  padding: 0 1rem;
}

.data-3 {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.data-4 {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.filter-space {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  width: 6rem;
}

.exp-aline-aport-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.exp-aline-aport {
  display: grid;
  grid-template-columns: 20% 80%;
}

.icon-no {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  justify-items: center;
}

.icon-no img {
  height: 4rem;
  width: 3rem;
}

.transit-port {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.transit-port div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: .4rem 0;
}

.transit-port div:nth-child(even) p{
  color: navy;
}

.a-icon img {
  height: 1.6rem;
  margin: auto 1rem !important;
}

.a-dot {
  border-radius: 50%;
  background-color: #ffcb00;
  height: 1rem;
  width: 1rem;
  margin: auto 1rem !important;
}

.lay-time {
  display: grid;
  grid-template-columns: 20% 80%;
  margin: .3rem 0;
}

.lay-time p {
  grid-column: 2;
  margin-left: 3rem;
  color: navy;
}

.p-btn {
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-column: 2/5;
  padding: 1rem 0;
}

.p-btn button {
  min-height: 2.5rem;
  margin: 0 1rem 0 auto;
}

.price-breakdown {
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 0 1rem;
  /* margin: auto; */
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;
  align-content: space-around;
}


/* ==================================Airline listing -2 Ends============================= */

/* ======================================Cart Section starts=================================== */

/* ==================================Saved Section============================= */

#saved-entries {
  max-width: 1600px;
  margin: 3.5rem auto ;
  padding: 0 1rem;
}
section > h2 {
  margin-left: 2rem;
  color: rgb(0, 0, 0);
}
.saved-container {
  max-width: 1600px;
  margin: 0.8rem auto auto auto;
  position: relative;
}

/* ==================================Saved Section Ends============================= */


/* ==================================Saved Card============================= */


.saved-card {
  width: 100%;
  /* min-width: 850px; */
  /* height: 11rem; */
  background: #fff;
  border-radius: 1.2rem;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 1rem;
  /* box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3); */
  margin-bottom: 1rem;
  overflow: auto;
  position: relative;
}

.saved-card:hover {
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.3);
}

.saved-card .flight-num {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  padding: 0 0 1rem 0;
}

.saved-card > p {
  font-size: .8rem;
  border-radius: 0 0 .5rem .5rem;
  position: absolute;
  left: 50%;
  top: 0rem;
  padding: .1rem 1rem;
  background-color: #ffcc0027;
  color: #caa200;
  transform: translate(-50%)
}

.saved-card .flight-num img {
  width: 6rem;
  margin: auto;
}

.saved-card .flight-num p {
  font-size: 1.3rem;
  margin: 0;
}

.saved-card .airports-data {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-left: solid 3px #b9b9b9;
  border-right: solid 3px #b9b9b9;
}

.saved-card .airports-data .source {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: start;
  justify-content: space-between;
}

.saved-card .airports-data .flight-time {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.saved-card .airports-data .flight-time p {
  padding: .2rem;
  border-radius: 1rem;
  background-color: #00000015;
  color: #000;
  font-size: 90%;
}

.saved-card .airports-data .source h3,
.saved-card .airports-data .destination h3 {
  padding-bottom: .5rem;
  font-size: 1.7rem;
  width: 100%;
  color: #555555;
  font-weight: 500;
}

.saved-card .airports-data .source h2,
.saved-card .airports-data .destination h2 {
  font-weight: 500;
  color: #555555;
  padding-bottom: .4rem;
} 

.saved-card .airports-data img {
  width: 130px;
  height: 27px;
  margin: auto;
}

.saved-card .airports-data .destination {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  text-align: end;
  padding-bottom: .2rem;
}

.saved-card .airports-data .airport h3 {
  /* padding: 0 2rem 0 0;
  font-size: 1.4rem; */
  padding-bottom: .2rem;
}

.saved-card .airports-data .airport {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 0 0;
}

.saved-card .cost-details {
  padding-left: 2rem;
}

.saved-card .cost-details h3,
.saved-card .cost-details p {
  padding-bottom: .4rem;
}

.saved-card .cost-details span {
  font-weight: 600;
}

.cost-details button {
  background: #ffcb00;
  width: 16rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  height: 2.2rem;
  cursor: pointer;
  margin-top: 1rem;
}

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
} 

/* ===Cross Button=== */
.saved-card .cross-button {
  cursor: pointer;
  display: flex;
  position:absolute;
  top: 0.4rem;
  left: 0.4rem;
}
.saved-card .cross-button > img {
  height: 1.2rem;
} 
.saved-card .cross-button:hover  {
  transform: scale(140%);
}

.empty-pallet {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.empty-pallet img {
  height: 8rem;
}

.empty-pallet h1 {
  text-align: center;
  color:rgba(0, 0, 0, 0.541);
  font-weight: 500;
}

@media screen and (max-width: 1200px) {
  
  .saved-card .airports div p {
      font-size: 1.5rem;
      margin: 0;
  }
  .saved-card .flight-num p {
    font-size: 1.2rem;
  }

  .saved-card .flight-num img {
    width: 7rem;
  }

  .airports-data .source h3, 
  .airports-data .destination h3, 
  .airports-data .source h2, 
  .airports-data .destination h2{
    font-size: 1.4rem !important;
  }

  .saved-card .airports-data img {
    width: 105px;
    height: 21px;
  }

  .details .column-1 .departure h1,
  .details .column-1 .arrival h1 {
      font-size: 1.3rem;
  }

  .details .column-1 .departure p,
  .details .column-1 .arrival p {
      font-size: 1rem;
  }

  .column-2 p {
      font-size: 1rem;
  }

  .column-2 button {
      width: 10rem;
  }

  .nav-links {
      flex-wrap: wrap;
  }

  #saved-entries {
      overflow: auto;
  }

  footer .logo-description {
      height: 10rem;
  }
}

@media screen and (max-width: 1000px) {
  .logo-description img {
      width: 50%;
      align-self: flex-start;
  }

  .saved-card .airports-data img {
    width: 75px;
    height: 15px;
  }

  .saved-card .airports-data p {
    font-size: .8rem;
  }

  .saved-card .cost-details h3,
  .saved-card .cost-details p {
    font-size: .8rem;
  }

  .saved-card #expandable-button > button {
    font-size: .8rem;
  }

  .airports-data .source h3, 
  .airports-data .destination h3, 
  .airports-data .source h2, 
  .airports-data .destination h2{
    font-size: 1.2rem !important;
  }
}

/* ==================================Saved Card Ends============================= */



/* =========================================================Expanding Button Starts============================ */


#expandable-button {
  width: auto;
  border-radius: 1rem;
  /* display: flex;
  justify-content: space-evenly; */
  /* border: solid red 2px; */
}

/* =========================================================Expanding Button Ends============================ */

/* =========================================================Cart page cargo details overlay Starts============================ */

.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.7);
  overflow-x: hidden;
  transition: 0.5s;
  backdrop-filter: blur(3px);
  display: flex;
}

.overlay-content {
  position: relative;
  margin: auto 0;
  width: 100%;
  text-align: center;
  padding: 5%;
}

.overlay .closebtn {
  position: absolute;
  padding: 0;
  margin: 0;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
}

.closebtn img {
  height: 2rem;
  cursor: pointer;
}
/* =========================================================Cart page cargo details overlay Ends============================ */

/* =======================================================Cart Section Ends================================================= */





/* ======================================Booking History Starts=================================== */

.booking-history-container {
  padding: 0 2rem;
  height: 100vh;
}

#booking-history {
  height: 100vh;
  max-width: 1600px;
  margin: auto;
  margin-top: 2rem;
}

#booking-history > h1 {
  padding-top: 2rem;
}

.filters-search {
  display: flex;
  flex-grow: 1;
  width: 100%;
  border-radius: 3rem;
  padding: 1rem 0 0 0rem;
  justify-content: flex-end;
}

.filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  align-self: center;
  background-color: #d8d8d8;
  padding: 1rem 0 1rem 3rem;
  border-radius: 2rem;
}

.expansion-container {
  border-radius: .4rem;
  background-color: #fff;
  transition: all .2s ease;
  margin: .4rem 0;
  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
}

.expansion-container:hover {
  transform: scale(101%);
  z-index: 0;
  box-shadow: 0px 0px 5px 4px rgb(92 92 92 / 32%);
}

.expansion-container .saved-card {
  display: flex;
  border-radius: .3rem;
  background-color: #fff;
  margin-bottom: 0;
}

.expansion-container .saved-card:hover {
  box-shadow: none;
}

.expansion-container .saved-card .airline {
  display: flex;
  align-content: center;
  padding-right: 1rem;
}

.expansion-container .saved-card .airline img {
  height: 3rem;
}

.expansion-container .details {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-left: 1rem;
  border-left: 3px solid #d8d8d8;
  border: teal;
}

.expansion-container .details .column-1,
.expansion-container .details .column-2 {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: .5rem;
}

.expansion-container .details .column-1 h1,
.expansion-container .details .column-2 h1 {
  font-size: 1.5rem;
  font-weight: 400;
}

.expansion-container .details .column-2 {
  margin-bottom: 0;
  align-items: center;
  color: navy;
}

.search-bar {
  height: 2.2rem;
  display: flex;
  flex-direction: row;
  background-color: #ffcb00;
  width: 15rem;
  align-items: center;
  padding: 3px;
  border-radius: 2rem;
}
.search-bar h4 {
  width: 40%;
  text-align: center;
}
.search-bar input {
  width: 60%;
  height: 100%;
  color: black;
  align-items: center;
  text-align: center;
  border: none;
  text-justify: center;
  border-radius: 2rem;
  outline: none;
}
.search-bar:focus .search-bar{
  width: 20rem;
}

.heading-grid {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 3fr 3fr 3fr 1fr;
  padding: 1rem 3rem;
  background-color: #dfdfdf;
  border-radius: 2rem;
}

.heading-grid {
  margin-bottom: 1rem;
}

.heading-grid h4 {
  padding: 0 1rem 0 0;
}

.expansion-container .entry-grid h4{
  font-weight: 400;
}

.expansion-container .entry-grid {
  display: grid;
  border-radius: .4rem;
  grid-template-columns:  2fr 2fr 2fr 3fr 3fr 3fr 1fr;
  padding: 1rem 3rem;
  transition: all 0.3s;
  background-color: #fff;
}

.expansion-container .entry-grid:hover {
  background-color: #fff;
}

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
} 

@media screen and (max-width: 1000px) {
  .expansion-container .saved-card .airline img {
    height: 2rem;
  }

  .expansion-container .saved-card {
    min-width: auto;
  }
}
/* ======================================Booking History Starts=================================== */

/* ======================================Booking History Starts=================================== */

#booking_page {
  width: auto;
  height: auto;
  padding-top: 4.5rem;
}
#booking_page h3,
#booking_page h4,
#booking_page a {
  font-weight: 500;
}

.booking-container {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  background: #fff;
  color: #000;
  padding: 2rem;
  margin: 1rem auto;
  border-radius: .4rem;
  box-shadow: 0px 0px 5px 4px rgb(92 92 92 / 32%);
}

.booking-container h2 {
  margin: 1rem 0;
  color: #000000c4;
}

.summary-section {
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  border-radius: 1rem;
  padding: 0 2rem 2rem 2rem;
}

.flight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;
}

.source-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: 3px solid lightgray;
  padding-right: 1rem;
}

.source-info > div {
  text-align: end;
}

.source-info > div h4,
.dest-info > div h4 {
  margin: 0.6rem 0;
}

.icons {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
}

.icons img {
  margin: 0 auto;
}

.dest-info {
  padding-left: 1rem;
  border-left: solid 3px lightgray;
}

.cargo-summary {
  background: #d8d8d850;
  border-radius: .4rem;
}

.cargo-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 0.5rem 0;
}
.cargo-grid:first-child div h4 {
  font-weight: 500;
}

.cargo-grid div {
  text-align: center;
}

.cost-section > form > h5 {
  margin: 1rem;
  text-align: center;
}
.confirmation-text {
  width: 100%;
  /* background: #ffcb00; */
  text-align: center;
  border-radius: 2rem;
}

.request-made {
  background: #bdbdbd !important;
}

.request-confirmed {
  background: #ffcb00;
}


.page-save-icon {
  display: flex;
  height: 3rem;
  margin: 1rem;
  justify-content: space-around;
}
.page-save-icon img {
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;
}
.page-save-icon img:hover {
  box-shadow: rgba(0, 0, 0, 0.295) 0px 0px 5px 1px;
  transition: ease-in-out 0.2s;
}

form {
  font-size: 1.3rem;
}

form label {
  margin: 0.3rem 0;
}

form input {
  /* height: 2rem; */
  width: 100%;
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
}

.cost-grid {
  display: flex;
  justify-content: space-between;
}

#total-cost {
  border-top: 3px solid lightgrey;
  margin: 1rem 0;
}

.terms-box h5 {
  margin: 0.6rem 0;
}
.terms-box a {
  color: #bd9700;
}

.terms-box {
  margin-bottom: 2rem;
}

.btn-4 {
  background: #ffcc00;
  height: 2.5rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border-radius: 5rem;
}

@media screen and (max-width:1000px) {
  .icons img {
    width: 7rem;
  }

  .booking-container{
    display: flex;
    flex-direction: column;
  }

  #booking {
    padding: 1rem
  }

  .cargo-grid{
    font-size: .8rem;
  }
}

/* =======================================CARGO DETAILS AND LOGIN SIGNUP Starts============================= */

.cargo-details-section {
  margin: 2rem auto auto auto;
  padding: 2rem 5rem;
  max-width: 1800px;
}

.cargo-details-container {
  border-radius: .4rem;
  background: #fff;
  padding: 1rem 4rem 1rem 4rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px 4px rgba(92, 92, 92, 0.315);
  height: auto;
}
.cargo-details-container h1 {
  margin-bottom: 1rem;
}

/* ==================================Form Start=================================*/

.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
}
/* ==================================Form Inputs Start=================================*/

.form-element {
  width: 100%;
}
.fill-in {
  width: 100%;
  background-color: #ffcb00;
  border-radius: 2rem;
  color: #000;
  display: flex;
  border: #ffcb00 3px solid;
  margin: 2rem 0;
  /* position: absolute; */
}

.my-1 {
  margin: 0.4rem 0;
}

.fill-in h4 {
  font-weight: 500;
  width: 40%;
  padding: 0 1rem;
  margin: auto;
  justify-self: flex-start;
  font-size: 12px;
  align-content: center;
}

.fill-in h4 span {
  font-size: 120%;
  color: red;
}

.searchable {
  width: 60%;
  margin: 0;
  display: flex;
  border-radius: 2rem;
  position: relative;
  height: 2.2rem;
  align-items: center;
  position: relative;
}

.searchable input {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 12px;
  font-family: "montserrat";
  font-weight: 500;
}

.searchable input:focus {
  box-shadow: 0 0 0px 5px #fcf4d9;
  background: #fcf4d9;
}

.form-indicator {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  right: -1.4rem;
  position: absolute;
}

.form-indicator img {
  height: 1rem;
  margin: auto;
  padding: auto;
}

.fill-in button {
  border: none;
  outline: none;
  width: 100%;
  background-color: #ffcb00;
  font-weight: 500;
  font-family: "montserrat";
  padding: 0.1rem 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
}

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
}

.login-form > p {
  opacity: 0.7;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}

/* ==================================Form Inputs End=================================*/
/* ==================================Form  Ends======================================*/

/* ====================================Summary Starts=============================== */

.cargo-summary-element p {
  margin: 8px 0 0 0;
  text-align: center;
  color: navy;
}
.cargo-summary-element p:first-of-type {
  color: #000;
}
.cargo-details-subcontainer-6 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  align-items: end;
  color: #fff;
  padding-bottom: 1rem;
}

@media screen and (max-width: 1000px) {
  .cargo-details-subcontainer-6 p {
    font-size: .8rem;
  }
}

/* ====================================Summary Ends=============================== */
/* ====================================Request Starts=============================== */
#forwarder-request {
  height: auto;
}
#message {
  background-color: #fff;
  /* border: 3px solid #ffcb00; */
  border-radius: 2rem;
  /* padding: .7rem 1rem; */
  display: grid;
  grid-template-columns: 01fr 1fr 1fr 1fr;
  height: auto;
}

#message-to-forwarder {
  background-color: rgb(235, 235, 235);
  grid-column: 1 / span 3;
  grid-row: 2 span 3;
  height: auto;
}

#consignment-files {
  grid-column: 4 / span 1;
  grid-row: 2;
  height: auto;
}

#submit-request {
  grid-column: 4 / span 1;
  grid-row: 3 
}

@media screen and (max-width: 1000px) {
  html {
    font-size: 80%;
  }

  #message-to-forwarder {
    grid-column: 1 / span 4;
    grid-row: 2 span 3;
    height: auto;
  }

  #consignment-files {
    grid-column: 1 / span 2;
    grid-row: 3;
    height: auto;
  }

  #submit-request {
    grid-column: 4 / span 1;
    grid-row: 4 
  }
}
/* ====================================Request Ends=============================== */

/* =========================================================Login Starts============================================================ */

#error-message {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 3rem;
  z-index: 1000;
}

#error-message p {
  padding: 1rem 7rem;
  border-radius: 2rem;
  background-color: #f44336;
  width: fit-content;
  color: #fff;
}

#positive-message {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 3rem;
  z-index: 1000;
}

#positive-message p {
  padding: 1rem 7rem;
  border-radius: 2rem;
  background-color: #ffcc00;
  width: fit-content;
  color: #000;
}

.home-logo {
  width: 100%;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
}

.home-logo a {
  width: fit-content;
}

.home-logo a > img {
  height: 4rem;
  margin: 0 auto;
}

.login-signup {
  background-color: #fff;
  padding: 2rem;
  border-radius: .4rem;
  width: 40%;
  margin: auto;
  box-shadow: 0px 0px 5px 4px rgba(92, 92, 92, 0.315);
  flex-wrap: nowrap;
}

.login-signup h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.login-signup p {
  text-align: center;
  /* margin-bottom: 1rem; */
  text-decoration: none;
  color: #6e6e6e;
}

/* =========================================================Login Ends============================================================ */

/* ==================================Buttons Start=================================*/

.fill-in .button-selector {
  height: 2rem;
  padding: 0;
}

.fill-in .button-selector button {
  padding: 0rem;
  margin: 0;
}

.button-selector .active,
.fill-in .button-selector .active {
  background: #fff;
}
.button-selector .inactive,
.fill-in .button-selector .inactive {
  background: #ffcb00;
}

.fill-in .button-selector button h4 {
  padding: 0;
  margin: auto;
  width: auto;
}

.button-selector {
  width: 100%;
  padding: 3px;
  background-color: #ffcb00;
  border-radius: 2rem;
  display: flex;
}

.button-selector button {
  width: 100%;
  border: none;
  border-radius: 2rem;
  font-size: 1.4rem;
  background-color: #ffcb00;
  padding: 0.3rem;
}

/* ==================================Buttons End=================================*/

/* ==================================Dropdown Profile Starts=================================*/

.dropdown-profile {
  position: absolute;
  font-size: 12px;
  max-height: 15rem;
  max-width: 15rem;
  background: #dfdfdf;
  border: 1px white solid;
  top: 3.3rem;
  border-radius: .4rem;
  padding: 0.6rem;
  z-index: 100;
  right: 0rem;
  z-index: 1000;
}
.dropdown-profile li {
  list-style: none;
  border-bottom: #ffffff2a 2px solid;
  transition: 0.25s;
  cursor: pointer;
}
.dropdown-profile h3:hover {
  background: #fff;
  border-radius: 2rem;
  color: #000;
}

#profile:focus + .dropdown-profile {
  display: block;
}
ul li h3 {
  padding: 0.2rem 0.7rem;
}

/* ==================================Dropdown Profile Ends=================================*/

/* ==================================Dropdown Starts=================================*/

.dropdown-search {
  position: absolute;
  font-size: 12px;
  width: max-content; 
  background: #dfdfdf;
  /* backdrop-filter: blur(20px); */
  border: 1px white solid;
  top: 2.8rem;
  border-radius: .4rem;
  padding: 0 .3rem .3rem .3rem;
  z-index: 100;
  left: 0;
  z-index: 1000;
}
.dropdown-search li {
  list-style: none;
  border-bottom: #ffffff2a 2px solid;
  margin-top: 0.5rem;
  width: 100%;
  /* padding-left: 1rem; */
  /* padding-top: 0.3rem;
    padding-bottom: 0.3rem; */
  transition: 0.25s;
}
.dropdown-search li:hover {
  background: #fff;
  border-radius: 2rem;
  color: #000;
}

.dropdown-search li h3 {
  padding: 0.7rem 1rem;
  cursor: pointer;
}

.active-list {
  background: #fff;
  border-radius: 2rem;
  color: #000;
}

.searchable input:focus + .dropdown-search {
  display: block;
}

/* ==================================Dropdown Ends=================================*/

/* ==================================Media Query Starts================================= */
@media screen and (min-width: 1400px) {
  .login-signup {
    max-width: 700px;
  }
}

@media screen and (max-width: 1000px) {
  .login-signup {
    width: 60%;
  }

  .fill-in .button-selector {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .fill-in .button-selector button h4 {
    margin: 0.5rem 0;
  }

  .login-signup-selector button {
    font-size: 1.2rem;
  }

  .form-element {
    display: flex;
    flex-direction: column;
  }

  .fill-in {
    display: flex;
    flex-direction: column;
    border-radius: 1.4rem;
    padding: 3px;
    height: fit-content;
    align-items: flex-start;
  }

  .fill-in h4 {
    white-space: nowrap;
    padding-left: 1rem;
    padding-bottom: .4rem;
    margin: 0
  }

  .searchable {
    width: 100%;
  }

  .searchable input {
    width: 100%;
  }
}

/* ==================================Media Query Ends=================================


/* ====================================================CARGO DETAILS AND LOGIN SIGNUP Ends============================= */

/* =======================================Logout Page Starts============================= */

.logout-section {
  display: flex;
  width: 100vw;
  height: 80vh;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
}

#logout {
  width: 60%;
  /* height: 10rem; */
  border-radius: .4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

#logout h1 {
  margin: 0 2rem 2rem 2rem;
}

#logout h3:first-of-type {
  margin: auto;
  padding: 1rem 10rem;
  background-color: #ffcc0027;
  border-radius: 2rem;
  color: #caa200;
  text-align: center;
}

#logout h3 {
  margin: 1rem auto;
}

#logout button {
  margin: auto;
  padding: 1rem 4rem;
  background-color: #ffcb00;
  border-radius: 2rem;
  border: none;
  font-family: "montserrat";
  font-weight: 500;
}

@media screen and (max-width: 1000px) {

  #logout h3:first-of-type {
    padding: 1rem 4rem;
  }
}
/* =======================================Logout Page Ends============================= */

/* ====================================================Booking Confirmation page starts============================= */

#booking {
  width: auto;
  height: auto;
  padding-top: 3.5rem;
}


.flight-grid {
  display: grid;
  grid-template-columns: 1fr .7fr 1fr;
  margin: 2rem 0;
}

.source-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: 3px solid lightgray;
  padding-right: 1rem;
}

.source-info > div {
  text-align: end;
}

.source-info > div h4,
.dest-info > div h4 {
  margin: 0.6rem 0;
  font-weight: 400;
}

.source-info > div h5,
.dest-info > div h5 {
  font-weight: 400;
}

.source-info h3,
.dest-info h3 {
  font-weight: 400;
}

.cost-grid div h4 {
  font-weight: 400;
  padding-right: 1.5rem;
}

.booking-form h5 {
  font-weight: 400;
}

.cargo-grid h4 {
  font-weight: 400;
}


.cargo-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 0.5rem 0;
}
.cargo-grid div {
  text-align: center;
}

.cost-section {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 0 1rem 2rem 1rem;
  background: #d8d8d850;
  border-radius: .4rem;
  min-width: 25%;
}

.cost-section h3 {
  padding-bottom: 1rem;
}

.cost-section > form > h5 {
  margin: 1rem;
  text-align: center;
}
.confirmation-text {
  width: max-content;
  background: #ffcb00;
  text-align: center;
  border-radius: 2rem;
  margin: auto;

}
.confirmation-text p {
  color: black;
  font-weight: 400;
  padding: .4rem 1rem;
  font-size: 1.4rem;
  white-space: nowrap;
}

.page-save-icon {
  display: flex;
  height: 3rem;
  margin: 1rem;
  justify-content: space-around;
}
.page-save-icon img {
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;
}
.page-save-icon img:hover {
  box-shadow: rgba(0, 0, 0, 0.295) 0px 0px 5px 1px;
  transition: ease-in-out 0.2s;
}

.booking-form {
  font-size: 1.3rem;
  padding: 1rem 0;
}

.booking-form label {
  margin: 0.3rem 0;
}

.booking-form .awb-input {
  height: 2rem;
  margin: 0.7rem 0;
  width: 100%;
  outline: none;
  border: none;
  box-shadow: lightgrey 0px 0px 2px 2px;
  border-radius: 1rem;
  padding: 1rem;
  font-family: "montserrat";
  font-weight: 500;
}

.cost-grid {
  display: flex;
  justify-content: space-between;
}

#total-cost {
  border-top: 3px solid lightgrey;
  margin: 1rem 0;
}

.terms-box h5 {
  margin: 0.6rem 0;
}
.terms-box a {
  color: #bd9700;
}

.terms-box {
  margin-bottom: 2rem;
}

@media print {
  .page-save-icon {
    display: none;
  }

  .flight-grid .icons img {
    width: 8rem;
  }

  .cargo-summary {
    font-size: 80%;
  }

  .nav-container .logo {
    filter: invert(0.35);
  }
  .nav-container .nav-links {
    display: none;
  }

  .terms-box {
    display: none;
    visibility: hidden;
  }

  .booking-container {
    box-shadow: none;
    outline: none;
  }

  #booking {
    border: none;
    outline: none;
  }

  .booking-container {
    flex-direction: column;
  }

  .booking-form {
    position: fixed;
    top: 3rem;
    right: 3rem;
    flex-direction: initial;
    display: flex;
  }

  .booking-form label {
    margin: auto;
  }

  @page {
    margin-top: 2rem;
  }
}

/* ====================================================Booking Confirmation Page Ends============================= */

/* ====================================================Booking Page Starts============================= */

.btn-2 {
  background: #ffcc00;
  height: 2.5rem;
  font-size: 1.2rem;
  /* border: rgba(51, 51, 51, 0.185) 2px solid; */
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border-radius: 5rem;
  font-family: "montserrat";
  font-weight: 500;
}

/* ==================== Media Queries  =================== */
@media screen and (min-width: 1000px) {
  .icons img {
    width: 60%;
  }
}

/* ==================== Media Queries  =================== */

/* ====================================================Booking Page Ends============================= */
</style>