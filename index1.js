const http = require('http')

// Create an http server
const server = http.createServer((req, res) => {

    // Set the response header
    res.setHeader('Content-Type', 'text/plain')

    // Send a response to the client
    res.end('hooray🙌, this is node server ! ☆*: .｡. o(≧▽≦)o .｡.:*☆')
})

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`╰(*°▽°*)╯ server is on! 🟢 http://localhost:${port}`)
})