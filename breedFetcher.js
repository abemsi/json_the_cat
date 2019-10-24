const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        callback(null, data[0].description);
      } else {
        callback("Requested breed not found.", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };