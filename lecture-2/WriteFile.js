const fs= require('fs');

console.log("Hello, World!");

fs.writeFile("output.txt","Writing File",(err)=>{
  if(err){
    console.log("Error Occured");
  }
  else {
    console.log("File Created Successfully");
  }
});

//File writing is available in node js...