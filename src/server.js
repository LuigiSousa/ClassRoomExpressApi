const app = require('./app')

const server = app.listen(2007, () => {
    console.log("Server running on port 2007")
})

process.on('SIGINT', () => {
    console.log("Server shutting down")
    server.close()
})