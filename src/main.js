import { createApp } from 'vue'

import App from './App.vue'
import './assets/tailwind.css'

import Timer from './components/Timer.vue';
import BasicButtonEntryIn from './components/BasicButtonEntryIn.vue';
import BasicButtonEntryOut from './components/BasicButtonEntryOut.vue';


const app = createApp(App);

app.component('timer', Timer);
app.component('basic-button-entry-in', BasicButtonEntryIn);
app.component('basic-button-entry-out', BasicButtonEntryOut);


app.mount('#app');
