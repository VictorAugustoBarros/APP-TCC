// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import store from './store/store';


/* import font awesome icon component */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

library.add(faCommentDots);

const app = createApp(App)

registerPlugins(app)

app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


