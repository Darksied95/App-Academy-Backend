const CustomError = require("./CustomError");

class UnAunthenticatedError extends CustomError {
    constructor(message) {
        super(message)
        this.statusCode = 401
    }
}

module.exports = UnAunthenticatedError