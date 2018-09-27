/*jshint esversion: 6 */

class Rocket {
  constructor(serialNumber, propellers) {
    this.serialNumber = serialNumber;
    this.propellers = propellers;
  }

  showData() {
    //alert(this.serialNumber);
    //alert(this.propellers);
    //Rocket1_container.innerHTML = this.serialNumber;
    document.querySelector("#Rocket-1").innerHTML = this.serialNumber;
  }
}

const Rocket1_container = document.querySelector("#Rocket-1");
const Rocket2_container = document.querySelector("#Rocket-2");
const originText = document.querySelector("#origin-text p").innerHTML;

let rocket1 = new Rocket("32WESSDS", "3");
let rocket2 = new Rocket("LDSFJA32", "6");

rocket1.showData();
rocket2.showData();
