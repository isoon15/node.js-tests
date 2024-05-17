#!/usr/bin/env node


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

const {
    print
} = require("F:/code/NodeJs/pack/packk")
print("salam")


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

const inq = require("inquirer")

var questions = [
    {
        'type': 'input',
        'name': 'name',
        'message': 'please enter your name'
    }
    // {
    //     type : 'input',
    //     name : 'barad',
    //     message : 'barad cheghadt ahmaghe'
    // }
]
var questions1 = [
    {
        'type': 'input',
        'name': 'fine',
        'message': 'how are you?'
    }
]
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



inq.prompt(questions).then(answer => {
    console.log('hello %s ', answer['name'])
}).then( e => {
    inq.prompt(questions1).then(answer => {
        console.log('sorry i need to go')
    })
})