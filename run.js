#!/usr/bin/env node


const cowsay = require('cowsay')

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