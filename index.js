// import subb from "./math";
// console.log("server");

//module
//types of module
//local module
//1. commonn js module(we use require for import in common js and also this is defualt module)
//2. ES module(introduce in 2015, and in ex module, we use import export keyword here)


//common js
//require
// const add = require("./math.js");//we can use math only also
// const subb = require("./math.js");
//it say we need to execute math.js before execute function that isd below.
// 
//this will both subtracts.so this is only helps if there is soingle function so this method is 

// const math = require("./math.js"); //we can use math only also


// console.log(math.add(18, 9));
// console.log(math.subb(12, 7));
//console.log(math.multi(10,20));


//ES module
//defult import
import add from "./math.js";
//named import
import {
    subb,
    multi
} from "./math.js";
// import { multi } from "./math.js";
// import add,{subb,multi} from "./math.js";//all in one

console.log(add(10, 7));
console.log(subb(20, 10));
console.log(multi(10, 5));


//npm => node Package manager
//npm init 
//npm init -y(if we need to to click right in all )