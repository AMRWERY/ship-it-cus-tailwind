import { createStore } from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import categories from "./modules/categories";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";
import selectedCard from "./modules/selectedCard";
import deal from "./modules/deal";

const store = createStore({
  modules: {
    auth,
    products,
    categories,
    cart,
    wishlist,
    selectedCard,
    deal,
  },
});

export default store;
