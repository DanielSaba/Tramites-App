const express=require('express');
const app=express();
const cors = require('cors');
var bodyParser = require('body-parser');
const path=require('path');

//Cors

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname,'bin'))); 
//_---------------------------------------------------------------//

//IMPORTACION DE RUTAS//
const usuario=require('./routes/usuario');
const login=require('./routes/login');
const tramite2=require('./routes/tramite');
const area1=require('./routes/areas/area1');
const images=require('./routes/image');
const observados=require('./routes/observados');

//definicion de puerto
app.set('port', process.env.PORT || 4000);






//Usoroutes

app.use('/usuario',usuario);
app.use('/usuariolistado',usuario);

app.use('/login',login);

app.use('/tramite',tramite2);
app.use('/tramitelistado',tramite2);

app.use('/area1',area1);

app.use('/area1',images);

app.use('/observados',observados);

app.get('*',(req,res)=>{
    res.send(path.join(__dirname,'bin/index.html'));
});


//escucha sobre el puerto
app.listen(app.get('port'), () => {
    console.log('Listening on port 3000!');
});