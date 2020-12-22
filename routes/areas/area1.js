const express=require('express');


const app=express();


const pool=require('../../keys');
const con=pool();

const path=require('path');
const fs=require('fs');
//-----------------------------------------------//

//Pedido de datos//

app.get('/',async (req, res)=>{

    

    con.query( 'select * from tramites where areaDestino="area1" ', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        res.json(rows);
    });

});
//------------------------------------------------//

//almacenamiento dee datos

  /*  app.post('/', async (req, res) => {

    await con.query( 'insert into usuarios set ?', [req.body]);
    res.json({text:'Producto Guardado'});    
});    */

  app.post('/:id', (req,res,next)=>{

    var id=req.params.id;
   
    const fileName = 'Hospital311.jpg';
   //const filepath = `${__dirname}../../uploads/filename`;
   // filepath = path.join(__dirname, '../../../uploads') +'/'+ fileName;
     //const filepath = `${__dirname}../../../uploads/${req.params.fileName}`;
   // res.sendFile(filepath);
    //res.download(__dirname +'../../../uploads/'+'jsonFile.json','jsonFile.json');s
    //res.json({hola});

    /* const file = `${__dirname}/../../../uploads/${fileName}`;
    res.download(file); */
    const file = `${__dirname}../../../uploads/${id}`;
    res.download(file);
  }); 
 
  

//------------------------------------------------//

//eliminacion de datos

app.delete('', (req, res) => {

    
});

//-------------------------------------------------//

app.put('/:idTramite', (req, res) => {

  var idTramite=req.params.idTramite;
  var estadoTramite = req.body.estadoTramite;
  con.query('UPDATE tramites SET estadoTramite = ? WHERE idTramite = ?',[estadoTramite,idTramite],(err, result)=>{
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  })

    
});

module.exports=app;