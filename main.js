import "./style.scss";

const App = {
  data() {
    return {
      selected: "",
      labels: ["science", "math", "poetry", "history"],
      posts: [
        {
          author: "@vFitzgerald",
          title: "Quod Ducimus Omnis",
          label: "science",
        },
        {
          author: "@mPalmer",
          title: "Vero Eius Laboriosam Ex Repudiandae",
          label: "math",
        },
        {
          author: "@mDean",
          title: "Magnam Odit",
          label: "science",
        },
        {
          author: "@tCole",
          title: "Velit Mollitia Voluptates Assumenda",
          label: "science",
        },
        {
          author: "@jCooper",
          title: "Eum Commodi Cupiditate",
          label: "poetry",
        },
        {
          author: "@lLamb",
          title: "Amet",
          label: "history",
        },
        {
          author: "@fMartin",
          title: "Voluptatem Fuga Cum Asperiores Error",
          label: "science",
        },
        {
          author: "@eHayes",
          title: "Ipsa Consectetur Rerum Repellat Quia",
          label: "math",
        },
        {
          author: "@cCollier",
          title: "Dolor Nihil Delectus",
          label: "science",
        },
        {
          author: "@cBenson",
          title: "Labore Ipsum Ad Pariatur",
          label: "poetry",
        },
      ],
      newTitle: "",
      newAuthor: "",
      newLabel: "",
    };
  },
  methods: {
    addNewPost() {
      let newPost = {
        author: this.newAuthor,
        title: this.newTitle,
        label: this.newLabel,
      };
      this.posts.push(newPost);
      this.newAuthor = "";
      this.newLabel = "";
      this.newTitle = "";
    },
  },
  computed: {
    filteredLabels(e) {
      let filter = new RegExp(this.selected, "i");
      return this.posts.filter((el) => el.label.match(filter));
    },
  },
  watch: {
    selected(newVal, oldVal) {
      console.log(`the label is changed from ${oldVal} to ${newVal}`);
    },
  },
};

Vue.createApp(App).mount("#app");
