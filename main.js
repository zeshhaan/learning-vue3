import "./style.css";

const App = {
  data() {
    return {
      checkedDish: [],
      attribution: `Unfollow me on <a href="https://twitter.com/zeshhaan" target="_blank">twitter</a>`,
    };
  },
};

Vue.createApp(App).mount("#app");
