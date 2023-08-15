const state = {
  totalItemsCart: 0,
  cart: [],
};

const mutations = {
  cartItemsCount(state, payload) {
    state.totalItemsCart = payload;
  },
  cartItems(state, payload) {
    state.cart = payload;
  },
  setTotalItemsInCart(state, totalItems) {
    state.totalItemsInCart = totalItems;
  },
};

const actions = {};

const getters = {
  totalItemsInCart(state) {
    return state.totalItemsCart;
  },
  totalItemsAmount(state) {
    return state.cart;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
