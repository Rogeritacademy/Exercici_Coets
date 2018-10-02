/*jshint esversion: 6 */

class Rocket {
  constructor(serialNum, propellersNum, rocketMaxPower, rocketActualPower, rocketSpeed) {
    this.serialNum = serialNum;
    this.propellersNum = propellersNum;
    this.rocketMaxPower = rocketMaxPower;
    this.rocketActualPower = rocketActualPower;
    this.rocketSpeed = rocketSpeed;
  }
}

class Rocketkk {
  constructor(rocketSpeed, serialNum, propellersNum, rocketMaxPower, rocketActualPower, powerUps) {
    this.serialNum = serialNum;
    this.propellersNum = propellersNum;
    this.rocketMaxPower = rocketMaxPower;
    this.rocketActualPower = rocketActualPower;
    this.rocketSpeed = rocketSpeed;
    this.powerUps = powerUps;
  }

  get finalSpeed() {
    return this.desiredSpeed();
  }

  desiredSpeed() {
    return this.powerUps * 10;
  }
}





class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
