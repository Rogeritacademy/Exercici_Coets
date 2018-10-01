/*jshint esversion: 6 */

class Rocket {
  constructor(rocketName, serialNum, propellersNum, ...rocketMaxPower) {
    this.rocketName = rocketName;
    this.serialNum = serialNum;
    this.propellersNum = propellersNum;
    this.rocketMaxPower = rocketMaxPower;
  }
}
