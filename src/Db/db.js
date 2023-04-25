const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('unable to connect to the database:', error.message);
    }
}

(async () => {
    await sequelize.sync({ logging: false, alter: true })
})();

module.exports = { sequelize, connectToDatabase }