import App from './view/App';
// import About from './view/About';
// import {create} from 'vue-router';
import { createApp } from 'vue';

// const routes = [
//     {
//         path: '/',
//         component: App
//     },
//     {
//         path: '/about',
//         component: About
//     }
// ]

const app = createApp(App)

// const router = create({
//     routes
// });

// app.use(router);
app.mount('#app');
