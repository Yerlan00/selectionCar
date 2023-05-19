// function car(name, model, year, image, owner, phone) {
//   return {
//     name,
//     model,
//     image,
//     owner,
//     phone,
//   };
// }

const car = (name, model, year, image, owner, phone) => ({
  name,
  model,
  year,
  image,
  owner,
  phone,
});

const log = (text, type, date = new Date()) => ({ text, type, date });

const cars = [
  car("Toyota", "camry", 2022, "images/camry.jpg", "Alex", "+5 800 433, 45 33"),
  car(
    "Toyota",
    "corolla",
    2020,
    "images/corolla.jpg",
    "Jon",
    "+5 800 411, 61 82"
  ),
  car("Kia", "k8", 2021, "images/k8.jpg", "Tom", "+5 800 431, 76 98"),
];

new Vue({
  el: "#app",
  data: {
    cars: cars,
    car: cars[0],
    logs: [],
    selectedCarIndex: 0,
    phoneVisibility: false,
    search: "",
    modalVisibility: false,
  },
  methods: {
    selectCar(index) {
      this.car = cars[index];
      this.selectedCarIndex = index;
    },
    newOrder() {
      this.modalVisibility = false;
      this.logs.push(
        log(`Success order: ${this.car.name} - ${this.car.model}`, "ok")
      );
    },
    cancelOrder() {
      this.modalVisibility = false;
      this.logs.push(
        log(`Cancelled order: ${this.car.name} - ${this.car.model}`, "cnl")
      );
    },
  },
  computed: {
    phoneBtnText() {
      return this.phoneVisibility ? "Hide phone" : "Show phone";
    },

    filteredCars() {
      return (filtered = this.cars.filter((car) => {
        return (
          car.name.indexOf(this.search) > -1 ||
          car.model.indexOf(this.search) > -1
        );
      }));
    },
  },

  filters: {
    date(value) {
      return value.toLocaleString();
    },
  },
});
