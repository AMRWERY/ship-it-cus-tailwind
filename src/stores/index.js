import { createStore } from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";
import selectedCard from "./modules/selectedCard";

const store = createStore({
  modules: {
    auth,
    products,
    cart,
    wishlist,
    selectedCard,
  },
});

export default store;