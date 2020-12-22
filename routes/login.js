var express = require('express');
var app = express();

const pool=require('../keys');
const con=pool();
var jwt = require('jsonwebtoken');


app.post('/', async (req, res, next) => {

    var email = req.body.email;
	var password = req.body.password;
	var areaUsuario = req.body.areaUsuario;
	
	var tokenData = {
		email: email
		// ANY DATA
	  }

	if (email && password) {
		await con.query('SELECT * FROM usuarios WHERE email = ? AND password = ? AND areaUsuario = ?', [email, password, areaUsuario], function(error, results, fields) {
			if (results.length > 0) {
			 var token = jwt.sign(tokenData, 'privateKey', { expiresIn: 14400 }); // 4 horas 
			res.json({
				dato:'enviadoo',
				email:email,
				password:password,
				areaUsuario:areaUsuario,
				token:token
				
            })
                
			} 	
			
		});
	} else {
		
		
    } 




});
	
 /*    */
    

        



module.exports = app;