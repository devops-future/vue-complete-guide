import {fetchList, fetchItemInfo, fetchUserInfo} from "../api";

export default {
  async FETCH_LIST({commit}, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
  async FETCH_USER({commit}, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({commit}, id) {
    try {
      const response = await fetchItemInfo(id);
      commit('SET_ITEM', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  }
};
