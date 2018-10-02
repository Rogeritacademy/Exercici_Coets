/*jshint esversion: 6 */

/*
FASE 3:
Tots els propulsors tindran una potència actual que començarà amb 0.

El coet tindrà dos mètodes, accelerar o frenar i augmentarà o es reduirà de 10 en 10 la potencia del propulsor.
El coet tindrà una velocitat actual que és la suma de totes les potències dels seus propulsors.

Modifiquem en el main anterior:
- Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. El primer coet tindrà tres propulsors (potència: 10,30,80)
i el segon sis propulsors (potència: 30,40,50,50,30,10).
- Mostrar a pantalla el codi dels coets, el número de propulsors que té i la potència màxima de cada propulsor.
- Mostrar a pantalla la velocitat actual dels coets
- Accelerar amb els coets tres cops
- Mostrar a pantalla la velocitat actual
- Frenar cinc cops amb el primer coet (“32WESSDS”) i accelerar set amb el segon coet.
- Mostrar a pantalla la velocitat actual
- Accelerar 15 cops amb els dos coets.
- Mostrar a pantalla la velocitat actual
*/

var rocket1Id = ["Rocket 1", "32WESSDS"];
var rocket2Id = ["Rocket 2", "LDSFJA32"];

var rocket1InitialPower = [0,0,0];
var rocket2InitialPower = [0,0,0,0,0,0];

var rocket1ActualPower = rocket1InitialPower;
var rocket2ActualPower = rocket2InitialPower;

var rocket1Speed = 0;
var rocket2Speed = 0;

const rocket1MaxPower = [10,30,80];
const rocket2MaxPower = [30,40,50,50,30,10];

var rocket1PropellersNum = rocket1MaxPower.length;
var rocket2PropellersNum = rocket2MaxPower.length;

var rocket1 = new Rocket(...rocket1Id, rocket1PropellersNum, rocket1MaxPower, rocket1ActualPower, rocket1Speed);
var rocket2 = new Rocket(...rocket2Id, rocket2PropellersNum, rocket2MaxPower, rocket2ActualPower, rocket2Speed);

document.getElementById("accel").addEventListener("click", function(){
    initAccel(3,rocket1);
    initAccel(3,rocket2);
    updateData(rocket1);
    updateData(rocket2);
});

function initAccel(powerUps,rocket) {
  var actualPower = rocket.rocketActualPower;
  console.log("accel: ", powerUps);
  accelerate(powerUps,actualPower,rocket1MaxPower);
}

function accelerate(powerUps,arr1,arr2) {
var actualSpeed = 0;
var desiredSpeed = powerUps*10;
  for(var j = 0; j <= powerUps; j++) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] < arr2[i]) {
        if (actualSpeed < desiredSpeed) {
          arr1[i] = arr1[i]+10;
          console.log("propellers: ", arr1);
          actualSpeed = actualSpeed+10;
        }
      }
    }
  }
}



function showData(rocket) {
  var newDiv = document.createElement("div");
  newDiv.id = rocket.rocketName;
  newDiv.innerHTML = "<p>" + rocket.rocketName + "<br>Serial: " + rocket.serialNum + "<br>Propellers: " + rocket.propellersNum + "<br>Propellers MaxPower: " + rocket.rocketMaxPower + "<br>Actual Propeller Power: <span class='ActualPropPow'>" + rocket.rocketActualPower + "</span><br>Speed: <span class='ActualSpeed'>" + rocket.rocketSpeed + "</span></p>";
  document.getElementById("main").appendChild(newDiv);
}

function updateData(rocket) {
  var changePropellerValues = document.getElementById(rocket.rocketName).getElementsByClassName("ActualPropPow")[0];
  //var changeSpeedValues = document.getElementsByClassName("ActualSpeed")[0];
  changePropellerValues.innerHTML = rocket.rocketActualPower;
  //changeSpeedValues.innerHTML = rocket.rocketSpeed;
}

showData(rocket1);
showData(rocket2);
