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
// console.log(hello['se[pehr'])

// process.argv.forEach((val,index) => {
//     console.log(val)
// });