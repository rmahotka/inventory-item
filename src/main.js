import './assets/main.css'
import RU from './locale/ru.json'
import EN from './locale/en.json'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
	locale: 'RU',
	messages: {
		EN: EN,
		RU: RU
	}
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
