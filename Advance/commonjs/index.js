// ============================================================
//  COMMONJS MODULE — index.js
//  Day 7 — Node.js — MERN Stack Learning
// ============================================================

// CommonJS = the ORIGINAL Node.js module system
// Uses require() to import, module.exports to export
// This is the DEFAULT system in plain Node.js (.js files, no config)


// ============================================================
//  IMPORTING with require()
// ============================================================

// Since math.js exports an OBJECT { add, subb, multi },
// we capture the whole object here
const math = require("./math.js");

console.log(math.add(18, 9));   // 27
console.log(math.subb(12, 7));  // 5
console.log(math.multi(10, 5)); // 50


// ============================================================
//  DESTRUCTURING the require (cleaner, more common in practice)
// ============================================================

const { add, subb, multi } = require("./math.js");

console.log(add(10, 7));   // 17
console.log(subb(20, 10)); // 10
console.log(multi(10, 5)); // 50


// ============================================================
//  HOW require() WORKS — important interview concept
// ============================================================

// 1. Node reads math.js file
// 2. Executes ENTIRE math.js file first (top to bottom)
// 3. Returns whatever module.exports was set to
// 4. require() caches the result — requiring same file again uses cached version
//    (file only runs ONCE even if required multiple times in different files)


// ============================================================
//  RUNNING THIS FILE
// ============================================================

// node index.js
// CommonJS works in Node by DEFAULT — no extra config needed


// ============================================================
//  INTERVIEW QUESTIONS
// ============================================================
    
// Q1: What is CommonJS?
//     -> The original Node.js module system using require()/module.exports
//     -> Synchronous — loads modules one by one, blocking

// Q2: Difference between module.exports and exports?
//     -> module.exports is the actual object that gets exported
//     -> exports is just a shortcut reference to module.exports
//     -> exports.x = y works, but exports = y BREAKS the reference (doesn't export anything)

// Q3: Does require() re-run the file every time?
//     -> No — Node caches required modules
//     -> Second require() of same file returns the cached export, doesn't re-execute