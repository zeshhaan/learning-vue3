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

<script>
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem,
  },
  inject: ["cart"],
  methods: {
    removeItem(e) {
      this.cart.splice(
        this.cart.findIndex(({ name }) => name === e.name),
        1
      );
    },
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, obj) => obj.sum + total, 0);
    },
  },
};
</script>
