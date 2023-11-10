// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else if (!isNaN(testInput)) {
        return 'Is a Number';
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //console.log("this called");
    if (validateInput(pilot) === 'Empty') {
        alert('Please enter all fields');
    } else if (validateInput(pilot) === 'Is a Number') {
        alert('Please enter a name for Pilot Name');
    }
    if (validateInput(copilot) === 'Empty') {
        alert('Please enter all fields');
    } else if (validateInput(copilot) === 'Is a Number') {
        alert('Please enter a name for Co-Pilot Name');
    }
    if (validateInput(fuelLevel) === 'Empty') {
        alert('Please enter all fields');
    } else if (validateInput(fuelLevel) === 'Not a Number') {
        alert('Please enter a number for Fuel Level');
    }
    if (validateInput(cargoLevel) === 'Empty') {
        alert('Please enter all fields');
    } else if (validateInput(cargoLevel) === 'Not a Number') {
        alert('Please enter a number for Cargo Mass');
    }

    /* if (validateInput(pilot) || validateInput(copilot) || validateInput(fuelLevel) || validateInput(cargoLevel) === 'Empty') {
        alert('Please enter all fields');
    } else if (validateInput(pilot) || validateInput(copilot) === 'Is a Number') {
        alert('Please enter valid input');
    } else if (validateInput(fuelLevel) || validateInput(cargoLevel) === 'Not a Number') {
        alert('Please enter valid input');
    } */

    //console.log(list);
    //list.style.visibility = "visible";
    /* list.previousElementSibling.innerHTML = "Shuttle not ready for launch";
    list.previousElementSibling.style.color = "red";  */

    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');

    if (fuelLevel >= 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle is Ready for Launch";
        list.previousElementSibling.style.color = 'green';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;    
    
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle Not Ready for Launch";
        list.previousElementSibling.style.color = "red";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`; 

    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle Not Ready for Launch";
        list.previousElementSibling.style.color = "red";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`; 

    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle Not Ready for Launch";
        list.previousElementSibling.style.color = "red";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`; 
    }

    //console.log('hello');
    //console.log(myFetch());
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;