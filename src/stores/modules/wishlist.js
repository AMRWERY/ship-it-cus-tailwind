const state = {
  wishlist: [],
  totalItemsWishlist: 0,
};

const mutations = {
  wishlistItems(state, payload) {
    state.wishlist = payload;
  },
  wishlistItemsCount(state, payload) {
    state.totalItemsWishlist = payload;
  },
  addToWishlist(state, product) {
    state.wishlist.push(product);
  },
  updateWishlistItem(state, { id, qty }) {
    const productIndex = state.wishlist.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      state.wishlist[productIndex].wishlistQty += qty;
    }
  },
};

const actions = {};

const getters = {
  getWishlistItems(state) {
    return state.wishlist;
  },
  totalItemsInWishlist(state) {
    return state.totalItemsWishlist;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
