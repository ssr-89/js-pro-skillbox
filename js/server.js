const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = getRandomFourDigitNumber();
const HOST = 'localhost';

const server = http.createServer((request, response) => {
  let filePath = '.' + request.url;
  if (filePath === './' || filePath === './index.html') {
    filePath = './index.html';
  } else if (filePath === './classes.html') {
    filePath = './classes.html';
  } else if (filePath === './eventloop.html') {
    filePath = './eventloop.html';
  } else if (filePath === './events.html') {
    filePath = './events.html';
  } else if (filePath === './modules.html') {
    filePath = './modules.html';
  } else if (filePath === './processing.html') {
    filePath = './processing.html';
  } else if (filePath === './primer.html') {
    filePath = './primer.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-sfnt'
  }

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(500);
      response.end(`Soryan! There was an error: ${error.code} ..n`);
      return;
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`started on http://${HOST}:${PORT}`);
})

function getRandomFourDigitNumber() {
  // Генерируем случайное число от 1000 до 9999
  return Math.floor(Math.random() * 9000) + 1000;
}


// const server = http.createServer((request, response) => {
//   console.log('Server request');
//   console.log(request.url, request.method);

//   response.setHeader('Content-Type', 'application/json');

//   const data = JSON.stringify([
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Bob', age: 35 },
//     { name: 'Alice', age: 28 },
//     { name: 'James', age: 31 },
//   ])
//   response.end(data);
// });

// server.listen(PORT, HOST, (error) => {
//   console.log(`started on http://${HOST}:${PORT}`);
//   error ? console.log(error) : console.log(`listening port ${PORT}`);
// })