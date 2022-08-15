import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth"
// const store = require("./vuex/store").default;
Vue.use(Vuex);


const state = {
  user: {},
  rankedSessions: [],
};

const getters = {
  getUser: (state) => {
    return state.user;
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  setUser(context, data) {
    context.commit("setUser", data);
  },
};

export default new.Store({
  modules: {
    auth
  },
plugins: [createPersitedState()]
});
