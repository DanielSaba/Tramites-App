const express=require('express');


const app=express();



const path=require('path');
const fs=require('fs');


//-----------------------------------------------//

//Pedido de datos//

app.get('/:img',async (req, res)=>{

   var img=req.params.img;
   var pathImage=path.resolve(__dirname, `../uploads/${img}`);
   res.sendFile(pathImage);

});
//------------------------------------------------//

//download image//

app.post('/',function(req,res,next){
   filepath = path.join(__dirname,'../uploads/'+req.body.archivoDestino);
   res.sendFile(filepath);
 });

module.exports=app;