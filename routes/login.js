var express = require('express');
var app = express();

// Usamos bcrypt para comprobar la contraseña
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario=require('../models/usuario');

app.post('/', async (req, res, next) => {

    const email=req.body.email;
	const password = req.body.password

	console.log(email);
	try{

		const user = await Usuario.findOne({where: {email: email}});	

		if(!user){
			return res.status(400).json({
				ok:true,
				msg:'Login Incorrecto',
				email
			})
		}

		if(user.password != password){
			return res.status(400).json({
				ok:false,
				msg:'contraseña incorrecta'
			})
		}

        let token = jwt.sign({
            user
        }, 'este-es-el-seed', {expiresIn: '48h'});

        res.json({
            ok: true,
            user,
            token
        });
			
		
	}catch(error){
		res.status(400).json({
            ok:false,
            msg:'Hablar con el admin'
        });
	}
     

});




module.exports = app;