const http = require("http");
const os = require("os");

// Create server
const server = http.createServer((req, res) => {

  // Allow React frontend to access backend (CORS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  // Route: Total Memory
  if (req.url === "/total-memory" && req.method === "GET") {
    const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB";

    res.end(JSON.stringify({
      totalMemory: totalMemory
    }));
  }

  // Route: Free Memory
  else if (req.url === "/free-memory" && req.method === "GET") {
    const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2) + " GB";

    res.end(JSON.stringify({
      freeMemory: freeMemory
    }));
  }

  // Route: User Info
  else if (req.url === "/user-info" && req.method === "GET") {
    res.end(JSON.stringify(os.userInfo()));
  }

  // Route: CPU Architecture
  else if (req.url === "/cpu" && req.method === "GET") {
    res.end(JSON.stringify({
      architecture: os.arch()
    }));
  }

  // If route not found
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({
      message: "Route not found"
    }));
  }
});

// Start server
server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
