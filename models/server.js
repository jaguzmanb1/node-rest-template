const express = require("express")
const userRouter = require("../routes/users")

class Server {

    constructor() {
        this.app = express()
        this.port = 8080

        this.usersPath = "/api/users"

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usersPath, userRouter)
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log("Servidor ejecutandose en", this.port)
        })
    }
}

module.exports = Server;