import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  getAuth,
  updatePassword,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import router from "@/router";

const state = {
  isAuthenticated: false,
  isLoading: false,
  username: "",
  email: '',
  password: ''
};

const mutations = {
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  },
  userLogIn(state, payload) {
    state.isAuthenticated = payload;
  },
  userLogout(state, payload) {
    state.isAuthenticated = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setUsername(state, payload) {
    state.username = payload;
  },
  setUserEmail(state, payload) {
    state.email = payload;
  },
  setUserPassword(state, payload) {
    state.password = payload;
  },
};

const actions = {
  userSignUp({ commit, dispatch }, payload) {
    commit("setLoading", true);
    const { email, password, router } = payload;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        commit("setLoading", false);
        const user = userCredential.user;
        if (user) {
          commit("setIsAuthenticated", true);
          commit("setUsername", payload.username);
          router.replace("/");
          sessionStorage.setItem("username", payload.username);
          sessionStorage.setItem(
            "userCredential",
            JSON.stringify(userCredential)
          );
          dispatch("updateUserProfile", {
            username: payload.username,
          });
        } else {
          commit("setIsAuthenticated", false);
          router.replace("/sign-up");
          commit("setLoading", false);
        }
      })
      .catch((error) => {
        commit("setLoading", false);
        console.log(error);
      });
  },
  // userSignIn({ commit, dispatch }, payload) {
  //   commit("setLoading", true);
  //   const { email, password, router } = payload;
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       commit("setLoading", false);
  //       const user = userCredential.user;
  //       if (user) {
  //         commit("setIsAuthenticated", true);
  //         commit("setUsername", user.displayName);
  //         router.replace("/");
  //         sessionStorage.setItem("username", user.displayName);
  //         sessionStorage.setItem(
  //           "userCredential",
  //           JSON.stringify(userCredential)
  //         );
  //         dispatch("updateUserProfile", { username: user.displayName });
  //       } else {
  //         commit("setIsAuthenticated", false);
  //         router.replace("/login");
  //         commit("setLoading", false);
  //       }
  //     })
  //     .catch((error) => {
  //       commit("setLoading", false);
  //       console.log(error);
  //     });
  // },
  userSignIn({ commit, dispatch }, payload) {
    commit("setLoading", true);
    const { email, password, router } = payload;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        commit("setLoading", false);
        const user = userCredential.user;
        if (user) {
          commit("setIsAuthenticated", true);
          commit("setUsername", user.displayName);
          router.replace("/");
          sessionStorage.setItem("username", user.displayName);
          sessionStorage.setItem("email", user.email);
          sessionStorage.setItem("password", user.password);
          dispatch("updateUserProfile", { username: user.displayName });
        } else {
          commit("setIsAuthenticated", false);
          router.replace("/login");
          commit("setLoading", false);
        }
      })
      .catch((error) => {
        commit("setLoading", false);
        console.log(error);
      });
  },
  logout({ commit }) {
    commit("setLoading", true);
    signOut(auth)
      .then(() => {
        commit("userLogout", false);
        sessionStorage.clear();
        router.replace("/login");
      })
      .catch((error) => {
        commit("setLoading", false);
        console.log(error);
      });
  },
  async resetUserPassword({ commit }, payload) {
    commit("setLoading", true);
    const { email } = payload;
    try {
      await sendPasswordResetEmail(auth, email);
      commit("setLoading", false);
    } catch (error) {
      commit("setLoading", false);
      console.log(error);
    }
  },
  async updateUserProfile({ commit }, payload) {
    commit("setLoading", true);
    const { username, password } = payload;
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        if (username) {
          await updateProfile(user, {
            displayName: username,
          }).then((userProfile) => {
            // console.log(userProfile);
          });
        }
        if (password) {
          await updatePassword(user, password);
        }
        commit("setLoading", false);
      }
    } catch (error) {
      commit("setLoading", false);
      console.log(error);
    }
  },
};

const getters = {
  isAuthenticated: (state) => {
    return state.isAuthenticated;
  },
  isLoading: (state) => {
    return state.isLoading;
  },
  getUsername(state) {
    return state.username;
  },
  getUserEmail(state) {
    return state.email;
  },
  getUserPassword(state) {
    return state.password;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
