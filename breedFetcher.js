const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";

request(url, (error, response, body) => {
  let breedName = process.argv.slice(2).toString();
  if (error) {
    console.log('error:', error);
  }
  // console.log(typeof body);
  let data = JSON.parse(body);
  // console.log(typeof data);
  if (!breedName) {
    throw new Error('breedName is not define');
  } else {
    let desc = data[0].description;
    console.log(desc.replace(/Siberians/g, breedName));
  }
});
