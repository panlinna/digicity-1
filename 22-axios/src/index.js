import axios from 'axios';


// Make a request for a user with a given ID
axios.get('https://api.github.com/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
