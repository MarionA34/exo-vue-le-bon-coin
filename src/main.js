import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faMapMarkerAlt, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare, faUser, faHeart, faClock } from '@fortawesome/free-regular-svg-icons'
library.add(faPlusSquare, faSearch, faUser, faHeart, faMapMarkerAlt, faCheckDouble, faClock)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
