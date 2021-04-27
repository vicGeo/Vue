import { createApp } from 'vue'

import App from './App.vue'
import './assets/tailwind.css'

import Timer from './components/Timer.vue';


const app = createApp(App);

app.component('timer', Timer);


app.mount('#app');
