import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: [],
    user: {},
    item: {}
  },
  getters: {
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions
})