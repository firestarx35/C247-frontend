<template>
    
    <nav-bar></nav-bar>    
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
import NavBar from './components/NavBar.vue'
export default {
    components: {
        NavBar,
    },
  setup() {
    
  return { }},
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
  overflow-y: auto;
  overflow-x: hidden;
  font-weight: 500;
}

body {
  background: #f0f0f0;
  position: relative;
}
h1,
h2,
h3,
h4,
h5 {
  font-weight: 400;
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

.step-img img {
  object-position: center center;
  height: auto;
  width: 100%;
  padding: 10px;
  object-fit: contain;
  border-radius: 20px;
  margin: auto;
}

.step-content {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 0 3rem;
  width: 30%;
  /* border: solid 2px red; */
}

.step-content p {
  margin-top: 1.5rem;
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
h1 {
  font-size: 2rem;
  font-weight: 300;
}

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
  border-radius: 2rem;
  background: #fff;
  padding: 1rem 4rem 1rem 4rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px 4px rgba(92, 92, 92, 0.315);
  display: flex;
  justify-content: space-between;
}
.profile-container-2 {
  border-radius: 2rem;
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
  border-radius: 1rem;
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
  border-radius: 2rem;
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
  margin: none;
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
}
.one {
  animation: blink 1s infinite;
  transform: translate(15px, 0px);
  z-index: 1100;
}
.two {
  animation: blink 1s infinite;
  transform: translate(-15px, 0px);
  z-index: 1100;
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
  }
  .achievement-tag {
    border-radius: 1.6rem;
  }
}
/* ==================================Media Query Ends for profile page============================= */

/* ==================================Airline listing Starts============================= */

/* ==================================Summary Bar Starts============================= */
.summary-bar {
  width: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.75);
  align-items: center;
  display: flex;
  color: #fff;
  padding: 0.3rem 2rem;
  border-top: 3.1rem solid rgb(59, 59, 59);
}

