const sumRequestHandle= (req,res)=>{
  console.log("Inside sumRequestHandle function", req.url);
  const body=[]
  req.on('data',chunk=>body.push(chunk));
  req.on('end',()=> {
    const bodyStr= Buffer.concat(body).toString();
    const params= new URLSearchParams(bodyStr);
    const bodyObj= Object.fromEntries(params);
    console.log("Body Object is",bodyObj);
    const result= Number(bodyObj.first) + Number(bodyObj.second);
    console.log("Result is",result);

    res.setHeader('Content-Type', 'text/html'); // Set header to send HTML
    res.write(`
      <html>
        <head><title>Practice</title></head>
        <body><h1>Your Result is ${result}</h1></body>
        </html>
        `);
        return res.end();
  });
  
}
exports.sumRequestHandle=sumRequestHandle;