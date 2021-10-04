export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

export const actions = {
  async getProducts({ commit }) {
    try {
      const products = await this.$axios.$get('http://localhost:3000/data/products.json');
      if (products?.length > 0) {
        products.forEach((product, index) => {
          products[index].img = `https://www.static.bondibon.ru/linkpics/${parseInt(
            product.code / 1000, 10,
          )}/${product.code}_2b.jpg`;
        });
      }
      // eslint-disable-next-line no-console
      // console.log(products);
      commit('setProducts', products);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      throw e;
    }
  },
};

export const getters = {
  products: (state) => state.products,
  productsPics: (state) => {
    if (state.products?.length > 0) {
      // eslint-disable-next-line no-console
      console.log(state.products.length);
    }
    return state.products;
  },
  productsNew: (state) => state.products.filter((product) => product.new === true),
  productsHit: (state) => state.products.filter((product) => product.hit === true),
};

export const state = () => ({
  products: [],
});
