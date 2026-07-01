// ============================================================
//  NODE.JS: NPM, JSON, CORE MODULES (os, path, fs)
//  Day 7 — Node.js — MERN Stack Learning
// ============================================================

import os   from "os";
import path from "path";
import fs   from "fs";

// ⚠️  Add "type": "module" in package.json to use ES module imports above
// OR change to: const os = require("os"), const path = require("path"), etc.


// ============================================================
//  1. NPM — Node Package Manager
// ============================================================

// npm init          -> create package.json (asks questions)
// npm init -y       -> create package.json instantly with defaults
// npm install <pkg> -> install a third-party package (shortcut: npm i <pkg>)
// npm uninstall <pkg> -> remove a package
// npm i             -> install ALL packages listed in package.json
// npm run <script>  -> run a custom script defined in package.json
// npm audit fix     -> auto-fix known security vulnerabilities


// ============================================================
//  2. JSON — JavaScript Object Notation
// ============================================================

// JSON = text format for storing and sharing data
// Rules:
// - Keys MUST use double quotes "key" (not single quotes)
// - Values can be: string, number, boolean, array, object, null
// - NO functions, NO comments, NO trailing commas
// - typeof JSON data = "string"

let user = {
    name: "Ram",
    age: 25,
    isAdmin: false,
};

// OBJECT → JSON string (for sending over network / saving to file)
let jsonString = JSON.stringify(user);
console.log(jsonString);         // {"name":"Ram","age":25,"isAdmin":false}
console.log(typeof jsonString);  // "string"

// JSON string → OBJECT (for reading received network data)
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj);          // { name: 'Ram', age: 25, isAdmin: false }
console.log(typeof parsedObj);   // "object"

// Pretty print JSON (useful for logging)
console.log(JSON.stringify(user, null, 2));
// {
//   "name": "Ram",
//   "age": 25,
//   "isAdmin": false
// }

// ⚠️  Real MERN use: Express sends/receives JSON for every API request/response
// res.json(data)     -> JSON.stringify + sends with application/json header
// req.body           -> already parsed from JSON to object by express.json() middleware


// ============================================================
//  3. OS MODULE — system information
// ============================================================

console.log("--- OS MODULE ---");
console.log(os.platform());        // "win32" / "linux" / "darwin"
console.log(os.arch());            // "x64" — processor architecture
console.log(os.cpus().length);     // number of CPU cores
console.log(os.hostname());        // computer name on network

let totalMemory = os.totalmem() / (1024 ** 3);
let freeMemory  = os.freemem()  / (1024 ** 3);
console.log(`Total RAM: ${totalMemory.toFixed(2)} GB`);
console.log(`Free RAM: ${freeMemory.toFixed(2)} GB`);

// ⚠️  1024 ** 3 = 1024 * 1024 * 1024 = converts bytes → GB
// Real use: server health monitoring, logging system specs


// ============================================================
//  4. PATH MODULE — handle file paths across OS
// ============================================================

console.log("--- PATH MODULE ---");

// path.join — builds a path correctly for the current OS
// Uses \ on Windows, / on Linux/Mac — handles it automatically
const uploadPath = path.join("server", "uploads", "images");
console.log(uploadPath); // "server/uploads/images" (Linux) or "server\uploads\images" (Windows)

// path.resolve — gives the ABSOLUTE path (starts from root)
const mathPath = path.resolve("./math.js");
console.log(mathPath);
// e.g. /home/prabesh/project/math.js

// path.extname — get file extension
console.log(path.extname("index.js"));    // ".js"
console.log(path.extname("photo.png"));   // ".png"

// path.dirname — get folder of a file path
console.log(path.dirname(mathPath));
// e.g. /home/prabesh/project

// path.basename — get just the filename from a path
console.log(path.basename(mathPath));         // "math.js"
console.log(path.basename(mathPath, ".js"));  // "math" (without extension)

// path.relative — get relative path between two absolute paths
const indexPath = path.resolve("./index.js");
console.log(path.relative(mathPath, indexPath));

