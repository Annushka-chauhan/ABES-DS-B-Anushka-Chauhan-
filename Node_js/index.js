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
// const http = require('http');
//  const myServer = http.createServer((req, res)=>{
//    if (req.url === '/favicon.ico') return res.end();

//     console.log('Request URL:', req.url);

//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     if (req.url === '/') {
//         res.end('<h1>Home Page</h1><p>Welcome to my website</p>');
//     } 
//     else if (req.url === '/about') {
//         res.end('<h1>About Page</h1><p>This is the about page</p>');
//     } 
//     else if (req.url === '/contact') {
//         res.end('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
//     } 
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404</h1><p>Page Not Found</p>');
//     }s.end('This is my first Server');
// })
// myServer.listen(8000,()=>console.log('server is run'));



//FILE SYSTEM

 //const fs= require('fs');
// //fs.writeFileSync("./abes.txt","Hello Abes ");

//  const result = fs.readFileSync("./abes.txt","utf-8");
//  console.log(result);

//  const ans= fs.readFileSync("./ds-b.txt","utf-8");
//  console.log(ans);

 //Async always work when is callback (compulsory )
//  fs.writeFile("./abes.txt","We Code and Run it ",() => { });
//  const result = fs.readFile("./abes.txt", "utf-8",(err,result) => {
//   if(err){
//     console.log("Error",err);
//   }
//   else {
//     console.log(result); 
//   }
//  })
//  fs.writeFileSync("./A1.txt", "We are in the A1 file ");
//  const ans = fs.readFileSync("./A1.txt","utf-8");
//  console.log(ans);
//  fs.writeFile("./A2","We are in the A2 file ",()=>{ });
//  const sop = fs.readFile("./A2.txt", "utf-8" , (err,sop) =>{
//   if(err){
//     console.log("Error" ,err);
//   }
//   else {
//     console.log(result);
//   }
//  })
 // ./ means current directory


 //APPEND FILE
//  fs.appendFileSync("./abes.txt",`PhD`);
// fs.appendFile("./A1.txt" ,`Anushka`,"utf-8",  (err) => {
//     if(err){
//       console.log("Error", err);
//     }
//     else {
//       console.log("File append SuccessFully");
//     }
//  })


//COPY FILE CONTENT
// fs.cpSync("./abes.txt","./A1.txt")
// fs.cp("./abes.txt" ,"./ds-b.txt", (err) =>{
//   if(err){
//     console.log("Error", err);
//   }
//   else {
//     console.log("Copied Successfully through async");
//   }
// })


// fs.unlinkSync("./abes.txt");
// fs.unlink('abes.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return;
//     }
//     console.log('File deleted successfully');
// });
const os = require('os');
const { CLIENT_RENEG_LIMIT } = require('tls');
console.log("system platfoem", os.platform());
console.log("user info",os.userInfo());
console.log("cpu", os.arch());
console.log("free", os.freemem());
console.log("total memory", os.totalmem());
console.log("uptime",os.uptime());
console.log("homedir",os.homedir());
console.log("host_name",os.hostname());
