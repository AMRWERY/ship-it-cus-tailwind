const state = {
  selectedCard: null,
  card: null,
  selectedShipping: null,
  shipping: null,
};

const mutations = {
  setSelectedCard(state, card) {
    state.selectedCard = card;
  },
  setSelectedShipping(state, payload) {
    state.selectedShipping = payload;
  },
};

const actions = {};

const getters = {
  getSelectedCard(state) {
    return state.selectedCard;
  },
  getSelectedShipping(state) {
    return state.selectedShipping;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
