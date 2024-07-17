const http = require("http");

const server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.end('Hello from the Adele')
    } else if (req.url == '/about') {
        res.end('Hello from the about')
    } else {
        res.writeHead(404)
        res.end('<h1>404 error from the site</h1>')
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('listning in 3000 port');
})
