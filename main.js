import "./style.css";

const App = {
  data() {
    return {
      dish: "",
      num1: 1,
      num2: 2,
      count: 0,
      disabled: 'disabled'
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count != 0) {
        this.count--;
      }
    },
  },
};

Vue.createApp(App).mount("#app");
