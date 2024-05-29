// const http = require('http')

const Mydata = {
    data2  : "16",
}

// const options = {
//     hostname : 'localhost',
//     port : 8080,
//     path : '/api1.json',
//     method : 'POST',
// };



// const req = http.request(options, res => {
//     console.log(`status code : ${res.statusCode}`)
//     res.on('data', d => {
//         process.stdout.write(d);
//     });
// });

// req.on('error', error => {
//     console.error(error)
// });

// req.write(JSON.stringify(Mydata));



// req.end();


const axios = require('axios');

axios.post('http://localhost:8080/api1.json', Mydata)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });