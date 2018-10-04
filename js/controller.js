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

const rocket1Id = "32WESSDS";
const rocket2Id = "LDSFJA32";

const rocket1InitialPower = [0,0,0];
const rocket2InitialPower = [0,0,0,0,0,0];

var rocket1ActualPower = [0,0,0];
var rocket2ActualPower = [0,0,0,0,0,0];

var rocket1Speed = 0;
var rocket2Speed = 0;

const rocket1MaxPower = [10,30,80];
const rocket2MaxPower = [30,40,50,50,30,10];

const rocket1PropellersNum = rocket1MaxPower.length;
const rocket2PropellersNum = rocket2MaxPower.length;

var rocket1 = new Rocket(rocket1Id, rocket1PropellersNum, rocket1MaxPower, rocket1ActualPower, rocket1Speed, rocket1InitialPower);
var rocket2 = new Rocket(rocket2Id, rocket2PropellersNum, rocket2MaxPower, rocket2ActualPower, rocket2Speed, rocket2InitialPower);


document.getElementById("accel").addEventListener("click", function(){
    document.getElementById("accel").setAttribute("class","amaga");
    document.getElementById("accel2").setAttribute("class","mostra");
    initAccel(rocket1,3);
    initAccel(rocket2,3);
    updateData(rocket1);
    updateData(rocket2);
});

document.getElementById("accel2").addEventListener("click", function(){
    document.getElementById("accel2").setAttribute("class","amaga");
    document.getElementById("accel3").setAttribute("class","mostra");
    initBrakes(rocket1,5);
    initAccel(rocket2,7);
    updateData(rocket1);
    updateData(rocket2);
});

document.getElementById("accel3").addEventListener("click", function(){
    document.getElementById("accel3").setAttribute("class","amaga");
    document.getElementById("accel4").setAttribute("class","mostra");
    initAccel(rocket1,15);
    initAccel(rocket2,15);
    updateData(rocket1);
    updateData(rocket2);
});



function initAccel(rocket,powerUps) {
  var actualPower = rocket.rocketActualPower;
  var maxPower = rocket.rocketMaxPower;
  var actualSpeed = rocket.rocketSpeed;
  accelerate(rocket,powerUps,actualPower,maxPower,actualSpeed);
}

function initBrakes(rocket,powerDowns) {
  var actualPower = rocket.rocketActualPower;
  var maxPower = rocket.rocketMaxPower;
  var actualSpeed = rocket.rocketSpeed;
  brakes(rocket,powerDowns,actualPower,maxPower,actualSpeed);
}


function accelerate(rocket,powerUps,actualPower,maxPower,actualSpeed) {
var desiredSpeed = actualSpeed + (powerUps*10);
  for(var j = 0; j <= powerUps; j++) {
    for (var i = 0; i < actualPower.length; i++) {
      if (actualPower[i] < maxPower[i]) {
        if (actualSpeed < desiredSpeed) {
          actualPower[i] = actualPower[i] + 10;
          actualSpeed = actualSpeed + 10;
        }
      }
    }
  }
  rocket.rocketSpeed = actualSpeed;
}

function brakes(rocket,powerDowns,actualPower,maxPower,actualSpeed) {
var desiredSpeed = actualSpeed - (powerDowns*10);
  for(var j = 0; j <= powerDowns; j++) {
    for (var i = 0; i < actualPower.length; i++) {
      if (actualPower[i] > rocket.rocketInitialPower[i]) {
        if (actualSpeed > desiredSpeed) {
          actualPower[i] = actualPower[i] - 10;
          actualSpeed = actualSpeed - 10;
        }
      }
    }
  }
  rocket.rocketSpeed = actualSpeed;
}


function showData(rocket) {
  var newDiv = document.createElement("div");
  newDiv.id = rocket.serialNum;
  newDiv.innerHTML = "<p>Serial: " + rocket.serialNum + "<br>Propellers: " + rocket.propellersNum + "<br>Propellers MaxPower: " + rocket.rocketMaxPower + "<br>Actual Propeller Power: <span class='ActualPropPow'>" + rocket.rocketActualPower + "</span><br>Speed: <span class='ActualSpeed'>" + rocket.rocketSpeed + "</span></p>";
  document.getElementById("main").appendChild(newDiv);
}

function updateData(rocket) {
  var changePropellerValues = document.getElementById(rocket.serialNum).getElementsByClassName("ActualPropPow")[0];
  var changeSpeedValue = document.getElementById(rocket.serialNum).getElementsByClassName("ActualSpeed")[0];
  changePropellerValues.innerHTML = rocket.rocketActualPower;
  changeSpeedValue.innerHTML = rocket.rocketSpeed;
}

showData(rocket1);
showData(rocket2);
