import "./style.scss";

const App = {
  data() {
    return {
      orderStatus: "Where is my taco...",
      orderSubmitted: null,
    };
  },
  methods: {
    getTaco() {
      this.orderStatus = "🌮!";
    },
  },
  watch: {
    orderStatus() {
      //add code here to run when orderStatus is changed
      this.orderSubmitted = "Your order was submitted";
      setTimeout(() => {
        this.orderSubmitted = null;
      }, 1000);
    },
  },
};

Vue.createApp(App).mount("#app");
