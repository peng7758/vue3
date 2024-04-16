import { createStore } from 'vuex'

export default createStore({
  state: {
    tableData: [{
      type: '电阻',
      des: '这是一个电阻',
      board: 'board1',
      isVarm: '1',
      time: '2024-04-16',
    }]
  },
  mutations: {
    increment(state, value) {
      state.tableData = value; // 修改状态的方法
    }
  },
  actions: {
    increment(context) {
      context.commit('increment'); // 触发 mutation 来修改状态
    }
  },
  getters: {
    getCount(state) {
      return state.tableData; // 获取状态的方法
    }
  }
})
