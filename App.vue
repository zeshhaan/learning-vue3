<template>
  <Navigation :cart="cart" />
  <main>
    <Dishes @add-to-cart="addToCart"></Dishes>
    <Cart></Cart>
  </main>
  <div class="toast-message">
    <p>
      <span>Coming Soon</span> → Add your own favourite dishes 🍱
    </p>
  </div>
</template>

<script setup>
import Dishes from "./components/Dishes.vue";
import Cart from "./components/Cart.vue";
import Navigation from "./components/Navigation.vue";
import { ref, provide } from 'vue';

const cart = ref([]);
provide('cart', cart)

const addToCart = e => {
  let { id, name, url, price, count } = e;
  count++;
  cart.value.push({ id, name, url, price, count });
}
</script>