.summary-bar div {
  display: flex;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

.summary-bar-airports {
  display: flex;
  align-items: center;
}

.summary-bar-airports > h1 {
  color: #fff;
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

.summary-bar-totals h3 {
  margin: auto 5rem;
}

.btn-1 {
  background: #ffcb00;
  color: #000;
  width: 10rem;
  border-radius: 2rem;
  border: none;
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
.ticket_filters {
  width: 100%;
  max-width: 1600px;
  margin: 0.4rem auto -1rem auto;
}

.filter-grid {
  display: grid;
  grid-template-columns: repeat(6, 10rem);
  justify-content: space-between;
  background-color: #cacaca8f;
  padding: 0.3rem 2rem;
  border-radius: 2rem;
  /* border: 3px solid #ffcc009d; */
}
.filter-grid h3 {
  margin: auto auto auto 0;
}
.filter-box {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-left: 2rem #3f3f3f solid;
  /* box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);  */
  border-radius: 0.5rem;
  background: #fff;
  opacity: 0.4;
  cursor: pointer;
}
.earliest {
  border-left: 2rem #345eff solid;
  opacity: 1;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}

.sameday {
  background: #333;
  border-left: 2rem #ffcb00 solid;
  color: #fff;
}

.cheapest {
  border-left: 2rem #8f55a2 solid;
}

.greenest {
  border-left: 2rem #9acd32 solid;
}

.best {
  border-left: 2rem solid #459fe3;
}

.filter-box:hover {
  opacity: 1;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
}
/* ==================================Filters Ends================================= */

/* ===================================Airline Card================================ */
.card-container {
  width: 390px;
  height: 98px;
  background: #fff;
  border-bottom: 35px solid #ffcb00;
  border-radius: 13px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  margin: 10px 0px 10px 15px;
  cursor: pointer;
}

.card-container:hover {
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.3);
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
  font-weight: bold;
  font-size: 15px;
  width: 195px;
  padding: 0 10px;
}

.card-flex-box-left {
  display: flex;
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 15px;
  width: 130px;
  padding: 4px 0 10px 10px;
  flex-direction: column;
}

.card-flex-box-center {
  display: flex;
  font-family: "Inconsolata", monospace;
  font-weight: bold;
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
  font-weight: bold;
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
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1600px;
  margin: 20px auto;
  padding: 10px 0 10px 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #cccccc9f;
  border: rgba(255, 255, 255, 0.8) 1px solid;
}
.logo-name {
  display: flex;
  width: 130px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px 0 0 16px;
  background: #fff;
  height: auto;
  padding-left: 10px;
  padding-right: 10px;
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
  padding-right: 10px;
  height: auto;
  /* border: white 2px solid; */
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
  background: #ffcb00;
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
  /* border: pink 2px solid; */
}

/* ========================================= Airline Card Starts======================================= */
.card-nav-wrapper {
  display: block;
  width: 100%;
  /* border: red 2px solid; */
  overflow: hidden;
}

.expansion-wrapper {
  width: 100%;
  /* border: green 2px solid; */
  display: block;
  /* display: none; */
  /* min-height: 280px; */
  padding: 0.6rem 1.2rem;
  overflow: auto;
}

.card-expansion-container h1,
.card-expansion-container h2,
.card-expansion-container h3,
.card-expansion-container h4,
.card-expansion-container h5,
.card-expansion-container h6 {
  font-weight: 400;
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
}

.rate-duration-total {
  border-top: #bfc0c0 solid 2px;
  padding: 0.7rem;
}

.cost-breakdown div {
  display: flex;
  justify-content: space-evenly;
}

.costs {
  padding: 0.7rem;
  background-color: #345dff1a;
  border-radius: 2rem;
}
.cost-breakdown div:last-child {
  margin-top: 1rem;
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
  margin: 0 1rem;
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
.card-expansion-container .cross-button span {
  font-size: 1rem;
  width: 100%;
  text-align: center;
  padding-bottom: 0.2rem;
}
.card-expansion-container .cross-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #ffcc00;
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

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
}
/* ========================================= Airline Card Expansion Ends======================================= */

/* ==================================Airline listing Ends============================= */

/* ======================================Cart Section starts=================================== */
/* ==================================Saved Section============================= */

#saved-entries {
  max-width: 1600px;
  margin: 3.5rem auto;
  padding: 0 1rem;
}
#saved-entries > h2 {
  margin-left: 2rem;
  color: rgb(0, 0, 0);
  font-weight: 500;
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
  min-width: 850px;
  background: #fff;
  border-radius: 1.2rem;
  align-items: center;
  display: flex;
  padding: 1rem;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  overflow: auto;
}
.saved-card:hover {
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.3);
}
.saved-card .airports {
  display: flex;
  flex-direction: column;
}
.saved-card .airports div {
  display: flex;
  align-items: center;
  padding: 0rem;
  margin: auto;
}
.saved-card .airports div img {
  width: 75px;
  margin: 1rem;
}
.saved-card .airports div p {
  font-size: 2rem;
  margin: 0;
}
.saved-card .airline {
  height: 100%;
  display: flex;
  align-content: center;
  padding: 1rem;
  margin: 0 1rem;
  border-left: 2px solid rgba(128, 128, 128, 0.233);
  border-right: 2px solid rgba(128, 128, 128, 0.219);
}
.saved-card .airline img {
  width: 100px;
}
.details {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.details .column-1 {
  display: flex;
  justify-content: space-between;
  max-width: 2000px;
}
.details .column-1 .departure {
  display: flex;
  flex-direction: column;
}
.details .column-1 .departure h2,
.details .column-1 .arrival h2 {
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0.5rem 0;
}
.details .column-1 .departure p,
.details .column-1 .arrival p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
.details .column-1 .arrival {
  display: flex;
  flex-direction: column;
  text-align: right;
}
.details .column-2 {
  display: flex;
  justify-content: space-between;
  max-width: 2000px;
  align-items: center;
}
.column-2 p {
  font-size: 1.4rem;
  margin: 0;
}
.column-2 button {
  background: #ffcb00;
  width: 16rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  height: 2.2rem;
  cursor: pointer;
  font-family: "montserrat";
  font-weight: 500;
}

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
}

