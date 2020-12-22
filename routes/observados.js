const express=require('express');

const app=express();

const pool=require('../keys');
const con=pool();

//---pedidos de datos--//

app.get('/',async (req, res)=>{

    con.query( 'select * from tramites where estadoTramite = 1 ', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        res.json(rows);
    });

});

module.exports = app;