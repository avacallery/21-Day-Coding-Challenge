//Challenge #4 - This Is How You Remind me (To Register To Vote)

// Instructions
// Complete the function registerToVote(name, unregisteredVoters) that takes in the name of a newly registered voter and an array of names of those who have not yet registered to vote. Your function must return an array, with the newly registered voter's name removed.


const registerToVote = (name, unregisteredVoters) => {
    for (var i = 0; i < unregisteredVoters.length; i++) {
      if (unregisteredVoters[i] === name) {
        unregisteredVoters.splice(i, 1);
      }
    }
    console.log(unregisteredVoters);
    return unregisteredVoters;  
  };
  
// Passed: The registerToVote function should return an array.

// Passed: The registerToVote function should remove an element from the array.