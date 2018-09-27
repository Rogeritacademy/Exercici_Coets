/*jshint esversion: 6 */

class Rocket {
  constructor(rocketName, serialNum, propellersNum) {
    this.rocketName = rocketName;
    this.serialNum = serialNum;
    this.propellersNum = propellersNum;
  }

  showData() {
    var newDiv = document.createElement("div");
    newDiv.id = this.rocketName;
    newDiv.innerHTML = this.rocketName + '<br>' + this.serialNum + '<br>' + this.propellersNum;
    document.getElementById('main').appendChild(newDiv);
  }
}
