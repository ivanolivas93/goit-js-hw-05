class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor(maxSpeed, price) {
    this._maxSpeed = maxSpeed;
    let speed = 0;
    this._speed = speed;
    let isOn = false;
    this._isOn = isOn;
    let distance = 0;
    this._distance = distance;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn(isOn) {
    isOn === true;
  }

  turnOff(isOn) {
    isOn === false;
    this._speed === 0;
  }

  accelerate(value) {
    if (this._speed <= this._maxSpeed) {
      this._speed += value;
    }
  }

  decelerate(value) {
    if (this._speed >= 0) {
      this._speed - value;
    }
  }

  drive(hours) {
    if (this._isOn === true) {
      this._distance = hours * this._speed;
    }
  }
}

/*
 * Добавь статический метод `getSpecs(car)`,
 * который принимает объект-машину как параметр и выводит
 * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
 */

/*
 * Конструктор получает объект настроек.
 *
 * Добавь свойства будущеего экземпляра класса:
 *  speed - текущая скорость, изначально 0
 *  price - цена автомобиля
 *  maxSpeed - максимальная скорость
 *  isOn - заведен ли автомобиль, значения true или false. Изначально false
 *  distance - общий киллометраж, изначально 0
 */

// /*
//  * Добавь геттер и сеттер для свойства price,
//  * который будет работать с свойством цены автомобиля.
//  */

// /*
//  * Добавь код для того чтобы завести автомобиль
//  * Записывает в свойство isOn значение true
//  */

// /*
//  * Добавь код для того чтобы заглушить автомобиль
//  * Записывает в свойство isOn значение false,
//  * и сбрасывает текущую скорость в 0
//  */

// /*
//  * Добавялет к свойству speed полученное значение,
//  * при условии что результирующая скорость
//  * не больше чем значение свойства maxSpeed
//  */

// /*
//  * Отнимает от свойства speed полученное значение,
//  * при условии что результирующая скорость не меньше нуля
//  */

// /*
//  * Добавляет в поле distance киллометраж (hours * speed),
//  * но только в том случае если машина заведена!
//  */

const mustang = new Car(200, 2000);

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
