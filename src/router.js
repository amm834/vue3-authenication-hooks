import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/sign-up',
        component: SignUp,
        name: 'sign-up'
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})