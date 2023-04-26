const CustomError = require('../Errors/CustomError')

async function errorHandler(err, req, res, next) {

    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .json({ type: "failure", message: err.message })
    }

    res
        .status(500)
        .json({ error: 'Something Went Wrong' })
    next()
}

module.exports = errorHandler