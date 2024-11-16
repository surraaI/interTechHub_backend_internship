const http = require('http');

const port = process.env.PORT || 3000;

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
    else {
        res.write('Invalid endpoint');
        res.end();
    }
}).listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
