import { createApp } from 'vue';

import App from './App.vue';
import router from './router'
import store from './store'
import 'animate.css';
import ErrorShow from './components/ErrorShow.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import SlideButton from './components/SlideButton.vue'

const app = createApp(App).use(store).use(router);

app.component('error-show', ErrorShow)
app.component('loading-screen', LoadingScreen)
app.component('slide-button', SlideButton)

app.directive('focus', {
    mounted(el) {
      el.focus()
    }
  })
const clickOutside = {
    mounted: (el, binding) => {
      el.clickOutsideEvent = event => {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value()
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  };
app.directive("click-outside", clickOutside)
app.mount('#app');
