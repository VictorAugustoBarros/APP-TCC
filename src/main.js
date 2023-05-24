import App from './App'
import router from '@/router'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import pageStore from '@/store/pageStore';

const app = createApp(App)

console.log("Registrando plugins...")

registerPlugins(app)

console.log("Plugins registrados!")

console.log("Buscando Page History...!")
const page = pageStore()

if (page.getPage) {
  console.log("Pagina restorada...!")
  console.log(page.getPage)
  router.replace(JSON.parse(page.getPage));
}else{
  console.log("Sem Page History...!")
}

app.use(router)
app.mount('#app')


