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
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else if (!isNaN(testInput)) {
        return 'Is a Number';
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("this called");
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

    console.log(list);
    //list.style.visibility = "visible";
    /* list.previousElementSibling.innerHTML = "Shuttle not ready for launch";
    list.previousElementSibling.style.color = "red";  */

    if (fuelLevel >= 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle is Ready for Launch";
        list.previousElementSibling.style.color = 'green';
        list.innerHTML = `<ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    </ol>`
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle Not Ready for Launch";
        list.previousElementSibling.style.color = "red";
        list.innerHTML = `<ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
    </ol>`
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle Not Ready for Launch";
        list.previousElementSibling.style.color = "red";
        list.innerHTML = `<ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    </ol>`
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible";
        list.previousElementSibling.innerHTML = "Shuttle Not Ready for Launch";
        list.previousElementSibling.style.color = "red";
        list.innerHTML = `<ol>
        <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
    </ol>`
    }

    //console.log('hello');
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