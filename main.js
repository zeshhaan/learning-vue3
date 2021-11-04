import "./style.scss";

const app = Vue.createApp({})
  .component("plan-picker", {
    template: "#plan-picker-template",
    data() {
      return {
        plans: ["The Addict", "The Curious", "The Single"],
      };
    },
  })

  .component("plan", {
    template: "#plan-template",
    props: {
      name: {
        type: String,
        default: "Zeeshan",
        required: true,
      },
    },
    data() {
      return {
        name1: "aaa",
      };
    },
  })
  .mount("#app");
