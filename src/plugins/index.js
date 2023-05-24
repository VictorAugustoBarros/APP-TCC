import { loadFonts } from './webfontloader'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { createPinia } from 'pinia'

import vuetify from './vuetify'


export function registerPlugins(app) {
  loadFonts()
  app
    .use(vuetify)    
    .use(library)
    .use(FontAwesomeIcon)
    .use(faCommentDots)
    .use(createPinia())
    .config.productionTip = false
}

