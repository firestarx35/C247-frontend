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

<style>

/* 
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
} 

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
} */

/* Added styles */
.active-list {
    background: #fff;
    border-radius: 2rem;
    color: #000;
}
/* Added ends */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 400;
}

h1 {
  color: #000000;
}

body {
  background-color: #ececec;
}
/* =============================================================== */

/* ==================================Navbar Starts============================= */

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
  padding: 12px;
}

.current-page {
  background: #ffcb00;
}

.nav-links a > span {
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
  margin: 1rem 0;
}

.fill-in h4 {
  font-weight: lighter;
  width: 40%;
  padding: 0 1rem;
  margin: auto 0;
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
  padding: 0.1rem 1rem;
  margin: 0.5rem 0;
}

.btn:hover {
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.5);
}

.login-form a {
  text-decoration: none;
}

.login-form a:hover {
  text-decoration: underline;
}

.login-form a > p {
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  opacity: 0.7;
  color: black;
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

.calendar {
  width: 400px;
  min-height: 400px;
  left: 5px;
  z-index: 10000;
  background: #dfdfdf;
  border: 1px white solid;
  position: absolute;
  backdrop-filter: blur(20px);
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

/* ==================================Dropdown Starts=================================*/

.dropdown-search {
  position: absolute;
  font-size: 12px;
  max-height: 400px;
  width: 400px;
  background: #dfdfdf;
  border: 1px white solid;
  top: 2.8rem;
  border-radius: 2rem;
  padding: 0.7rem;
  z-index: 100;
  left: 0;
  display: none;
  z-index: 1000;
}
.dropdown-search li {
  list-style: none;
  width: 100%;
  transition: 0.25s;
}

.dropdown-search li h3 {
  padding: 0.7rem 1rem;
  cursor: pointer;
}
.dropdown-search li:hover {
  background: #fff;
  border-radius: 2rem;
  color: #000;
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
/* ==================================Summary Bar Starts=================================*/

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
  justify-content: center;
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

/* ==================================Summary Bar Ends=================================*/

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
    margin: auto;
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

/*******************************         SingleAirline.vue           ***********************/

.filters {
  width: 100%;
  max-width: 1600px;
  margin: 1rem auto 0 auto;
}
.filter-grid {
  display: grid;
  grid-template-columns: repeat(6, 10rem);
  justify-content: space-between;
}
.filter-grid h3 {
  margin: auto;
}
.filter-box {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-left: 2rem #3f3f3f solid;
  /* box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3); */
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

/*************************************     SingleExpansion.vue            ****************************/

.card-expansion-container h1,
.card-expansion-container h2,
.card-expansion-container h3,
.card-expansion-container h4,
.card-expansion-container h5,
.card-expansion-container h6 {
  font-weight: 400;
}

.card-expansion-container {
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.863);
  backdrop-filter: blur(6px);
  margin: auto;
  min-width: 600px;
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
  /* background-color: #ffcc001e;
    border-radius: 2rem; */
}

.cost-breakdown div {
  display: flex;
  justify-content: space-evenly;
}

.costs {
  /* border-top: rgba(0, 0, 0, 0.1) 2px dotted;
    border-bottom: rgba(0, 0, 0, 0.1) 2px dotted; */
  padding: 0.7rem;
  background-color: #345dff1a;
  border-radius: 2rem;
}
.cost-breakdown div:last-child {
  margin-top: 1rem;
}

.btn-3 {
  background: #ffcc00;
  height: 2.5rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  width: 200px;
  font-size: 1rem;
  border-radius: 5rem;
}

/********************************        SingleTicket.vue         *******************************/

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

.priority-card {
  background: #333;
  border-color: #ffcb00;
  color: #fff;
}
.card-container:hover {
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.3);
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
  /* border: red 1px solid; */
}
.card-grid-rows-top {
  display: flex;
  width: 100%;
  padding-top: 5px;
  /* border: red 1px solid; */
}
.card-grid-rows-bottom {
  display: flex;
  width: 100%;
  padding-top: 5px;
  /* border: red 1px solid; */
}

.card-flex-box {
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  /* font-size: 15px; */
  width: 195px;
  padding: 0 10px;
}
.card-flex-box-left {
  display: flex;
  font-family: "Inconsolata", monospace;
  /* font-weight: bold; */
  /* font-size: 15px; */
  width: 130px;
  padding: 4px 0 10px 10px;
  flex-direction: column;
}
.card-flex-box-center {
  display: flex;
  font-family: "Inconsolata", monospace;
  /* font-weight: bold; */
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
  /* font-weight: bold; */
  /* font-size: 15px; */
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
.text-black {
  color: black;
}

/**********************************       MultipleAirlines.vue        *****************************/

filters {
  width: 100%;
  max-width: 1600px;
  margin: 1rem auto 0 auto;
}
.filter-grid {
  display: grid;
  grid-template-columns: repeat(6, 10rem);
  justify-content: space-between;
}
.filter-grid h3 {
  margin: auto;
}
.filter-box {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-left: 2rem #3f3f3f solid;
  /* box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3); */
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

</style>