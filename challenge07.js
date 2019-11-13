const interviews = 
["smart city",
"rebuild the lighthouse",
"arts funding",
"transportation",
"arts funding",
"rebuild the lighthouse",
"sports funding",
"tax cuts",
"smart city",
"arts funding",
"smart city"];

const termTopics = (interviews) => {
    let keyPhrases = [0, 0, 0]; 
    for (var i = 0; i < interviews.length; i++) {
      if (interviews[i] == "smart city") {
        keyPhrases[0]++;
      } else if (interviews[i] == "arts funding") {
        keyPhrases[1]++;
      } else if (interviews[i] == "transportation") {
        keyPhrases[2]++;
      } 
    }
    return keyPhrases; 
  };

  console.log(termTopics(interviews));

  //output: [3, 3, 1];

// Passed: The termTopics function should return an array.

// Passed: The termTopics function should return an array of numbers.

// Passed: The termTopics function should return the correct mention count for each topic.