const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'usuario',
    {
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        fechaCreacion: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        rol: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)
