import { createApp } from 'vue';
import InfiniteLoading from 'vue-infinite-loading';
import './styles/main.scss';
import App from './App.vue';

createApp(App).use(InfiniteLoading, {}).mount('#root');