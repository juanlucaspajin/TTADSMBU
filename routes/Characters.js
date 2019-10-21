const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
const UserCharacter = require('../models/UserCharacter')
const Character = require('../models/Character')
router.use(cors())

process.env.SECRET_KEY = 'secret'

router.get('/my-characters',(req,res) =>{

    UserCharacter.find({
        where: {
            id_usuario: req.body.id_usuario
        }
    })
    .then()
})