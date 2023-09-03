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
  addToCart(state, product) {
    state.cart.push(product);
  },
  updateCartItem(state, { id, qty }) {
    const productIndex = state.cart.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      state.cart[productIndex].cartQty += qty;
    }
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
