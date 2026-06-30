// ============================================================
//  ES MODULE — index.js
//  Day 7 — Node.js — MERN Stack Learning
// ============================================================

// To use ES Modules in Node.js, you must either:
// 1. Add "type": "module" in package.json   <- recommended
// 2. Use .mjs file extension instead of .js


// ============================================================
//  IMPORTING — ES Module way
// ============================================================

// DEFAULT IMPORT — name can be ANYTHING you want (no curly braces)
import add from "./math.js";

// NAMED IMPORT — name MUST match exactly what was exported (curly braces)
import { subb, multi } from "./math.js";

// ALL TOGETHER in one line (default + named combined)
// import add, { subb, multi } from "./math.js";

console.log(add(10, 7));   // 17
console.log(subb(20, 10)); // 10
console.log(multi(10, 5)); // 50


// ============================================================
//  DEFAULT vs NAMED IMPORT — key differences
// ============================================================

//  Default Export             | Named Export
//  ----------------------------|----------------------------
//  ONE per file                | MANY per file
//  import withAnyName from ".."| import { exactName } from ".."
//  No curly braces             | Curly braces required
//  export default add          | export { subb, multi }


// ============================================================
//  RENAMING a named import (if name conflicts)
// ============================================================

// import { add as addNumbers } from "./math.js";
// console.log(addNumbers(5, 5)); // 10


// ============================================================
//  HOW TO RUN THIS FILE
// ============================================================

// Add to package.json:  "type": "module"
// Then run: node index.js


// ============================================================
//  COMMONJS vs ES MODULE — full comparison
// ============================================================

//  Feature          | CommonJS              | ES Module
//  -----------------|------------------------|------------------------
//  Import keyword   | require()              | import
//  Export keyword   | module.exports         | export / export default
//  Loading          | Synchronous            | Asynchronous (can be)
//  Default in Node  | Yes (no config needed) | Needs "type":"module"
//  Used in          | Older Node.js, backend | React, modern frontend/backend
//  Multiple default | N/A                    | Only ONE per file
//  Tree-shaking     | No                     | Yes (removes unused code)


// ============================================================
//  INTERVIEW QUESTIONS
// ============================================================

// Q1: Difference between CommonJS and ES Modules?
//     -> CommonJS: require()/module.exports, synchronous, default in Node
//     -> ES Module: import/export, supports tree-shaking, needs config in Node

// Q2: Can you have multiple default exports in one file?
//     -> No — only ONE default export per file
//     -> But UNLIMITED named exports are allowed

// Q3: Why do curly braces matter in imports?
//     -> Named imports need curly braces and must match the exported name exactly
//     -> Default imports have no curly braces and can be named anything

// Q4: How do you enable ES Modules in Node.js?
//     -> Add "type": "module" to package.json
//     -> OR use .mjs file extension

// Q5: What is tree-shaking?
//     -> Removing unused exported code during bundling (webpack/vite)
//     -> Only possible with ES Modules, not CommonJS