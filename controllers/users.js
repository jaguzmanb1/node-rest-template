const User = require("../models/users")

const usuariosGet = async(req, res) => {
    const usuarios = await User.find() 

    res.status(200).json(usuarios)
}

const usuariosPost = async(req, res) => {
    const { name, age, email, phoneNumber, password, hasPets } = req.body
    const user = new User({
        name: name, age, email, phoneNumber, password, hasPets
    })

    await user.save()

    res.status(200).json("Se ejecutó un POST en users")
}

module.exports = {
    usuariosGet,
    usuariosPost
}