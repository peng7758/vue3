import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import store from './components/store'


createApp(App).use(ElementPlus).use(store).mount('#app')