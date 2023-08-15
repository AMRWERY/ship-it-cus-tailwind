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
