// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed,callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if(!error) callback(data);
  });
};

function showBreedDetails(breed){
  console.log(`Return Value : ${breed}`);
}

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay',showBreedDetails);
