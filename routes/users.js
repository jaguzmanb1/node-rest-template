const { Router } = require("express")
const { usuariosGet, usuariosPost } = require("../controllers/users")

const userRouter = Router()

userRouter.get("/", usuariosGet)

userRouter.post("/", usuariosPost)

module.exports = userRouter