import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  getAuth,
  updatePassword,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import router from "@/router";

const state = {
  isAuthenticated: false,
  isLoading: false,
  username: "",
  email: "",
  password: "",
  userToken: null,
  isUserLoggedIn: false,
};

const mutations = {
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  },
  userLogIn(state, payload) {
    state.isAuthenticated = payload;
  },
  setUserToken(state, payload) {
    state.userToken = payload;
  },
  setIsUserLoggedIn(state, value) {
    state.isUserLoggedIn = value;
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
    const { email, password, username, displayName, router } = payload;
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        commit("setLoading", false);
        const user = userCredential.user;
        if (user) {
          commit("setIsAuthenticated", true);
          commit("setUsername", payload.username);
          commit("setUserEmail", payload.email);
          sessionStorage.setItem("email", payload.email);
          commit("setUserPassword", payload.password);
          sessionStorage.setItem("password", payload.password);
          router.replace("/");
          try {
            await updateProfile(user, {
              displayName: payload.displayName,
            });
            getIdToken(user).then((token) => {
              commit("setUserToken", token);
              sessionStorage.setItem("userToken", token);
            });
            sessionStorage.setItem("userId", user.uid);
            await addDoc(collection(db, "users"), {
              username: payload.username,
              email: payload.email,
              password: payload.password,
              id: user.uid,
            });
            commit("setUsername", payload.username);
            sessionStorage.setItem("username", payload.username);
            commit("setUserToken", token);
            sessionStorage.setItem("userToken", token);
          } catch (error) {
            console.log("Error:", error);
          }
        } else {
          commit("setIsAuthenticated", false);
          router.replace("/sign-up");
          commit("setLoading", false);
        }
      })
      .catch((error) => {
        commit("setLoading", false);
        console.log("Authentication Error:", error);
      });
  },
  userSignIn({ commit, dispatch }, payload) {
    commit("setLoading", true);
    const { email, password, router } = payload;
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        commit("setLoading", false);
        const user = userCredential.user;
        if (user) {
          commit("setIsAuthenticated", true);
          commit("setUsername", user.displayName);
          sessionStorage.setItem("username", user.displayName);
          commit("setUserEmail", payload.email);
          sessionStorage.setItem("email", payload.email);
          commit("setUserPassword", payload.password);
          sessionStorage.setItem("password", payload.password);
          router.replace("/");
          try {
            const usersCollection = collection(db, "users");
            const q = query(usersCollection, where("email", "==", user.email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
              const userData = querySnapshot.docs[0].data();
              commit("setUsername", userData.username);
              sessionStorage.setItem("username", userData.username);
              sessionStorage.setItem("userId", user.uid);
            } else {
              console.log("User data not found in Firestore");
            }
          } catch (error) {
            console.log("Error fetching user data from Firestore:", error);
          }
          getIdToken(user)
            .then((token) => {
              commit("setUserToken", token);
              sessionStorage.setItem("userToken", token);
            })
            .catch((error) => {
              console.log(error);
            });
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
  initAuthentication({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          commit("setUserToken", token);
          commit("setIsUserLoggedIn", true);
        });
      } else {
        commit("setUserToken", null);
        commit("setIsUserLoggedIn", false);
      }
    });
  },
  logout({ commit }) {
    commit("setLoading", true);
    signOut(auth)
      .then(() => {
        commit("userLogout", false);
        commit("setUserToken", null);
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
