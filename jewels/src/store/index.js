import Vue from "vue";
import Vuex from "vuex";
import createPersitedState from "vuex-persistedstate";
import auth from "./modules/auth";
// const store = require("./vuex/store").default;
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [createPersitedState()],
});
