// const http = require('http')

// const options = {
//     hostname : 'localhost',
//     port : 8080,
//     path : '/api1.json',
//     metod : 'GET'
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

// req.end();

const axios = require('axios').default

function getHeaders(){
    return {
        "Content-Type" : "application/json",
        accept : "application/json"
    }
}



let instance = axios.create({
    baseURL : 'http://localhost:8080/',
    // timeout : 1000,
    headers : getHeaders(),
    responseType : "json",
    responseEncoding : "utf8",
    validateStatus : (status) => {
        return status >= 200 && status < 300;
    }
})

instance.interceptors.request.use((config) => {

    return config;
}, function(error){
    return Promise.reject(error);
});


instance.interceptors.response.use((res) => {
    if(res && !res.data.success){
        console.log(res.data);
    }
    return res;
}, function(error){
    return Promise.reject(error)
});


module.exports.instance = instance;

// export default instance

// axios.get('http://localhost:8080/api1.json').then(response => {
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });
