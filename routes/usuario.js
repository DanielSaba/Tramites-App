const express=require('express');


const app=express();

const usuarioModel=require('../models/usuario');
const pool=require('../keys');
const con=pool();

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

//Pedido de datos//

app.get('/',async (req, res)=>{

    con.query( 'select * from usuarios', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        res.json(rows);
    });

});
//------------------------------------------------//




//almacenamiento dee datos

app.post('/', async (req, res) => {

    await con.query( 'insert into usuarios set ?', [req.body]);
    res.json({text:'Producto Guardado'});    
});

//------------------------------------------------//

//eliminacion de datos

app.delete('/:id', async(req, res) => {

    var id=req.params.id;
    await con.query('',[],()=>{
        
    });

    
});

//-------------------------------------------------//

app.put('', (req, res) => {

    
});

module.exports=app;