/* ===Cross Button=== */
.saved-card .cross-button span {
  font-size: 1rem;
  width: 100%;
  text-align: center;
  padding-bottom: 0.2rem;
}
.saved-card .cross-button {
  display: flex;
  cursor: pointer;
  background-color: #ffcc00;
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  width: 1.5rem;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  align-items: flex-end;
  justify-content: center;
}
.saved-card:hover .cross-button {
  display: flex;
}

/* ==================================Saved Card Ends============================= */
/* ======================================Cart Section Ends=================================== */

/* ======================================Booking History Starts=================================== */

.booking-history-container {
  padding: 0 5rem;
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
  padding-left: 3rem;
  font-size: 1.2rem;
}
.booking-container h1 {
  padding-top: 0rem;
  padding-left: 0rem;
  font-size: 1.6rem;
  font-weight: 400;
}

.filters-search {
  display: flex;
  width: 100%;
  justify-items: auto;
  border-radius: 3rem;
  margin-top: 4rem;
  padding: 0.2rem 1rem;
  justify-content: space-between;
}
.filters-search h2 {
  font-weight: 400;
}

.filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  align-self: center;
  background-color: #d8d8d8;
  padding: 1rem 0 1rem 3rem;
  border-radius: 2rem;
  max-width: 1600px;
  margin: 1rem auto 0 auto;
}
.expansion-container .saved-card {
  display: none;
}
.expansion-container:hover {
  background-color: #fff;
  border-radius: 2rem;
}
.expansion-container:hover .saved-card {
  display: flex;
}
.search-bar {
  height: 2.2rem;
  display: flex;
  flex-direction: row;
  background-color: #ffcb00;
  width: 25rem;
  align-items: center;
  padding: 3px;
  border-radius: 2rem;
}
.search-bar h4 {
  width: 40%;
  text-align: center;
  font-weight: 600;
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
.search-bar:focus .search-bar {
  width: 20rem;
}

.heading-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 1rem 3rem;
  background-color: #ffcc009d;
  border-radius: 2rem;
}
.heading-grid h4 {
  padding: 0 1rem 0 0;
  font-weight: 600;
}

.entry-grid h4 {
  font-weight: 400;
}
.entry-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 1rem 3rem;
  border-radius: 2rem;
  transition: all 0.3s;
}

.entry-grid:hover {
  background-color: #fff;
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
  border-radius: 2rem;
  box-shadow: 0px 0px 5px 4px rgba(92, 92, 92, 0.315);
}

