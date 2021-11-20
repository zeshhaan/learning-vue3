<template>
  <li :key="dish.id">
    <div>
      <img :src="dish.url" alt="dish.name" width="180" height="250" />
      <p>{{ dish.name }} · ₹ {{ dish.price }}</p>
      <button
        class="add-to-cart"
        :disabled="cart.find(({ name }) => name === dish.name)"
        @click="$emit('add-to-cart', dish)"
      >
        Add to Cart
      </button>
    </div>
  </li>
</template>

<script>
export default {
  inject: ["cart"],
  props: ["dish"],
};
</script>
