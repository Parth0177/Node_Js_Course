const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  
  res.writeHead(200, { 'Content-Type': 'text/html' }); // Set header to send HTML
  
if(req.url === '/Home') {
    res.write('<h1>Welcome to Myntra</h1>');
    return res.end(); // End the response after writing the content
  } else if (req.url === '/Products') {
    res.write('<h1>Products</h1>');
    return res.end(); // End the response after writing the content
  } else if (req.url==='/Men'){
    res.write('<h1>Men SECTION</h1>');
    return res.end(); // End the response after writing the content
  }else if(req.url==='/Women'){
    res.write('<h1>Women Section</h1>');
    return res.end(); // End the response after writing the content
  }else if(req.url==='/Kids'){
    res.write('<h1>Kids Section</h1>');
    return res.end(); // End the response after writing the content
  }

  res.write(`
    <html lang="en">
      <head>
        <title>Myntra</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="/Products">Products</a></li>
              <li><a href="/Men">Men</a></li>
              <li><a href="/Women">Women</a></li>
              <li><a href="/Kids">Kids</a></li>
            </ul>
          </nav>
        </header>
      </body>
    </html>
  `);

  res.end(); // Important to end the response
});

server.listen(3001, () => {
  console.log("Server is running on port http://localhost:3001");
});
