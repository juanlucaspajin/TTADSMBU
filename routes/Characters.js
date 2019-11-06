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

router.get('/my-characters/:id_usuario',(req,res) =>{

	var id_user = req.params.id_usuario

    UserCharacter.findAll({
        where: {
            id_usuario: id_user
        }
    })
    .then(array_characters => {
    	var arr = [];

    	for (var i = 0; i < array_characters.length; i++) {
    		arr.push(array_characters[i].id_personaje)
    	}

    	Character.findAll({
	        where: {
	            id_personaje: arr
	        } 
	    })
	    .then(character => {
	    	// console.log(character)
	    	res.json(character);
	    })
	    .catch(err => {
	        res.send('Error: ' + err)
	    })
    	
    })
    .catch(err => {
        res.send('Error: ' + err)
    })
})

router.get('/character/:id_personaje', (req,res) => {
	var id_personaje = req.params.id_personaje;

	Character.findOne({
        where: {
            id_personaje: id_personaje
        } 
    })
    .then(character => {
    	res.json(character)
    })
    .catch(err => {
    	res.send('Error: ' + err)
    })
})

router.post('/character/delete/:id_personaje', (req,res) => {
	var id_personaje = req.params.id_personaje;

	Character.destroy({
		where: id_personaje
	})
	.then(character => {
		res.json({status: 'El personaje ha sido borrado'})
	})
	.catch(err => {
    	res.send('Error: ' + err)
    })
})

// router.post('/my-characters/edit/:id_personaje', (req,res) =>{
// 	var id_personaje = req.params.id_personaje;

// })


module.exports = router;