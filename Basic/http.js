//http module 
import http from "http";
//creating server
const server = http.createServer((req, res) => {
    console.log("req");
    //console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log()
    //console.log(req.headers);
    if (req.url === "/") {
        res.end(`<h1>Home Page</h1>`)
    } else if (req.url === "/products") {
        //get
        if (req.method === "GET") {
            res.end("<h1>All Products</h1>")
        }
        //post
        else if (req.method === "GET") {
            res.end("<h1>All Products</h1>")
        }
        //put
        else if (req.method === "GET") {
            res.end("<h1>All Products</h1>")
        }
        //delete
        else if (req.method === "GET") {
            res.end("<h1>All Products</h1>")
        }
        //this is make code mess. large amount pf code which make diffcult to bug, so we need express for it.
        res.end(`<h1>Our Products</h1>`)
    } else if (req.url === "/favicons") {

        res.end(`<h1>Our favicons</h1>`)
    } else if (req.url === "/contact") {
        res.end(`<h1>Our Contacts</h1>`)
    } else if (req.url === "/users") {
        res.end(`<h1>Our Users</h1>`)
    } else {
        res.end(`<h1> 404 PAGE NOT FOUND</h1>`)

    }

});


//listening on port
//ip adress
//port//we need port and ip adress for working in internet.
//here is port 8080.
//1 application run in 1 port.
//we need unique port, which is not used by another. 
//port range - 0-65536(2^60)
//83,443,22,465,(THESE ARE THE reserved ports, we cannot use reserved  ports)
server.listen(8080, () => {
    console.log("server is running at http://localhost:8080");
    console.log("press ctrl + c to close the server")
});