import http from 'http';
import app from './app';

let port = process.env.PORT || 4000;
let server = http.createServer(app);
server.listen(port, () =>
    console.log('Server is running from port: ' + port)
);
