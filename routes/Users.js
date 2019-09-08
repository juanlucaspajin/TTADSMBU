const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',(req,res) => {
    const today = new Date()
    const userData = {
        usuario: req.body.usuario,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        fechaCreacion: today,
        rol: req.body.rol
    }

    User.findOne({
        where: {
            usuario: req.body.usuario
        } 
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password,10,(err,hash) =>{
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.usuario + ' registrado'})
                })
                .catch(err => {
                    res.send('Error: ' + err)
                })
            })
        } else {
            res.json({error: 'Usuario existente'})
        }
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
})

users.post('/login',(req,res) => {
    User.findOne({
        where: {
            usuario : req.body.usuario
        }
    })
    .then(user => {
        if (user) {
            if (bcrypt.compareSync(req.body.password,user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
        } else {
            res.status(400).json({error: 'El usuario no existe'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

module.exports = users