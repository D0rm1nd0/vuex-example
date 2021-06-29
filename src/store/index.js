import { createStore } from "vuex";

export default createStore({
  state: {
    quantidade: 0,
    usuario: {
      nome: "igor",
    },
  },
  mutations: {
    incrementMutation(state) {
      state.quantidade += 1;
      console.log("incrementMutation");
    },
    decrementMutation(state) {
      state.quantidade -= 1;
    },
  },
  actions: {
    incrementAction({ commit }) {
      commit("incrementMutation");
    },
    decrementAction({ commit }) {
      commit("decrementMutation");
    },
  },
  getters: {
    getQuantidade: (state) => {
      return state.quantidade;
    },
  },
  modules: {},
});
