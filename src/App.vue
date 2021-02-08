<template>
  <div id="app">
    <!-- <ProductListOne v-bind:products="products" />
    <ProductListTwo v-bind:products="products" /> -->
    <ProductListOne />
    <ProductListTwo />
  </div>
</template>
<script>
import ProductListOne from "./components/ProductListOne";
import ProductListTwo from "./components/ProductListTwo";
export default {
  name: "app",
  data() {
    return {
      // products: [
      //   { name: "Samsung", price: 200 },
      //   { name: "Sony", price: 300 },
      //   { name: "Asus", price: 400 },
      //   { name: "Apple", price: 1000 },
      // ],
    };
  },
  components: {
    ProductListOne,
    ProductListTwo,
  },
};
</script>
<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
