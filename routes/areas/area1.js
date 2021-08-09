const express=require('express');


const app=express();

const Tramite=require('../../models/tramite');

const path=require('path');
const fs=require('fs');
//-----------------------------------------------//

//Pedido de datos//

app.get('/',async (req, res)=>{
  const email=req.body.areaDestino;
  const tramite=await Tramite.findAll();
    //const user = await Tramite.findOne({where: {areaDestino: "area1"}});
    try{
      res.status(200).json({
          ok:true,
          msg:'Listado Satisfactoriamente',
          tramite
      })
  }catch(error){
      res.status(400).json({
          ok:false,
          msg:'Error en el Listado',
      })
  }	

});
//------------------------------------------------//

//Download File
  app.post('/:id', (req,res)=>{

    var id=req.params.id;
    const file = `${__dirname}../../../uploads/${id}`;
    res.download(file);

  }); 
 
  

//------------------------------------------------//

//eliminacion de datos

app.delete('', (req, res) => {

    
});

//-------------------------------------------------//

//Update estado Tramite
app.put('/:idtramite', async (req, res) => {

  var idtramite=req.params.idtramite;
  const {body}=req;
try{
  const tramiteId = await Tramite.findOne({where: {idTramite: idtramite}});
    if(!tramiteId){
      return res.status(404).json({
        msg:'no existe'
      });
    }
    await Tramite.update(body, {
      where: {
        idTramite:idtramite
      }
    });
}catch(error){
console.log(error);
  
}
     
});

module.exports=app;