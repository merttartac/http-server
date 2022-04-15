const http = require("http");

const PORT = 3000;

// our request listener... both req and res objects are streams !
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log('request recieved');
    res.end(JSON.stringify({
        id: 1,
        name: 'Mert Tartac'
    }));
});

// 127.0.0.1 => localhost
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
