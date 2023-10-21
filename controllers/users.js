
const usuariosGet = (req, res) => {
    res.status(200).send({"msg": "get en users"})
}

const usuariosPost = (req, res) => {
    res.status(200).send("Se ejecutó un POST en users")
}

module.exports = {
    usuariosGet,
    usuariosPost
}