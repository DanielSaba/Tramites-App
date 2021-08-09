const  Sequelize  = require('sequelize');
const  Tramites  = require('../keys')

const Tramite = Tramites.define('tramites', {
    idTramite: {type: Sequelize.INTEGER, primaryKey: true},
    nombreTramite: Sequelize.STRING,
    nombreUsuario: Sequelize.STRING,
    apellidoUsuario:Sequelize.STRING,
    fechaTramite:Sequelize.DATE,
    archivoTramite:Sequelize.STRING,
    areaDestino:Sequelize.STRING,
    estadoTramite:Sequelize.INTEGER
   
  },{
    timestamps: false
  });

module.exports=Tramite;