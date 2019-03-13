import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

const MY_ICONS = {
  'qrcode': 'fas fa-qrcode',
  'company': 'fas fa-building',
  'location': 'fas fa-map-marked-alt',
  'marker': 'fas fa-map-marker-alt',
  'employee': 'fas fa-users',
  'setting': 'fas fa-cog',
  'logout': 'fas fa-sign-out-alt',
  'phone': 'fas fa-phone',
  'image': 'fas fa-file-image',
  'save': 'fas fa-save',
  'file': 'fas fa-file',
  'file2': 'fas fa-file-alt',
  'book': 'fas fa-book',
  'upload': 'fas fa-upload',
  'cash-register': 'fas fa-cash-register',
  check: 'fas fa-check-double'
}

const MY_THEME = {
  primary: colors.red.base,
  secondary: colors.grey.base,
  tertiary: colors.pink.base,
  info: colors.green.base
}

Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: MY_ICONS,
  theme: MY_THEME,
  options: {
    customProperties: true
  }
})
