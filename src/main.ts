import { createApp } from 'vue';
import './assets/styles/index.css';
import App from './App.vue';
import { clickOutsideDirective } from './directives/click-outside';
const app = createApp(App);
app.directive('click-outside', clickOutsideDirective);
app.mount('#app');

