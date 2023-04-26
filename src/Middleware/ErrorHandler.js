const CustomError = require('../Errors/CustomError')

async function errorHandler(err, req, res, next) {

    console.log(err);
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .json({ type: "failure", message: err.message })
    }
    res.send('something went wroong')
    next()
}

module.exports = errorHandler