import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'animate.css'
import VueAnimateOnScroll from 'vue3-animate-onscroll';

createApp(App).use(store).use(router).use(VueAnimateOnScroll).mount('#app')
