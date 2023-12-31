import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

const state = {
  products: [],
  selectedProduct: null,
  searchResults: [],
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setSelectedProduct(state, product) {
    state.selectedProduct = product;
  },
  setSearchResults(state, results) {
    state.searchResults = results;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    const querySnap = await getDocs(query(collection(db, "products")));
    let products = [];
    querySnap.forEach((doc) => {
      let pro = {
        id: doc.id,
        ...doc.data(doc.id),
      };
      products.push(pro);
    });
    commit("setProducts", products);
    commit("setSearchResults", products);
  },
  async getProductById({ commit }, id) {
    const docSnap = await getDoc(doc(db, "products", id));
    if (docSnap.exists()) {
      let product = { ...docSnap.data(), id: id };
      commit("setSelectedProduct", product);
    }
  },
};

const getters = {
  getAllProducts: (state) => state.products,
  getSelectedProduct: (state) => state.selectedProduct,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
