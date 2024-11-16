const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    if (req.url === '/name') {
        res.write('My name is Sura Itana');
        res.end();
    }
    else if (req.url === '/hobby') {
        res.write('My Hobby is playing keyboard');
        res.end();
    }
    else if (req.url === '/dream') {
        res.write('My dream is becoming best software engineer');
        res.end();
    }
    }).listen(3000, () => {
    console.log('Server is running on port 3000');
    });