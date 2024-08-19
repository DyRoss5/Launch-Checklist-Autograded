// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } 
   if (isNaN(testInput)){
    return "Not a Number";
   } else {
    return "Is a Number";
   }

    }

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let cargoStatus = document.getElementById('cargoStatus');

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert("All fields are required");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid input. Please enter a number.")
    } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {
        alert("Invalid input. Please submit a name.")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    };

    if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
        
    } else if (fuelLevel < 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';

    } else if (cargoLevel > 10000) {
       list.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.style.color = 'red';

    } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatus.style.color = 'green';
    }

}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;