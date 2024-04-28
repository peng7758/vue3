import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './components/store'
import openDB from "./indexDB/open.ts";

window.db = openDB('vartionBOM', 1, 'table');

createApp(App).use(ElementPlus).use(store).mount('#app')
