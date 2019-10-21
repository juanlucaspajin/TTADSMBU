const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'personaje',
    {
        id_personaje: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        vida: {
            type: Sequelize.INTEGER
        },
        energia: {
            type: Sequelize.INTEGER
        },
        defensa: {
            type: Sequelize.INTEGER
        },
        evasion: {
            type: Sequelize.INTEGER
        },
        experiencia: {
            type: Sequelize.INTEGER
        },
        id_nivel: {
            type: Sequelize.INTEGER
        },
        id_tipo_personaje: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)
