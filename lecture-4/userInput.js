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
  }else if (req.url==='/form'){
    res.write('<h1>Welcome to Home Page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="Radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="Radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    return res.end();
  }
    
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});