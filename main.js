import "./style.css";

const App = {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      response: "",
      activeClass: "active",
      submitText: "Submit",
    };
  },
  methods: {
    submitForm() {
      this.submitText = "Submitting...";
      setTimeout(() => {
        this.submitText = "Sent";
        this.activeClass = "";
        this.submitText = "Submit";
      }, 3000);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  })
  .mount("#app");
