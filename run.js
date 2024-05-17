#!/usr/bin/env node

console.clear()

const cowsay = require('cowsay')
const minimist = require('minimist')

console.log(cowsay.say({
    'text' : "hello world!",
    'e' : "oO",
    'T' : 'U'
}))


console.log(cowsay.think({
    'text' : "hello world!",
    'e' : "oO",
    'T' : 'U'
}))

console.log("hello world! from run.js")

// const {
//     print
// } = require("F:/code/NodeJs/pack/packk")
// print("salam")


const hello = require('minimist')(process.argv.slice(2))
console.log(hello)

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

const chalk = require('chalk')
let print = console.log;
print(chalk.red.italic.bgGreenBright("hello world"))

var ProgressBar = require('progress');
 
var bar = new ProgressBar(':bar', { total: 50 });
var timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);