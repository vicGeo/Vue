import { createApp } from 'vue'

import App from './App.vue'
import './assets/tailwind.css'

import Timer from './components/Timer.vue';
import AvatarEmployee from './components/AvatarEmployee.vue';
import DropDown from './components/DropDown.vue';




const app = createApp(App);

app.component('timer', Timer);
app.component('avatar-employee', AvatarEmployee);
app.component('drop-down', DropDown);



app.mount('#app');
