const request = require('request');

let breed = process.argv.slice(2)[0];
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length !== 0) {
      console.log(data[0].description);
    } else {
      console.log("Requested breed not found.");
    }
  }
});