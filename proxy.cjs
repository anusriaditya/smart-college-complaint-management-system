const http = require('http');

const TARGET_PORT = 3000;
const PROXY_PORT = 5173;

const server = http.createServer((req, res) => {
  const options = {
    hostname: '127.0.0.1',
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Proxy Error: Unable to connect to Vite on port 3000. ' + err.message);
  });

  req.pipe(proxyReq, { end: true });
});

// Support WebSocket proxying for Vite HMR
server.on('upgrade', (req, socket, head) => {
  const proxySocket = http.request({
    hostname: '127.0.0.1',
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  });

  proxySocket.on('upgrade', (proxyRes, upstreamSocket, upstreamHead) => {
    socket.write(`HTTP/${req.httpVersion} 101 Switching Protocols\r\n` +
      Object.entries(proxyRes.headers).map(([k, v]) => `${k}: ${v}`).join('\r\n') +
      '\r\n\r\n');
    upstreamSocket.pipe(socket);
    socket.pipe(upstreamSocket);
  });

  proxySocket.on('error', () => {
    socket.destroy();
  });

  proxySocket.end();
});

server.listen(PROXY_PORT, '0.0.0.0', () => {
  console.log(`Dual-port forwarder active: http://localhost:${PROXY_PORT} -> http://localhost:${TARGET_PORT}`);
});
