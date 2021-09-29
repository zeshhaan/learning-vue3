import "./style.css";

const App = {
  data() {
    return {
      message: "",
    };
  },
  computed: {
    greeting() {
      return `Y'all dont be like this guy → ${this.message}`;
    },
  },
};

Vue.createApp(App).mount("#app");
