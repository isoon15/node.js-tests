#!/usr/bin/env node

// console.clear()

// const cowsay = require('cowsay')
// const minimist = require('minimist')

// console.log(cowsay.say({
//     'text' : "hello world!",
//     'e' : "oO",
//     'T' : 'U'
// }))


// console.log(cowsay.think({
//     'text' : "hello world!",
//     'e' : "oO",
//     'T' : 'U'
// }))

// console.log("hello world! from run.js")

// const {
//     print
// } = require("F:/code/NodeJs/pack/packk")
// print("salam")


// const hello = require('minimist')(process.argv.slice(2))
// console.log(hello)

// process.argv.forEach((val,index) => {
//     console.log(val)
// });

// const readline = require('readline')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// rl.question('tell us about your feedback: ', (answer) => {
//      console.log(`thank you for your feedback: ${answer}`)
//     //  rl.close()
//     })
// const as = readline.clearScreenDown
// const full = [];
// rl.on('line', input => {
//     if(input.length < 3){
//         console.log('please enter a vaild name')
//         return
//     }
//     if(input === 'stop'){
//         console.log('bye bye!!')
//         rl.close()
//         return
//     }
//     full.push(input)
//     console.log(`your students : ${full}`)

// });

// rl.on('SIGINT', () => {
//     console.log('bye bye from ctrl c')
//     rl.close()
// });

// const inq = require("inquirer")

// var questions = [
//     {
//         'type': 'input',
//         'name': 'name',
//         'message': 'please enter your name'
//     }
//     // {
//     //     type : 'input',
//     //     name : 'barad',
//     //     message : 'barad cheghadt ahmaghe'
//     // }
// ]
// var questions1 = [
//     {
//         'type': 'input',
//         'name': 'fine',
//         'message': 'how are you?'
//     }
// ]
// function ques(func){
    // inq.prompt(questions).then(answer => {
    //     console.log('hello %s ?', answer['name'])
    //     func()
    // })
    
// }

// function ques2(){
    // inq.prompt(questions1).then(answer => {
    //     console.log('what can i do for you?')
    // })
// }

// ques(ques2)



// inq.prompt(questions).then(answer => {
//     console.log('hello %s ', answer['name'])
// }).then( e => {
//     inq.prompt(questions1).then(answer => {
//         console.log('sorry i need to go')
//     })
// })
// let print = console.log

// console.log = function() {
//     print('Oops we are in produst mode')
// }
// console.log('hello world')
// console.log("why")
// print('hehe I have a cheat 0_0')

// console.error("here is the error")

// console.log = print

// let meow = () => console.log('\e[1;35mHello I want to know how much time does it cost')
// const masaj = () => {
//     console.time('meow')
//     meow()
//     console.timeEnd('meow')
// }
// masaj()

// const chalk = require('chalk')
// let print = console.log;
// print(chalk.red.italic.bgGreenBright("hello world"))

// var ProgressBar = require('progress');
 
// var bar = new ProgressBar(':bar', { total: 20 });
// var timer = setInterval(() => {
//   bar.tick();
//   if (bar.complete) {
//     console.log('\ncomplete\n');
//     clearInterval(timer);
//   }
// }, 100);

// const http = require('http')

// const port = 8080;

// let server = http.createServer((req,res) => {
//     console.log('reseponse on port 8080')
//     res.writeHead(200 , {'C.ontect-Type': 'text/html'});
//     res.end(' <h1>salam esm man sepehre </h1>')
// }
// )
// server.listen(port, () => console.log(`server running at port ${port}`))

// const fs = require('fs');
// const http = require('http');



// http.createServer(function (req, res) {
//     var mainUrl = req.url.split('?');
//     console.log('Listening on port: 8080');
//     if(mainUrl[1]){
//         console.log(` now we have data!! heres your data : ${mainUrl[1]}`)
//     }
//     var mimeTypes = {
//         "html": "text/html",
//         "jpeg": "image/jpeg",
//         "jpg": "image/jpeg",
//         "png": "image/png",
//         "svg": "image/svg+xml",
//         "json": "application/json",
//         "js": "text/javascript",
//         "css": "text/css"
//     };

//     let postdata = '';
    
//     req.on('data', datapart => {
//         console.log('we recive data')
//         console.log(datapart)
//         postdata += datapart;
//     })
    
//     req.on('data', () => {
//         console.log(JSON.parse(postdata))
//     })

//     fs.readFile('F:/code/NodeJs/first_folder/html/page' + mainUrl[0], function (err, data) {
//         if(err){
//             res.writeHead(404);
//             res.end(JSON.stringify(err))
//             return;
//         }
//         var mimeType = mimeTypes[mainUrl[0].split('.').pop()];

//         if (!mimeType) {
//             mimeType = 'text/plain'
//         }

//         res.writeHead(200, { "Content-Type": mimeType });
//         res.write(data, "binary");
//         res.end();
//     });
// }).listen(8080);

const fs = require("fs")

class fib{
    constructor(){
        this.prev = 0;
        this.current = 1;
    }
    next(){
        let current = this.current;
        let prev = this.prev;
        this.prev = this.current
        this.current = current + prev;
        return this.current
    }
}

const writestream = fs.createWriteStream("fibonachi.txt")

writestream.on("ready", () => {
    let f = new fib()

    for(let i = 0; i <= 1000; i++){
        let n = f.next();
        writestream.write(String(n) + '\n', err =>{
            if(err){
                console.log(`there is an error : ${err}`)
                return
            }
        })
    }
    writestream.end()
})