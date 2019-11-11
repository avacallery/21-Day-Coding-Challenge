//Challenge #3 - Securing The Vote 

//When a resident casts their vote, the system will be passed the name of the candidate they voted for and the current standings. It will then update the standings, adding the new vote to the count.

// To test the system, we'll need to complete the function castVote(name, votes) that takes in the name of a candidate and an array of tallied votes. The function should return an array with the updated standings.

// We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the number of votes for a particular candidate:

// The first item in the array votes[0] are the votes for Tim
// The second item in the arry votes[1] are the votes for Sally
// The third item in the array votes[2] are the votes for Beth
// For example in this array [0, 2, 1] there are 0 votes for Tim, 2 votes for Sally and 1 vote for Beth.

// Remember, the possible candidates are: Tim, Sally, and Beth (in that order)

const castVote = (name, votes) => {
    const totalVotes = votes;
     if (name == 'Tim') {
       totalVotes[0]++;
   } if (name == 'Sally') {
       totalVotes[1]++;
   } else if (name == 'Beth') {
       totalVotes[2]++; 
   }
   return totalVotes; 
}; 

// //Passed: The castVote function should return an array.

// Passed: The castVote function should return an array with 3 elements.

// Passed: The castVote function should increment the correct value.
   