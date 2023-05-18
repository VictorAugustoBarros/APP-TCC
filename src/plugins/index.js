import { loadFonts } from './webfontloader'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'

import vuetify from './vuetify'
import router from '@/router'

import store from '@/store'


export function registerPlugins(app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(store)
    .use(library)
    .use(FontAwesomeIcon)
    .use(faCommentDots)
    .config.productionTip = false
}

