const express=require('express');

const fileupload=require('express-fileupload');

const app=express();


const pool=require('../keys');
const con=pool();



//-----------------------------------------------//

app.use(fileupload());

//Pedido de datos//

app.get('/',async (req, res)=>{

    con.query('select * from tramites',(err,rows)=>{
        console.log('data received');
        res.json(rows);
    });
 
});
//------------------------------------------------//

//almacenamiento dee datos

app.post('/', async (req, res) => {
    
    
    var archivo=req.files.archivo2;
    const nombreCortado=archivo.name.split('.');
    const extensionArchivo=nombreCortado[nombreCortado.length-1];
    const extensionArchivo2=nombreCortado[0];

    
    //extensiones permitidas

    const extensionesValidas=['jpeg','jpg','png','pdf'];

    if(extensionesValidas.indexOf(extensionArchivo)<0){
        return res.status(200).json({
            ok:false,
            mensaje:'extension no permitida'
        });

    }

    //nombre de archivo personalizado

    const nombreArchivo=`${extensionArchivo2}${new Date().getMilliseconds()}.${extensionArchivo}`;

    //mov temporal al path

    const path= `./uploads/${nombreArchivo}`;

    archivo.mv(path,err=>{
        if(err){
            return res.status(200).json({
                ok:false,
                mensaje:'extension no permitida'
            });
        }
        res.status(200).json({
                ok:true,
                mensaje:'mensaje enviado',
                extensionArchivo:extensionArchivo,
                nombreCortado:nombreCortado
            })
    })


const {nombreTramite,
        nombreUsuario,
        apellidoUsuario,
        fechaTramite,
        archivoTramite=nombreArchivo,
        areaDestino}=req.body;
        
    const newTramite={
        nombreTramite,
        nombreUsuario,
        apellidoUsuario,
        fechaTramite,
        archivoTramite,
        areaDestino
    }

    
    
    await con.query( 'insert into tramites set ?', [newTramite]);
           

});

//------------------------------------------------//

//eliminacion de datos

app.delete('', (req, res) => {

    
});

//-------------------------------------------------//

app.put('', (req, res) => {

    
});

module.exports=app;