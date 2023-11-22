import 'ant-design-vue/dist/reset.css';
import '@/ui/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DatePicker } from 'ant-design-vue';
import { Button } from 'ant-design-vue';
import Antd from 'ant-design-vue';

import App from './App.vue'
import router from './services/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(DatePicker)
app.use(Button)

app.mount('#app')
