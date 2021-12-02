import {fetchAskList, fetchJobsList, fetchNewsList} from "../api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch();
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data);
      })
      .catch();
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => {
        context.commit('SET_ASK', response.data);
      })
      .catch();
  },
};
