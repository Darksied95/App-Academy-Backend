require('dotenv').config()
const app = require('./App')
const { connectToDatabase } = require('./Db/db')

const port = process.env.PORT || 5000



connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log("Listening on Port " + port)
    })
})


