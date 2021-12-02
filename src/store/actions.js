import {fetchList, fetchItemInfo, fetchUserInfo} from "../api";

export default {
  FETCH_LIST({commit}, pageName) {
    fetchList(pageName)
      .then(({data}) => {
        commit('SET_LIST', data);
      })
      .catch();
  },
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then(({data}) => {
        commit('SET_USER', data);
      })
      .catch();
  },
  FETCH_ITEM({commit}, id) {
    fetchItemInfo(id)
      .then(({data}) => {
        commit('SET_ITEM', data);
      })
      .catch();
  }
};
