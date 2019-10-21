// id_usuario_personaje int(11) AI PK 
// id_usuario int(11) 
// id_personaje int(11)

const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'usuario_personaje',
    {
        id_usuario_personaje: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: Sequelize.INTEGER
        },
        id_personaje: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)
