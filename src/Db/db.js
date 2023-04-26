const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_HOST)

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('unable to connect to the database:', error.message);
    }
}

(async () => {
    await sequelize.sync({ force: true })
})();

module.exports = { sequelize, connectToDatabase }