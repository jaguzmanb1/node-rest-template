const express = require("express")
const userRouter = require("../routes/users")
const catsRouter = require("../routes/cats")

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.usersPath = "/api/users"
        this.catsPath = "/api/cats"

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usersPath, userRouter)
        this.app.use(this.catsPath, catsRouter)
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log("Servidor ejecutandose en", this.port)
        })
    }
}

module.exports = Server;