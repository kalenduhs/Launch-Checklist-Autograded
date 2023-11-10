// Write your JavaScript code here!

//const formSubmission = require('./scriptHelper.js');

window.addEventListener("load", function() {
    console.log("testing");
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let target = pickPlanet(listedPlanets);
        const doc = document.getElementById("missionTarget");
        console.log(target);
        addDestinationInfo(doc, target.name, target.diameter, target.star, target.distance, target.moons, target.image);
    });
    
    // Code for the Form

    

    const form = document.getElementById("launchForm");
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const pilot = form.childNodes[1][0].value;
        const coPilot = form.childNodes[1][1].value;
        const fuelLevel = form.childNodes[1][2].value;
        const cargoLevel = form.childNodes[1][3].value;
        const list = document.getElementById("faultyItems");
        formSubmission(form, list, pilot, coPilot, fuelLevel, cargoLevel);
    });

 });