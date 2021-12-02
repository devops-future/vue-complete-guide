import Vue from 'vue';
import VueRouter from "vue-router";
import NewsView from "../view/NewsView.vue";
import JobsView from "../view/JobsView.vue";
import AskView from "../view/AskView.vue";
import UserView from "../view/UserView";
import ItemView from "../view/ItemView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'news',
            path: '/news',
            component: NewsView,
        },
        {
            name: 'ask',
            path: '/ask',
            component: AskView,
        },
        {
            name: 'jobs',
            path: '/jobs',
            component: JobsView,
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