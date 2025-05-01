const http = require('https');

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});