<template>
  <div id="app">
    <ProductListOne />
    <ProductListTwo />
  </div>
</template>
<script>
import ProductListOne from "./components/ProductListOne";
import ProductListTwo from "./components/ProductListTwo";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    name: "app",
    ProductListOne,
    ProductListTwo,
  },
})
export default class App extends Vue {}
</script>
<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
