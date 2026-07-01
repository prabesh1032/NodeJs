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



//third party module
//we can use third party module in nodejs by using npm package manager.
//npm is a package manager for nodejs. it is used to install third party module in nodejs.
//npm => node Package manager
//npm init 
//npm init -y(if we need to to click right in all )
//npm run <script_name>.
//npm install <package_name>.//npm i <package_name>.
//npm uninstall <package_name>
//npm uninstall <package_name> @version
//npm audit fix// this will fix if any high severity vulnerability  occur.
//npm i//npm install  // it will install all ddependency package of project.


//json -> js object notation
// we use json in config file so we use in package.json
//if we use rest we use json in sending data to client and server to show response.
// eg of json
// {
//     "name": "nodejs",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC"
//   }
//in json we need to use double quotes for key and value. 
// we can't use single quote in json. and also we can't use function in json. 
// we can only use string, number, boolean, array, object, null in json.

let obj = {
    user: "admin",
    password: "admin",
    age: 30,
};
//converting this object to json
let jsonData = JSON.stringify(obj); //stringify is used to convert object to json
console.log(jsonData); //{"user":"admin","password":"admin","age":30}
typeof jsonData; //string//type of json is string
const obj2 = JSON.parse(jsonData); //parse is used to convert json to object
console.log(obj2); //{ user: 'admin', password: 'admin', age: 30 }

//core module in nodejs
//core module is the module which is already present in nodejs. we don't need to install it. we can use it directly.
//eg of core module
//path module, fs moduloe, http module, os module,etc....
//eg:
import os from "os";
console.log(os.cpus()); //it will give the information about cpu of system  
console.log(os.cpus().length); //lengh of cpu core
console.log(os.arch()); //it will give the architecture of system
let freeMemory = os.freemem(); //it will give the free memory of system
//converting free memory into GB
freeMemory = freeMemory / (1024 * 1024 * 1024);
console.log(freeMemory);

//path module
import path from "path";
const filepath = path.join("server", "uploads", "images");
console.log(filepath); //server\uploads\images

const mathPath = path.resolve("./math.js");
console.log(mathPath); //this will give the absolute path of math.js file
//C:\Users\ASUS\OneDrive\Desktop\Node-Js\Basic\math.js

console.log(path.relative(mathPath, path.resolve("./index.js"))); //this will give the relative path of index.js file from math.js file

console.log(path.extname(mathPath)); //.js////this will give the extension of math.js file
console.log(path.dirname(mathPath)); //this will give the directory name of math.js file
//C:\Users\ASUS\OneDrive\Desktop\Node-Js\Basic

//fs module(file system module)
import fs from "fs";
//fs module is used to read and write files in nodejs. 
//asynchronous way to read file
fs.readFile("./math.js", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
//synchronous way to read file
console.log("synchronous way to read file"); //first this will print then data of file will print because this is synchronous way to read file.
const data = fs.readFileSync("./math.js", "utf-8");
console.log(data);
//todo : write, append, copy, move,delete, mkdir
//write
fs.writeFile("./output.js", "console.log('Hello, World!');", "utf-8", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});
//append
fs.appendFile("./output.txt", "Second line added!\n", "utf-8", (err) => {
    if (err) return console.log("Append error:", err.message);
    console.log("Content appended successfully");
});
//delete
// ---- DELETE FILE ----
// fs.unlink("./output.txt", (err) => {
//     if (err) return console.log("Delete error:", err.message);
//     console.log("File deleted");
// });

// ---- CREATE FOLDER ----
const filepaths = path.join("server", "uploads", "images");
fs.mkdir(filepaths, {
    recursive: true
}, (err) => { //recursive helps to make nested folder.
    if (err) return console.log("Mkdir error:", err.message);
    console.log("Folder created");
});

// fs.copyFile("./index.js", "./http.js", (err) => {
//     if (err) return console.log("Copy error:", err.message);
//     console.log("File copied successfully");
// });