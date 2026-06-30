// ============================================================
//  NODE.JS — WHAT IT IS & HOW IT WORKS
//  Day 7 — Node.js — MERN Stack Learning
// ============================================================


// ============================================================
//  1. WHAT IS NODE.JS?
// ============================================================

// Node.js is a RUNTIME ENVIRONMENT that lets you run JavaScript
// OUTSIDE the browser — on a server, your computer, anywhere.
//
// Before Node.js: JS could ONLY run inside browsers (Chrome, Firefox)
// Node.js (2009) took Chrome's V8 engine and let it run standalone
//
// This is WHY MERN stack works — same language (JS) for:
// MongoDB (queries) - Express (backend) - React (frontend) - Node (runtime)


// ============================================================
//  2. NODE.JS IS NOT A LANGUAGE OR FRAMEWORK
// ============================================================

// Common confusion — clear this up for interviews:
// - JavaScript -> the LANGUAGE
// - V8         -> Google's engine that runs JS (used in Chrome AND Node)
// - Node.js    -> RUNTIME that uses V8 + adds extra features
//                 (file system access, networking, etc. that browsers don't allow)
//
// Browser JS can't read files on your computer (security)
// Node.js JS CAN read/write files — because it's not sandboxed in a browser


// ============================================================
//  3. WHY IS NODE.JS FAST?
// ============================================================

// Two key reasons:

// a) V8 ENGINE — compiles JS directly to fast machine code (not interpreted line by line)

// b) NON-BLOCKING / ASYNCHRONOUS I/O — this is the BIG one
//    Node doesn't wait for slow tasks (file read, database query, network call)
//    It hands them off and moves to the next task immediately
//    Same event loop concept you already learned in JS!

console.log("Start");

const fs = require("fs"); // built-in file system module

fs.readFile(__filename, "utf-8", (err, data) => {
    console.log("File read complete (this runs LATER)");
});

console.log("End");

// OUTPUT ORDER:
// Start
// End                          <- Node didn't wait for file reading
// File read complete...        <- arrives after file is actually read


// ============================================================
//  4. SINGLE-THREADED BUT HANDLES MANY REQUESTS
// ============================================================

// Node.js itself runs JS on a SINGLE thread (just like browser JS)
// But it can handle THOUSANDS of concurrent requests because:
//
// - Slow tasks (file I/O, DB queries, network calls) are handed off
//   to the operating system / libuv's thread pool in the background
// - The single JS thread stays FREE to handle new incoming requests
// - When the slow task finishes, its callback goes into the queue
//   (event loop picks it up when the thread is free)
//
// This is why Node.js is great for I/O-heavy apps (APIs, chat apps)
// but NOT ideal for CPU-heavy tasks (video processing, heavy computation)
// — those would block the single thread for everyone


// ============================================================
//  5. WHAT CAN NODE.JS DO THAT BROWSER JS CANNOT?
// ============================================================

//  Browser JS                    | Node.js
//  -------------------------------|--------------------------------
//  Manipulate DOM (document)      | NO DOM access at all
//  fetch() for network requests   | http/https modules, or fetch (newer versions)
//  Cannot read/write local files  | fs module — full file system access
//  Cannot create servers          | http module — can create a web server
//  Runs inside browser sandbox    | Runs directly on your OS, full access


// ============================================================
//  6. WHAT IS NPM?
// ============================================================

// npm = Node Package Manager
// Comes bundled WITH Node.js automatically
// Used to install/share reusable code packages (express, mongoose, etc.)

// npm init       -> creates package.json (interactive questions)
// npm init -y    -> creates package.json instantly with defaults
// npm install express   -> installs a package
// npm install           -> installs everything listed in package.json

// package.json = the "ID card" of your project
// Lists: project name, version, dependencies, scripts to run


// ============================================================
//  7. WHAT IS package.json AND node_modules?
// ============================================================

// package.json  -> lists your project info + dependencies (small file, you read it)
// node_modules  -> actual downloaded code of those dependencies (huge folder, never edit)
// package-lock.json -> locks EXACT versions of every dependency (for consistency across machines)

// ⚠️  node_modules is NEVER pushed to GitHub — too large, regenerated with npm install
// Always add node_modules to .gitignore


// ============================================================
//  8. GLOBAL OBJECTS IN NODE (different from browser)
// ============================================================

console.log(__dirname);  // absolute path of the CURRENT folder
console.log(__filename); // absolute path of the CURRENT file

// In browser, 'window' is the global object
// In Node.js, 'global' is the global object (rarely used directly)

// process — gives info about the current running Node program
console.log(process.version);  // installed Node.js version
// console.log(process.env);   // environment variables (API keys, configs, etc.)


// ============================================================
//  INTERVIEW QUESTIONS — BASICS
// ============================================================

// Q1: What is Node.js?
//     -> A runtime environment that runs JavaScript outside the browser
//     -> Built on Chrome's V8 engine

// Q2: Is Node.js a programming language?
//     -> No — it's a runtime. JavaScript is the language, Node.js runs it

// Q3: Is Node.js single-threaded?
//     -> Yes, the main JS execution is single-threaded
//     -> But I/O operations are handled in background (libuv thread pool)
//     -> This is why it can handle many concurrent requests efficiently

// Q4: Why is Node.js good for building APIs?
//     -> Non-blocking I/O — doesn't wait for slow DB/file operations
//     -> Can handle many requests at once without creating new threads per request

// Q5: What is npm?
//     -> Node Package Manager — installs and manages reusable JS packages
//     -> Comes bundled with Node.js installation

// Q6: Difference between package.json and node_modules?
//     -> package.json: list of dependencies + project metadata (small, tracked in git)
//     -> node_modules: actual installed code (huge, NEVER tracked in git)

// Q7: What is the difference between Node.js and a browser for running JS?
//     -> Browser: has DOM, window object, sandboxed (no file system access)
//     -> Node.js: no DOM, has 'global' object, full file system + OS access

// Q8: What is __dirname and __filename?
//     -> __dirname: absolute path of the current folder
//     -> __filename: absolute path of the current file
//     -> Both are Node-specific globals (don't exist in browser JS)

// Q9: Can Node.js handle CPU-heavy tasks well?
//     -> Not ideally — CPU-heavy tasks block the single thread
//     -> Best for I/O-heavy tasks: APIs, real-time apps, file/network operations

// Q10: What does "non-blocking" mean?
//      -> The program doesn't pause and wait for slow operations to finish
//      -> It continues running other code, and comes back via callback/event loop