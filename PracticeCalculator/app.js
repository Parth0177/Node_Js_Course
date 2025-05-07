const http= require('http');
const { userRequest } = require('./Calc');
const server = http.createServer(userRequest);

const PORT=3006;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})