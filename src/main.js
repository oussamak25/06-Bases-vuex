import { createApp } from 'vue'
import App from './App.vue'
//cuando importamos solo el directorio va a buscar el index
import store from '@/store'

createApp(App).use(store).mount('#app')
