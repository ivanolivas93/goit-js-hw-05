let car = {
  maxSpeed: 300,
  speed: 50,
  isOn: true,
  distance: 500,
  price: 25000,
};

class Car {
  constructor({
    maxSpeed = 300,
    speed = 0,
    isOn = false,
    distance = 0,
    price = 25000,
  }) {
    this._maxSpeed = maxSpeed;
    this._speed = speed;
    this._isOn = isOn;
    this._distance = distance;
    this._price = price;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    let newSpeed = this._speed + value;
    this._speed = newSpeed < this._maxSpeed ? newSpeed : this._maxSpeed;
  }

  decelerate(value) {
    let newSpeed = this._speed - value;
    this._speed = newSpeed > 0 ? newSpeed : 0;
  }

  drive(hours) {
    if ((this._isOn = true)) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
