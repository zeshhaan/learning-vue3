import "./style.scss";

const PlanComponent = {
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
};

const PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: "#plan-picker-template",
  data() {
    return {
      plans: ["The Addict", "The Curious", "The Single"],
    };
  },
};

const app = Vue.createApp({
  components: {
    "plan-picker": PlanPickerComponent,
  },
})
.mount("#app");
