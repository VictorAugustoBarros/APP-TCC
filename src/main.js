import App from './App'
import router from '@/router'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import pageStore from '@/store/pageStore';

const app = createApp(App)

registerPlugins(app)

const page = pageStore()

console.log(page.getPage0);
if (page.getPage) {
  router.replace(page.getPage);
}

app.use(router)
app.mount('#app')


