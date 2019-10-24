const { fetchBreedDescription } = require('./breedFetcher');

let breed = process.argv.slice(2)[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});