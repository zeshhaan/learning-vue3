import "./style.css";

const App = {
  data() {
    return {
      cart: [],
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
          name: "BeefFry",
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
          name: "ButterChicken",
          url: "https://media.istockphoto.com/photos/tasty-butter-chicken-curry-dish-from-indian-cuisine-picture-id1300632831?b=1&k=20&m=1300632831&s=170667a&w=0&h=FjWbieLh-NkmRiL4xsaa3nEMjYmXxmRYpBtvipKGNW8=",
          count: 0,
          price: 120,
        },
      ],
      total: 0,
    };
  },

  methods: {
    addToCart(e) {
      let { id, name, url, price, count } = e;
      count++;
      this.cart.push({ name, id, url, price, count });
    },

    removeItem(e) {
      // first find index and then insert that index into array.splice
      this.cart.splice(
        this.cart.findIndex(({ name }) => name === e.name),
        1
      );
    },
  },

  computed: {
    totalPrice() {
      return (this.total = this.cart.reduce(
        (total, obj) => obj.sum + total,
        0
      ));
    },
  },
};

Vue.createApp(App).mount("#app");
