import {fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo} from "../api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch();
  },
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then(response => {
        commit('SET_JOBS', response.data);
      })
      .catch();
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(response => {
        commit('SET_ASK', response.data);
      })
      .catch();
  },
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then(response => {
        commit('SET_USER', response.data);
      })
      .catch();
  },
  FETCH_ITEM({commit}, id) {
    fetchItemInfo(id)
      .then(response => {
        commit('SET_ITEM', response.data);
      })
      .catch();
  }
};
