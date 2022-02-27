<template>
  <ul>
    <DishItem v-for="dish in state.dishes" :dish="dish" @add-to-cart="$emit('addToCart', dish)"></DishItem>
  </ul>
</template>

<script setup>
import DishItem from "./DishItem.vue";
import { reactive } from 'vue';

const state = reactive({
  dishes: [
     {
          id: 1,
          name: "Porotta",
          url: "https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Parotta-3.jpg",
          price: 10,
          count: 0,
        },
        {
          id: 2,
          name: "Beef Fry",
          url: "https://i1.wp.com/www.sujiscooking.com/wp-content/uploads/2018/12/Kerala-Beef-Roast-or-Beef-Ularthiyathu-1.jpg?fit=1100%2C1650&ssl=1",
          price: 115,
          count: 0,
        },
        {
          id: 3,
          name: "Unnakayi",
          url: "http://1.bp.blogspot.com/-YCkzE3Q6r5I/Vf6X8phZziI/AAAAAAAADsg/2TuEHOJpufo/s1600/IMG_5277.jpg",
          price: 15,
          count: 0,
        },
        {
          id: 4,
          name: "Butter Chicken",
          url: "https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken-500x500.jpg",
          count: 0,
          price: 120,
        },
  ],
});

</script>
