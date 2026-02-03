//Since in type we have used common js hence we have used require here
//require mean Node, give me the http functionality”

//Server == have two works request or response

//here http became object and we can add methods to it like createServer

//Flow
//Node imports http
// Server is created
// // Server starts listening on port 8000
// Browser sends request
// Server receives req
// Server sends res
// Browser displays response
const http = require('http');
 const myServer = http.createServer((req, res)=>{
   if (req.url === '/favicon.ico') return res.end();

    console.log('Request URL:', req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end('<h1>Home Page</h1><p>Welcome to my website</p>');
    } 
    else if (req.url === '/about') {
        res.end('<h1>About Page</h1><p>This is the about page</p>');
    } 
    else if (req.url === '/contact') {
        res.end('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404</h1><p>Page Not Found</p>');
    }s.end('This is my first Server');
})
myServer.listen(8000,()=>console.log('server is run'));
