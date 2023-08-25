import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

const state = {
  categories: [],
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
};

const actions = {
  async fetchCategories({ commit }) {
    const querySnap = await getDocs(query(collection(db, "categories")));
    let categories = [];
    querySnap.forEach((doc) => {
      let cat = {
        id: doc.id,
        ...doc.data(doc.id),
      };
      categories.push(cat);
    });
    commit("setCategories", categories);
  },
};

const getters = {
  getAllCategories: (state) => state.categories,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
