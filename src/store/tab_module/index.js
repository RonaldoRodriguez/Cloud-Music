export default {
  state: {
    // 首页tab的索引
    homeTabCurrentIndex: 0
  },
  mutations: {
    // 改变首页Tab的索引
    CHANGE_HOME_TAB(state, idx) {
      state.homeTabCurrentIndex = idx;
    }
  },
  getters: {
    // 获取首页当前索引
    getHomeIndex(state) {
      return state.homeTabCurrentIndex;
    }
  }
};
