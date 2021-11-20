<template>
  <li :key="item.id">
    <div class="cart-item">
      <div class="cart-item-img">
        <img :src="item.url" :alt="item.name" height="40" width="40" />
        <input type="number" min="1" v-model.number="item.count" />
      </div>
      <div class="card-item-details">
        <p>{{ item.name }}</p>
        <p>₹ {{ (item.sum = item.count * item.price) }}</p>
        <div>
          <a @click="$emit('remove-cart-item', item)" title="Delete Item">
            Remove
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>
