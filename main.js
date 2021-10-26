import "./style.css";

Vue.createApp({})
  .component("plan-picker", {
    template: "#plan-picker-template",
    data() {
      return {
        plans: ["Vue", "Svelte", "React"],
      };
    },
  })
  .component("plan", {
    template: "#plan-template",
    props: {
      name: {
        type: String,
        required: true,
        default: "jQuery",
      },
    },
  })
  .mount("#app");