.booking-container h1 {
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
  border-radius: 1rem;
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

.cost-section {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 0 1rem 2rem 1rem;
  background: #d8d8d850;
  border-radius: 1rem;
}
.cost-section > form > h5 {
  margin: 1rem;
  text-align: center;
}
.confirmation-text {
  width: 100%;
  background: #ffcb00;
  text-align: center;
  border-radius: 2rem;
}
.confirmation-text h1 {
  color: black;
  font-weight: 400;
  white-space: nowrap;
  padding: 0 2rem;
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
  height: 2rem;
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

/* =======================================CARGO DETAILS AND LOGIN SIGNUP Starts============================= */

.cargo-details-section {
  margin: 2rem auto auto auto;
  padding: 2rem 5rem;
  max-width: 1800px;
}

.cargo-details-container {
  border-radius: 2rem;
  background: #fff;
  padding: 1rem 4rem 1rem 4rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px 4px rgba(92, 92, 92, 0.315);
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
.searchable {
  width: 60%;
  margin: none;
  border-radius: 2rem;
  position: relative;
  height: 2.2rem;
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

.fill-in button {
  border: none;
  outline: none;
  width: 100%;
  background-color: #ffcb00;
  font-weight: 500;
  font-family: "montserrat";
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

/* ==================================Form Inputs End=================================*/
/* ==================================Form  Ends======================================*/

/* ====================================Summary Starts=============================== */

.cargo-summary-element p {
  margin: 8px 0 0 0;
  text-align: center;
  color: #000000;
}
.cargo-details-subcontainer-6 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  align-items: end;
  color: #fff;
  padding-bottom: 1rem;
}

/* ====================================Summary Ends=============================== */

/* ==================================Calender Starts=================================*/

.calendar {
  width: 400px;
  min-height: 400px;
  left: 5px;
  z-index: 10000;
  background: #dfdfdf;
  border: 1px white solid;
  position: absolute;
  /* backdrop-filter: blur(20px); */
  margin-top: 0.5rem;
  border-radius: 2rem;
  display: none;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}
.searchable input:focus + div .calendar {
  display: flex;
}
#dycalendar {
  width: 100%;
}
#dycalendar table {
  width: 100%;
  margin-top: 4rem;
  font-size: 1.2rem;
  border-spacing: 5px;
}
#dycalendar table td {
  padding: 0.7rem;
  cursor: pointer;
  transition: all 0.25s ease-out;
}
#dycalendar table td:hover {
  background: #fff !important;
  color: #000 !important;
  border-radius: 0.5rem !important;
}
#dycalendar table tr:nth-child(1) td {
  background: #fff;
  color: rgb(0, 0, 0);
  border-radius: 0.5rem;
  padding: 0.7em;
}
.dycalendar-month-container .dycalendar-today-date,
.dycalendar-month-container .dycalendar-target-date {
  background: #ffcb00 !important;
  color: #000 !important;
  border-radius: 0.5rem !important;
}
.dycalendar-month-container
  .dycalendar-header
  .dycalendar-prev-next-btn.prev-btn {
  background: rgba(0, 0, 0, 0.15);
  color: #000;
  width: 44px;
  height: 38px;
  left: 4px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
.dycalendar-month-container
  .dycalendar-header
  .dycalendar-prev-next-btn.next-btn {
  background: rgba(0, 0, 0, 0.15);
  color: #000;
  width: 44px;
  height: 38px;
  right: 4px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
.dycalendar-month-container .dycalendar-span-month-year {
  color: #3b3b3b;
  font-size: 1.7rem;
  font-weight: 600;
}

/* ======================This css styles is to remove the calender
icon from the input field. ================================== */

/* input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    width: 15px;
    padding: 0px;
    margin: 0px;
    margin-top: 10px;
} */

/* ==================================Calender Ends=================================*/

/* =========================================================Login Starts============================================================ */

#login-error {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 3rem;
  z-index: 1000;
}

#login-error:hover p {
  visibility: visible;
  display: inline;
  transition: 1s;
}
#login-error p {
  padding: 1rem 7rem;
  border-radius: 2rem;
  background-color: #ffcb00;
  width: fit-content;
  display: none;
  visibility: hidden;
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
  border-radius: 2rem;
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
  top: 2.8rem;
  border-radius: 1rem;
  padding: 0.6rem;
  z-index: 100;
  right: 1.5rem;
  /* display: none; */
  z-index: 1000;
}
.dropdown-profile li {
  list-style: none;
  border-bottom: #ffffff2a 2px solid;
  transition: 0.25s;
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
  width: 400px;
  background: #dfdfdf;
  /* backdrop-filter: blur(20px); */
  border: 1px white solid;
  top: 2.8rem;
  border-radius: 1rem;
  padding: 0 1rem 1rem 1rem;
  z-index: 100;
  left: 0;
  display: none;
  z-index: 1000;
}
.dropdown-search li {
  list-style: none;
  border-bottom: #ffffff2a 2px solid;
  margin-top: 0.5rem;
  width: 100%;
  padding-left: 1rem;
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
  }

  .fill-in h4 {
    white-space: nowrap;
    padding-left: 1rem;
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
  border-radius: 2rem;
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
  border-radius: 1rem;
}
.cost-section > form > h5 {
  margin: 1rem;
  text-align: center;
}
.confirmation-text {
  width: 100%;
  background: #ffcb00;
  text-align: center;
  border-radius: 2rem;
}
.confirmation-text h1 {
  color: black;
  font-weight: 400;
  white-space: nowrap;
  padding: 0 2rem;
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