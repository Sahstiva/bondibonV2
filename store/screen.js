export const mutations = {
  setScreen(state, screen) {
    state.screen = screen;
  },
};

export const actions = {
  getScreen({ commit }) {
    if (typeof window !== 'undefined') { commit('setScreen', window.screen.width); }
  },
};

export const getters = {
  screen: (state) => state.screen,
};

export const state = () => ({
  screen: 2560,
});
