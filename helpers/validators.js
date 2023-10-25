const { models } = require("mongoose")

const validateAge = (age = 0) => {
    if (age < 18) {
        throw new Error("Must have more than 18 years")
    }
}

module.exports = {
    validateAge
}