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

const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('tell us about your feedback: ', (answer) => {
     console.log(`thank you for your feedback: ${answer}`)
    //  rl.close()
    })
const as = readline.clearScreenDown
const full = [];
rl.on('line', input => {
    if(input.length < 3){
        console.log('please enter a vaild name')
        return
    }
    if(input === 'stop'){
        console.log('bye bye!!')
        rl.close()
        return
    }
    full.push(input)
    console.log(`your students : ${full}`)

});

rl.on('SIGINT', () => {
    console.log('bye bye from ctrl c')
    rl.close()
});

// const inq = require("inquirer")

// var question = [
//     {
//         type: 'input',
//         name: 'sepehr',
//         message: 'please enter your opinion about our website'
//     }
// ]
// inq.prompt(question).then(answer => {
//     console.log(`hello your answer is ${answer ['name']}`)
// })