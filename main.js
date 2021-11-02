import "./style.css";

const App = {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      activeClass: "active",
      submitText: "Submit",
    };
  },
  methods: {
    submitForm() {
      this.submitText = "Submitting...";
      setTimeout(() => {
        this.submitText = "Sent";
      }, 1000);
    },
  },
  computed: {
    response() {
      return `Thanks for contacting ${this.name}, you will hear back soon on your email ${this.email} for your request about <pre>${this.message}</pre>`;
    },
  },
};

Vue.createApp(App).mount("#app");
