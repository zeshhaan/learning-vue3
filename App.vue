<template>
  <Navigation :cart="cart" />
  <main>
    <Dishes @add-to-cart="addToCart"></Dishes>
    <Cart></Cart>
  </main>
  <div class="toast-message">
    <p><span>Coming Soon</span> → Add your own favourite dishes 🍱</p>
  </div>
</template>

<script>
import Dishes from "./components/Dishes.vue";
import Cart from "./components/Cart.vue";
import Navigation from "./components/Navigation.vue";
import {ref} from 'vue'

export default {
  name: "App",
  components: {
    Cart,
    Dishes,
    Navigation,
  },

  setup(){
    const cart = ref([]);
    function addToCart(e) {
      let { id, name, url, price, count } = e;
      count++;
      cart.value.push({ name, id, url, price, count });
    }
    return {cart, addToCart};
  },

  provide() {
    return {
      cart: this.cart,
    };
  },
};
</script>
