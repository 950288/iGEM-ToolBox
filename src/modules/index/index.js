import { createApp, ref } from 'vue';
import App from './index.vue';
import { pinia } from '../../store';
import router from '../../router';
import SvgIcon from "@/components/SvgIcon";
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
const app = createApp(App);
app.component("SvgIcon", SvgIcon);
app.use(pinia).use(router).use(ref).mount('#app');