import VueRouter from 'vue-router';
import ProfileComponent from './components/ProfileComponent';
import Timeline from './components/Timeline';
import ContactComponent from './components/ContactComponent';

const routes = [
    {
        path: '/home',
        name: 'profile',
        component: ProfileComponent,
        meta: { title: 'My Profile' }
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: Timeline,
        meta: { title: 'My Feed' }
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactComponent,
        meta:{ title: 'My Feed'}
    },

];

export const router = new VueRouter({
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes,
    mode: 'history',
});