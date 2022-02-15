class Vehicle {
  constructor(vehicleType, speedLimit, capacity) {
    this.vehicleType = vehicleType;
    this.speedLimit = speedLimit;
    this.capacity = capacity;
    this.passengers = [];
  }
  getInformation() {
    if (
      this.vehicleType !== undefined &&
      this.capacity !== undefined &&
      this.speedLimit !== undefined
    ) {
      return `${this.vehicleType}  ${this.speedLimit} ${this.capacity}`;
    } else {
      return null;
    }
  }
  setSpeed(speed) {
    if (this.speedLimit < speed) {
      return `Can't reach speed: ${speed}. Max speed is ${this.speedLimit}`;
    } else {
      return "You are in current speed";
    }
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}

let germany = ["Benz", "BMW", "Audi", "Porsche"];
let america = ["Cadillac", "Ford", "Tesla", "Dodge"];

class Car extends Vehicle {
  constructor(vehicleType, speedLimit, capacity, carName, productionYear, color) {
    super(vehicleType, speedLimit, capacity);
    this.carName = carName;
    this.color = color;
    this.productionYear = productionYear;
  }

  getCarInf() {
    if (germany.includes(this.carName)) {
      return `${this.carName} Germany ${this.productionYear} ${this.color}`;
    } else if (america.includes(this.carName)) {
      return `${this.carName} US ${this.productionYear} ${this.color}`;
    } else {
      return `${this.carName} ${this.productionYear} ${this.color}`;
    }
  }
}

class Motorcycle extends Vehicle {
  constructor(
    vehicleType,
    speedLimit,
    capacity,
    brand,
    motorcycleWheels,
    engineType
  ) {
    super(vehicleType, speedLimit, capacity);
    this.brand = brand;
    this.motorcycleWheels = motorcycleWheels;
    this.engineType = engineType;
  }
  getMotorcycleInf() {
    return `${this.brand} ${this.speedLimit} ${this.engineType}`;
  }
}

const vehicle = new Vehicle("Car", "110km/h", 4);
console.log("Vehicle info:", vehicle.getInformation());
console.log(vehicle.setSpeed("140km/h"));
vehicle.addPassenger("Frank");
vehicle.addPassenger("Judy");
vehicle.addPassenger("Anabel");
console.log("Passengers info:", vehicle.passengers);

console.log("_______________");

const car = new Car("Car", "100km/h", "4", "Ford", "2000", "black");
console.log(car.getCarInf());

console.log("_______________");

const motorcycle = new Motorcycle("Motorcycle", "56km/h", "2", "Honda", 2, "V-Twin");
console.log(motorcycle.getMotorcycleInf());
