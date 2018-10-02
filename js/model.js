/*jshint esversion: 6 */

class Rocket {
  constructor(serialNum, propellersNum, rocketMaxPower, rocketActualPower, rocketSpeed, rocketInitialPower) {
    this.serialNum = serialNum;
    this.propellersNum = propellersNum;
    this.rocketMaxPower = rocketMaxPower;
    this.rocketActualPower = rocketActualPower;
    this.rocketSpeed = rocketSpeed;
    this.rocketInitialPower = rocketInitialPower;
  }
}






/*
class Rocket_prova {
  constructor(serialNum, propellersNum, rocketMaxPower, rocketActualPower, rocketSpeed, powerUps) {
    this.serialNum = serialNum;
    this.propellersNum = propellersNum;
    this.rocketMaxPower = rocketMaxPower;
    this.rocketActualPower = rocketActualPower;
    this.rocketSpeed = rocketSpeed;
    this.powerUps = powerUps;
  }

//get
  get finalSpeed() {
    return this.desiredSpeed();
  }

//metode
  desiredSpeed() {
    return this.powerUps * 10;
  }
}
*/
