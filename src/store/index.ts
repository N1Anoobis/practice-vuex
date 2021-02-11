import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        price: 0,
        name: "",
      },
    ],
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: state => {
      state.products.forEach((product) => {
        product.price -= 10;
      });
    },
    loadAPIdataToStore: (state, data) => {
      state.products = data;
    },
  },
  actions: {
    async fetchProducts(context) {
      await axios
        .get("http://localhost:3000/products")
        .then(response => {
          context.commit("loadAPIdataToStore", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  modules: {},
});
