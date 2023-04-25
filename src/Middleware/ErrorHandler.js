
async function errorHandler(err, req, res, next) {
    res.send('something went wroong')
    next()
}

module.exports = errorHandler