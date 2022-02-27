<template>
  <aside v-if="cart.length" :cart="cart">
    <div>
      <p><b>Cart</b></p>
    </div>
    <ul>
      <CartItem
        v-for="item in cart"
        :item="item"
        @remove-cart-item="removeItem"
      ></CartItem>
    </ul>
    <p>Total Amount: ₹ {{ totalPrice }}</p>
  </aside>
</template>

<script setup>
import CartItem from "./CartItem.vue";
import { inject, computed } from 'vue';

const cart = inject('cart');

const removeItem = e => {
  cart.value.splice(cart.value.findIndex(({ name }) => name === e.name), 1);
}

const totalPrice = computed(() => {
  return cart.value.reduce((total, obj) => obj.sum + total, 0);
})
</script>
