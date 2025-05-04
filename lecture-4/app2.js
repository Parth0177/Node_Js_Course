const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url,req.method,req.headers);
  
  if (req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is my Home Page</title></head>')
    res.write('<body><h1>Hello! This is my first Node server response.</h1></body>')
    res.write('<body><p>Hello this is home page.</p></body>')
    res.write('</html>');
    return res.end();
  }else if(req.url==='/products'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is my Products Page</title></head>')
    res.write('<body><h1>Hello! This is my first Node server response.</h1></body>')
    res.write('<body><p>Hello this is Products page.</p></body>')
    res.write('</html>');
    return res.end();
    }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>  My First Page</title></head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('<body><p>Hello My Name is Parth!</p></body>')
      res.write('</html>');
      res.end(); 
    
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});