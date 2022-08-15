"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _auth = _interopRequireDefault(require("./modules/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const store = require("./vuex/store").default;
_vue["default"].use(_vuex["default"]);

var state = {
  user: {},
  rankedSessions: []
};
var getters = {
  getUser: function getUser(state) {
    return state.user;
  }
};
var mutations = {
  setUser: function setUser(state, user) {
    state.user = user;
  }
};
var actions = {
  setUser: function setUser(context, data) {
    context.commit("setUser", data);
  }
};

var _default = new {
  state: {
    user: null,
    users: null,
    products: null,
    product: null,
    asc: true
  },
  mutations: {
    setUsers: function setUsers(state, users) {
      state.users = users;
    },
    setUser: function setUser(state, user) {
      state.user = user;
    },
    setProducts: function setProducts(state, products) {
      state.products = products;
    },
    setProduct: function setProduct(state, product) {
      state.product = product;
    },
    sortProductsByPrice: function sortProductsByPrice(state) {
      state.products.sort(function (a, b) {
        return a.price - b.price;
      });

      if (!state.asc) {
        state.products.reverse();
      }

      state.asc = !state.asc;
    }
  },
  actions: {
    // takes in user input and sends a get request to the server/database and retrieves all user data
    login: function login(context, payload) {
      var email, password, response, userData;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = payload.email, password = payload.password;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch("https://xcjewels.herokuapp.com/users?email=".concat(email, "&password=").concat(password)));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(response.json());

            case 6:
              userData = _context.sent;
              context.commit("setUser", userData[0]);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    // takes in user input and sends a post request to the server/database and adds all user data
    register: function register(context, payload) {
      var full_name, email, password;
      return regeneratorRuntime.async(function register$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              full_name = payload.full_name, email = payload.email, password = payload.password;
              fetch("https://xcjewels.herokuapp.com/users", {
                method: "POST",
                body: JSON.stringify({
                  full_name: full_name,
                  email: email,
                  password: password
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then(function (response) {
                return response.json();
              }).then(function (json) {
                return context.commit("setUser", json);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    getProducts: function getProducts(context) {
      return regeneratorRuntime.async(function getProducts$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              fetch("https://xcjewels.herokuapp.com/products").then(function (res) {
                return res.json();
              }).then(function (products) {
                return context.commit("setProducts", products);
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    getProduct: function getProduct(context, id) {
      return regeneratorRuntime.async(function getProduct$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              fetch("https://xcjewels.herokuapp.com/products/" + id).then(function (res) {
                return res.json();
              }).then(function (product) {
                return context.commit("setProduct", product);
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    createProduct: function createProduct(context, product) {
      return regeneratorRuntime.async(function createProduct$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              fetch("https://xcjewels.herokuapp.com/products/", {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then(function (response) {
                return response.json();
              }).then(function () {
                return context.dispatch("getProducts");
              });

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    },
    deleteProduct: function deleteProduct(context, id) {
      return regeneratorRuntime.async(function deleteProduct$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              fetch("https://xcjewels.herokuapp.com/products/" + id, {
                method: "DELETE"
              }).then(function () {
                return context.dispatch("getProducts", id);
              });

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    },
    updateProduct: function updateProduct(context, product) {
      return regeneratorRuntime.async(function updateProduct$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              fetch("https://xcjewels.herokuapp.com/products/" + product.id, {
                method: "PUT",
                body: JSON.stringify(product),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then(function (response) {
                return response.json();
              }).then(function () {
                return context.dispatch("getProducts");
              });

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      });
    }
  },
  modules: {}
}();

exports["default"] = _default;