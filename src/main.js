import { createApp } from 'vue'
import './style.css'
import MainPage from './MainPage.vue'
import Particles from "vue3-particles";
createApp(MainPage).use(Particles).mount('#app')
