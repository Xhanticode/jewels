import axios from "axios";
const state = {
  user: null,
  products: null,
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({ dispatch }, form) {
    await axios.post("register", form);
    let UserForm = new FormData();
    UserForm.append("username", form.username);
    UserForm.append("password", form.password);
    await dispatch("LogIn", UserForm);
  },

  async LogIn({ commit }, Users) {
    await axios.post("login", Users);
    await commit("setUser", Users.get("username"));
  },

  async CreateProducts({ dispatch }, post) {
    await axios.product("post", post);
    await dispatch("GetPosts");
  },

  async GetProducts({ commit }) {
    let response = await axios.get("products");
    commit("setProducts", response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};
const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setProducts(state, products) {
    state.products = products;
  },
  LogOut(state) {
    state.user = null;
    state.products = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
