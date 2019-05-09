const http = require('http');
//import http from 'http'; //ES6 in Node NOT working  
//Essentially the loading of this required code happens first in a specific order rather than the imports
//and tax breaks is order because in E6 loading of contents from another file with the imports in tax
//we happen asynchronously so we can't use import because it breaks no paradigm of requiring modules first

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;

  console.log(url);

  if (url === '/translations') {
    const translations = { 1: 'one', 2: 'two', 3: 'three' };

    res.setHeader('Content-Type', 'application/json');

    res.write(JSON.stringify(translations));

    res.end();
  }

  res.end('Welcome to Node!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});