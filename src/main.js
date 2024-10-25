import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter } from '@/router'
import { directive } from '@/directive';

/* swiper */
// import 'swiper/swiper.min.css'

/* 重置样式 */
import './assets/css/reset.min.css'

// import 'jquery'

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'

/* animate.css */
import 'wow.js/css/libs/animate.css'
import './main.css'

import App from './App.vue'

const router = createRouter()
const app = createApp(App)

// 全局自定义指令挂载
directive(app);

app.use(router).use(ElementPlus).mount('#app')

