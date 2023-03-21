/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'


export default createVuetify({
  icons: {
    iconfont: 'mdiSvg',
    defaultSet: 'mdi',
  }
})

