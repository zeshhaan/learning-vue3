import "./style.css";

const App = {
  data() {
    return {
      checkedDish: [],
      dishes: [
        {
          id: 1,
          name: "Porotta",
          url: "https://media.istockphoto.com/photos/parotta-or-porotta-is-a-layered-flatbread-made-from-maida-or-atta-picture-id1339811566?b=1&k=20&m=1339811566&s=170667a&w=0&h=3vddMomSnKEkBL6giYshEPk4-nXCBjuunoJp8-m2lNI=",
        },
        {
          id: 2,
          name: "BeefFry",
          url: "https://i1.wp.com/www.sujiscooking.com/wp-content/uploads/2018/12/Kerala-Beef-Roast-or-Beef-Ularthiyathu-1.jpg?fit=1100%2C1650&ssl=1",
        },
        {
          id: 3,
          name: "Chappathi",
          url: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chapati-Breads_EXPS_FT20_136906_F_0721_1.jpg",
        },
        {
          id: 4,
          name: "ButterChicken",
          url: "https://media.istockphoto.com/photos/tasty-butter-chicken-curry-dish-from-indian-cuisine-picture-id1300632831?b=1&k=20&m=1300632831&s=170667a&w=0&h=FjWbieLh-NkmRiL4xsaa3nEMjYmXxmRYpBtvipKGNW8=",
        },
      ],
    };
  },
};

Vue.createApp(App).mount("#app");
