var Animal = {
  type: "Invertebrates",
  displayType: function () {
    console.log(this.type);
  }
}

var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();