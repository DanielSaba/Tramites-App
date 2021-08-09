const express=require('express');
const app=express();
const usuarioModel=require('../models/usuario');
const Usuario=require('../models/usuario');
var jwt = require('jsonwebtoken');
//-----------------------------------------------//


//MIDDLEWARE//

/* app.use('/',(req, res, next)=>{
    var token=req.query.token;
    jwt.verify(token,'privateKey',(err,decoded)=>{

        if(err){
            return res.status(401).json({
                message:'Token incorrecto'
            });
        }
        next();
    });
}); */

//Get Users//
app.get('/',async (req, res)=>{
   // Usuario.query( 'select * from usuarios')
    const usuario=await Usuario.findAll();
        try{
            res.status(200).json({
                ok:true,
                msg:'Listado Satisfactoriamente',
                usuario
            })
        }catch(error){
            res.status(400).json({
                ok:false,
                msg:'Error en el Listado'
            })
        }
    
});
//------------------------------------------------//


//Save new User
app.post('/', async (req, res) => {
   // await con.query( 'insert into usuarios set ?', [req.body]);

    const saveUser = await Usuario.create(req.body);

    try{
        res.status(200).json({
                ok:true,
                msg:'Usuario Guardado Satisfactoriamente'
            })
    }catch(error){
        res.status(400).json({
            ok:false,
            mdg:'Usuario no Registrado'
        })
    }
});
//------------------------------------------------//


//eliminacion de datos
app.delete('/:id', async(req, res) => {

    var idUsuario=req.params.id;
    const userId = await Usuario.findOne({where: {idUsuario: idUsuario}});
    try{
		if(userId){
            await userId.destroy();
			return res.status(400).json({
				ok:true,
				msg:'Eliminado con exito'
			})
		}
    }catch(error){
        console.log(error);
    }

    
});

//-------------------------------------------------//

app.put('', (req, res) => {

    
});

module.exports=app;