/*
 * @Author: leung
 * @Date: 2022-01-31 17:05:56
 * @LastEditTime: 2022-02-02 20:32:51
 * @LastEditors: leung
 * @Description: 
 */
import App from './App'
import { createApp } from "vue";
import router from './router'

createApp(App).use(router).mount("#app");
