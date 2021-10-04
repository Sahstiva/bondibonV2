export const mutations = {
  setSeries(state, series) {
    state.series = series;
  },
};

export const actions = {
  async getSeries({ commit }) {
    try {
      const series = await this.$axios.$get('http://localhost:3000/data/series.json');
      commit('setSeries', series);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      throw e;
    }
  },
};

export const getters = {
  series: (state) => state.series,
};

export const state = () => ({
  series: [],
});
