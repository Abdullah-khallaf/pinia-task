// main.js
import { createApp } from 'vue';
import './style.css'
import { createPinia } from 'pinia';
import App from './App.vue';
// import router from './router';


// import fontawesome from

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(fas, far, fab)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia()); // Register Pinia
// app.use(router)
app.mount('#app');
