// ============================================================
//  NODE.JS: HTTP MODULE — Building a Server from Scratch
//  Day 7 — Node.js — MERN Stack Learning
// ============================================================

import http from "http";

// ============================================================
//  WHAT IS HTTP?
// ============================================================

// HTTP = HyperText Transfer Protocol
// The "language" that browsers and servers use to talk to each other
//
// Every time you open a URL in a browser:
// 1. Browser sends an HTTP REQUEST  to the server
// 2. Server sends back an HTTP RESPONSE
//
// REQUEST contains:  URL, Method (GET/POST/etc.), Headers, Body
// RESPONSE contains: Status code, Headers, Body (HTML/JSON/etc.)


// ============================================================
//  HTTP METHODS — what kind of action you're doing
// ============================================================

// GET    -> fetch/read data        (get all products, get one user)
// POST   -> create new data        (create a new product)
// PUT    -> update ALL fields      (replace entire user object)
// PATCH  -> update SOME fields     (update just the name)
// DELETE -> delete data            (delete a product)

// These map directly to CRUD:
// Create -> POST
// Read   -> GET
// Update -> PUT / PATCH
// Delete -> DELETE


// ============================================================
//  STATUS CODES — what happened with the request
// ============================================================

// 2xx — SUCCESS
// 200 OK           -> request succeeded
// 201 Created      -> new resource was created (POST success)
// 204 No Content   -> success but nothing to return (DELETE success)

// 3xx — REDIRECT
// 301 Moved Permanently
// 302 Found (temporary redirect)

// 4xx — CLIENT ERROR (your fault)
// 400 Bad Request      -> invalid data sent
// 401 Unauthorized     -> not logged in
// 403 Forbidden        -> logged in but no permission
// 404 Not Found        -> URL doesn't exist
// 422 Unprocessable    -> validation failed

// 5xx — SERVER ERROR (server's fault)
// 500 Internal Server Error -> something crashed on the server


// ============================================================
//  CREATING A SERVER — http.createServer()
// ============================================================

const server = http.createServer((req, res) => {

    console.log("--- Incoming Request ---");
    console.log("URL:   ", req.url);     // e.g. "/products"
    console.log("Method:", req.method);  // e.g. "GET"

    // Set response headers BEFORE sending body
    res.setHeader("Content-Type", "text/html");

    // ---- ROUTING — decide what to send based on URL + METHOD ----

    if (req.url === "/") {
        res.writeHead(200);
        res.end("<h1>Home Page</h1>");

    } else if (req.url === "/products") {

        if (req.method === "GET") {
            res.writeHead(200);
            res.end("<h1>GET — All Products</h1>");

        } else if (req.method === "POST") {
            res.writeHead(201);
            res.end("<h1>POST — Product Created</h1>");

        } else if (req.method === "PUT") {
            res.writeHead(200);
            res.end("<h1>PUT — Product Updated</h1>");

        } else if (req.method === "DELETE") {
            res.writeHead(200);
            res.end("<h1>DELETE — Product Deleted</h1>");

        } else {
            res.writeHead(405); // Method Not Allowed
            res.end("<h1>Method Not Allowed</h1>");
        }

    } else if (req.url === "/users") {
        res.writeHead(200);
        res.end("<h1>All Users</h1>");

    } else if (req.url === "/contact") {
        res.writeHead(200);
        res.end("<h1>Contact Page</h1>");

    } else {
        // 404 — URL didn't match any route
        res.writeHead(404);
        res.end("<h1>404 — Page Not Found</h1>");
    }
});


// ============================================================
//  SENDING JSON RESPONSE (more realistic — APIs send JSON not HTML)
// ============================================================

const apiServer = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json"); // JSON response

    if (req.url === "/api/users" && req.method === "GET") {
        const users = [
            { id: 1, name: "Ram",  email: "ram@gmail.com" },
            { id: 2, name: "Sita", email: "sita@gmail.com" },
        ];

        res.writeHead(200);
        res.end(JSON.stringify(users)); // must stringify — can't send object directly
    }

    else if (req.url === "/api/users" && req.method === "POST") {
        let body = "";

        // collect incoming data chunks
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        // when all data has arrived
        req.on("end", () => {
            const newUser = JSON.parse(body); // parse JSON body to object
            console.log("New user received:", newUser);
            res.writeHead(201);
            res.end(JSON.stringify({ message: "User created", user: newUser }));
        });
    }

    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});


// ============================================================
//  PORTS — which door to listen on
// ============================================================

// Every app on a computer needs a unique PORT number
// Port range: 0 – 65535 (2^16 - 1)
//
// Reserved/well-known ports (DON'T use these):
// 80   -> HTTP (default browser port)
// 443  -> HTTPS
// 22   -> SSH
// 3306 -> MySQL
// 5432 -> PostgreSQL
// 27017-> MongoDB
//
// Safe to use for development: 3000, 3001, 4000, 8000, 8080

server.listen(8080, () => {
    console.log("HTTP server running at http://localhost:8080");
    console.log("Press Ctrl + C to stop");
});

// apiServer.listen(3000, () => {
//     console.log("API server running at http://localhost:3000");
// });


// ============================================================
//  WHY THIS IS MESSY — and why we need Express
// ============================================================

// Problems with raw http module:
// 1. Routing with if/else gets ugly fast — 50 routes = 200 lines of if/else
// 2. No built-in body parser — must manually collect chunks (req.on("data"))
// 3. No middleware support
// 4. Must manually set headers every time
// 5. No easy way to group related routes
//
// Express solves ALL of these — same http module underneath,
// but with a clean, organized API on top


// ============================================================
//  INTERVIEW QUESTIONS
// ============================================================

// Q1: What is HTTP?
//     -> Protocol browsers and servers use to communicate
//     -> Request/Response cycle: client sends request, server sends response

// Q2: What are HTTP methods?
//     -> GET: read, POST: create, PUT: full update, PATCH: partial update, DELETE: remove

// Q3: Difference between PUT and PATCH?
//     -> PUT replaces the ENTIRE resource (all fields must be sent)
//     -> PATCH updates only the FIELDS you send (partial update)

// Q4: What is a status code? Give examples.
//     -> Number telling the client what happened
//     -> 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized,
//        404 Not Found, 500 Server Error

// Q5: Difference between 401 and 403?
//     -> 401: not authenticated (not logged in)
//     -> 403: authenticated but not authorized (logged in, no permission)

// Q6: What port does HTTP use by default?
//     -> Port 80 for HTTP, Port 443 for HTTPS

// Q7: Why use Express over the raw http module?
//     -> Express adds clean routing, middleware, body parsing, error handling
//     -> Same http module underneath — Express is just a wrapper that organizes it