/*jshint esversion: 6 */

class Rocket {
  constructor(rocketName, serialNum, propellersNum, rocketMaxPower) {
    this.rocketName = rocketName;
    this.serialNum = serialNum;
    this.propellersNum = propellersNum;
    this.rocketMaxPower = rocketMaxPower;
  }
}


/*** prova ***/

class Foo {
  constructor (...args) {
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
  }

  [Symbol.iterator]() {
    return Object
      .keys(this)
      .map(key => this[key])
      .values();
  }
}

const foo = new Foo('a', 'b', 'c');

for (let item of foo) {
  console.log(item); // prints out a, b, c
}

console.log(foo[1]); // prints out b
