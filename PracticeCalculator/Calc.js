const fs= require('fs');
const {sumRequestHandle}=require('./sum')
const userRequest=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html'); // Set header to send HTML
    res.write(`
      <html>
        <head><title>Practice</title></head>
        <body><h1>Welcome to Calculator</h1></body>
        <a href="/calculator">Go To Calculator</a>
        </html>
        `);
        return res.end()
  } else if(req.url.toLowerCase()==='/calculator'){
    res.setHeader('Content-Type', 'text/html'); // Set header to send HTML
    res.write(`
      <html>
        <head><title>Practice</title></head>
        <body><h1>Here is the Calculator</h1>
        <form action="/calculate-result" method="POST">
        <input type="text" id="num1" placeholder="Enter First Number" name="first">
        <input type="text" id="num2" placeholder="Enter Second Number" name="second">
        <button type="submit" value="sum">SUM</button>
        </form>
        </body>
        </html>
        `);
        return res.end();
  }
  else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
    return sumRequestHandle(req,res); // Call the sumRequestHandle function to handle the calculation
    
  }


  res.setHeader('Content-Type', 'text/html'); // Set header to send HTML
    res.write(`
      <html>
        <head><title>Practice</title></head>
        <body><h1>404 Page Does Not Exist </h1></body>
        <a href="/">Go To Home</a>
        </html>
        `);
        return res.end()
  }


exports.userRequest=userRequest;