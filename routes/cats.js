const { Router } = require("express")
const { catsGet, catsPost, catsDelete } = require("../controllers/cats")

const catsRouter = Router()


catsRouter.get("/", catsGet)

catsRouter.post("/", catsPost)

catsRouter.delete("/", catsDelete)

module.exports = catsRouter