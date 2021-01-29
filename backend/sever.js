const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3030 });

wss.on("connection", function connection(ws, req) {
  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      client.send(data);
    });
  });
});
