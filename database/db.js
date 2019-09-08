const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize("db_tp_java","root","root",{
    host: 'localhost',
    port: '3307',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db