//Challenge #1 - Door to Door

// Instructions
// Given an array of volunteer names and an array of neighbourhood names, complete the doorToDoor function so that it returns the number of neighbourhoods each volunteer should visit if the work of going door to door is split evenly amongst them.


const volunteers = ["Sally", "Jake", "Brian"];

const neighbourhoods = ["Central Valley", "Big Mountain", "Little Bridge"];

const doorToDoor = (volunteers, neighbourhoods) => {

    var totalVolunteers = neighbourhoods.length / volunteers.length;

    return totalVolunteers;


};


//Passed: The doorToDoor function should return the number of neighbourhoods divided by the number of volunteers.