import Vue from 'vue';
import VueRouter from "vue-router";
import UserView from "../view/UserView";
import ItemView from "../view/ItemView";
import ListView from "../view/ListView";
import bus from "../utils/bus";
import { store } from "../store";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            name: 'news',
            path: '/news',
            component: ListView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                  .then(() => next())
                  .catch();
            }
        },
        {
            name: 'ask',
            path: '/ask',
            component: ListView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                  .then(() => next())
                  .catch();
            }
        },
        {
            name: 'jobs',
            path: '/jobs',
            component: ListView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                  .then(() => next())
                  .catch();
            }
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