import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/scss/bootstrap.scss'
import router from './router'
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'

import * as AllRules from '@vee-validate/rules'

import { localize, setLocale } from '@vee-validate/i18n'

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 指欄位輸入內容時，會立即進行驗證（即邊寫邊判斷）
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-form', Form)
app.component('v-field', Field)
app.component('error-message', ErrorMessage)

app.mount('#app')
