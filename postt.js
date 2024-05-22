const http = require('http')

const Mydata = {
    data2  : "15",
}

const options = {
    hostname : 'localhost',
    port : 8080,
    path : '/api1.json',
    metod : 'POST',
};



const req = http.request(options, res => {
    console.log(`status code : ${res.statusCode}`)
    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error)
});

req.write(JSON.stringify(Mydata));



req.end();
