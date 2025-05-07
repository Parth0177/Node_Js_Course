const http = require('http');
const requestHandler= require('./ParsingRequest')
const server = http.createServer(requestHandler);

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});