// ⚠️  Always use path.join() when building paths — never string concatenate
// "uploads" + "/" + "file.png" breaks on Windows (needs \)
// path.join("uploads", "file.png") works on ALL operating systems


// ============================================================
//  5. FS MODULE — file system (read, write, append, delete)
// ============================================================

console.log("--- FS MODULE ---");

// ---- READ FILE ----

// ASYNC way (non-blocking — preferred in real apps)
fs.readFile("./math.js", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }
    console.log("Async read done:", data.length, "characters");
});
console.log("This prints BEFORE async read finishes"); // non-blocking proof

// SYNC way (blocking — avoid in production, ok for scripts)
try {
    const syncData = fs.readFileSync("./math.js", "utf-8");
    console.log("Sync read done:", syncData.length, "characters");
} catch (err) {
    console.log("Error:", err.message);
}

// ---- WRITE FILE (creates file if doesn't exist, OVERWRITES if it does) ----
fs.writeFile("./output.txt", "Hello from Node.js!\n", "utf-8", (err) => {
    if (err) return console.log("Write error:", err.message);
    console.log("File written successfully");
});

// ---- APPEND FILE (adds to existing content, doesn't overwrite) ----
fs.appendFile("./output.txt", "Second line added!\n", "utf-8", (err) => {
    if (err) return console.log("Append error:", err.message);
    console.log("Content appended successfully");
});

// ---- DELETE FILE ----
// fs.unlink("./output.txt", (err) => {
//     if (err) return console.log("Delete error:", err.message);
//     console.log("File deleted");
// });

// ---- CREATE FOLDER ----
fs.mkdir("./newFolder", { recursive: true }, (err) => {
    if (err) return console.log("Mkdir error:", err.message);
    console.log("Folder created");
});

// ---- CHECK IF FILE EXISTS ----
fs.access("./math.js", fs.constants.F_OK, (err) => {
    console.log("math.js exists:", !err);
});

// ---- COPY FILE ----
fs.copyFile("./math.js", "./math-copy.js", (err) => {
    if (err) return console.log("Copy error:", err.message);
    console.log("File copied successfully");
});


// ============================================================
//  FS METHODS SUMMARY
// ============================================================

//  Method              | Does
//  --------------------|----------------------------------------------
//  readFile            | read file content (async)
//  readFileSync        | read file content (sync, blocks)
//  writeFile           | write to file, OVERWRITES if exists
//  appendFile          | add to file, keeps existing content
//  unlink              | delete a file
//  mkdir               | create a directory
//  copyFile            | copy a file to new location
//  access              | check if file exists
//  rename              | rename or MOVE a file


// ============================================================
//  INTERVIEW QUESTIONS
// ============================================================

// Q1: What is JSON?
//     -> Text format for storing and sending data
//     -> Keys must be double-quoted strings, no functions or comments allowed
//     -> JSON.stringify() converts object to JSON, JSON.parse() converts back

// Q2: Difference between JSON.stringify and JSON.parse?
//     -> stringify: object -> JSON string (for sending data over network)
//     -> parse: JSON string -> object (for reading received data)

// Q3: Why use path.join() instead of string concatenation?
//     -> path.join() handles OS differences automatically (/ vs \)
//     -> Manual string concat breaks on different operating systems

// Q4: Difference between readFile and readFileSync?
//     -> readFile: async, non-blocking, uses callback
//     -> readFileSync: sync, blocks the thread until done
//     -> Use readFile in real apps (servers), readFileSync only for scripts

// Q5: Difference between writeFile and appendFile?
//     -> writeFile: creates or OVERWRITES the file completely
//     -> appendFile: adds to the end of existing content

// Q6: What are Node.js core modules?
//     -> Modules built into Node.js — no npm install needed
//     -> Key ones: fs, path, os, http, https, crypto, events, stream

// Q7: What is the difference between dependencies and devDependencies in package.json?
//     -> dependencies: needed in production (express, mongoose)
//     -> devDependencies: only needed during development (nodemon, jest, typescript)
//     -> Install devDependency with: npm install --save-dev <package>