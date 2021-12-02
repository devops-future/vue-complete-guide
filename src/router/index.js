import Vue from 'vue';
import VueRouter from "vue-router";
import UserView from "../view/UserView";
import ItemView from "../view/ItemView";
import ListView from "../view/ListView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'news',
            path: '/news',
            component: ListView,
        },
        {
            name: 'ask',
            path: '/ask',
            component: ListView,
        },
        {
            name: 'jobs',
            path: '/jobs',
            component: ListView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
})