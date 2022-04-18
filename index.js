const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Nicola Tesla",
  },
  {
    id: 1,
    name: "Isaac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
];

// our request listener... both req and res objects are streams !
server.on('request', (req, res) => {
  const items = req.url.split("/");
  // ex:   /friends/2 => ['', 'friends', '2']

  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      const friend = data.toString();
      console.log('Request: %o', friend);
      friends.push(JSON.parse(friend));
    })

  } else if (req.method === 'GET' && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "application/json");

    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    
    } else {
      res.end(JSON.stringify(friends));
    }

  } else if (items[1] === "messages") {
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "text/html");
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Mert!</li>');
    res.write('<li>How are you today ?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
  }
});

// 127.0.0.1 => localhost
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});