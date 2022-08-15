<template>
  <div class="app-container">
    <div class="app-content">
      <SideBar />
      <div class="projects-section">
        <div class="projects-section-header" d-flex style="gap: 1rem">
          <p>Products</p>
          <div class="search-wrapper">
            <input class="search-input" type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="feather feather-search"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>
          <div class="filter-wrapper">
            <b-form-select
              v-model="selected"
              :options="options"
              size="sm"
              class="filter"
            ></b-form-select>
          </div>
        </div>
        <div class="products-grid" v-if="products.length">
          <ProductCard
            v-for="product of products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";

export default {
  components: {
    SideBar,
    ProductCard,
  },
  data() {
    return {
      products: [],
      selected: null,
      options: [
        { value: null, text: "Sort" },
        { value: "a", text: "Price" },
        { value: "b", text: "Category" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  mounted() {
    axios.get("https://xcjewels.herokuapp.com/products").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
    //   this.$store.dispatch("getProducts");
    //   this.$store.dispatch("getUser");
    // },
    // computed: {
    //   // products() {
    //   //   return this.$store.state.products;
    //   // },
    //   user() {
    //     return this.$store.state.user;
    //   },
    //   idArray() {
    //     return this.products.map((product) => product.id);
    //   },
    // },
    // methods: {
    //   sortPrice() {
    //     this.$store.commit("sortProductsByPrice");
    //   },
    // },
    // created() {
    //   // GET request using fetch with error handling
    //   fetch("https://xcjewels.herokuapp.com/products")
    //     .then(async (response) => {
    //       const data = await response.json();
    //       console.log(data);

    //       // check for error response
    //       if (!response.ok) {
    //         // get error message from body or default to response statusText
    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //       }

    //       this.totalVuePackages = data.total;
    //     })
    //     .then((data) => (this.products = data));
    //   console.log("this");
    //   console.log("products").catch((error) => {
    //     this.errorMessage = error;
    //     console.error("There was an error!", error);
    //   });
    // },
  },
};
</script>

<style>
.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
