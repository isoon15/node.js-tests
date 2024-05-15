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

rl.question('tell us about your feedback: ', (answer) => console.log(`thank you for your feedback: ${answer}`))