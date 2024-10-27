const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write('<h1>Hello World!</h1><p>This is the home page of basic Node.js server.</p>');

    res.end();
  } else if (req.url === "/about") {
    res.end('<h1>About Us</h1><p>This is the About page.</p>');
  }
  else if (req.url === "/contact") {
    res.write('<h1>Contact Us</h1><p>Contact us at:</p> <a href= "mailto:kunwarbijeta021@gmail.com">Email</a>');
  }
   else {
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
