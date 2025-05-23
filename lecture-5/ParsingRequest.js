
const fs = require('fs');


const requestHandler= (req, res) => {
  console.log(req.url,req.method);
  if (req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is my Home Page</title></head>')
    res.write('<body><h1>Hello! Enter Your Details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for="gender">Gender</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="male">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>')
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }else if(req.url.toLowerCase() ==='/submit-details'&& req.method=='POST' ){

      const body= [];
      req.on('data', (chunk)=>{
        console.log(chunk);   
        body.push(chunk);
      })
      
      req.on('end',()=>{
        const parseBody=  Buffer.concat(body).toString();
        console.log(parseBody);
        const params= new URLSearchParams(parseBody);
        //const bodyObject={};
        //for (const[key,value] of params.entries()){
        //  bodyObject[key]= value;
        //}
        const bodyObject= Object.fromEntries(params)
        console.log(bodyObject);
        fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
      })
      
      res.statusCode = 302;
      res.setHeader('Location','/');
    }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>  My First Page</title></head>');
      res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
      res.write('<body><p>Hello My Name is Parth!</p></body>')
      res.write('</html>'); 
      res.end(); 
    
    
};

module.exports = requestHandler;

