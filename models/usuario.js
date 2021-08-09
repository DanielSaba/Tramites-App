const  Sequelize  = require('sequelize');
const  Tramites  = require('../keys')

const Usuario = Tramites.define('usuarios', {
    idUsuario: {type: Sequelize.INTEGER, primaryKey: true},
    nombreUsuario: Sequelize.STRING,
    apellidoUsuario: Sequelize.STRING,
    telefonoUsuario:Sequelize.STRING,
    areaUsuario:Sequelize.STRING,
    rolUsuario:Sequelize.STRING,
    nombre:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING,
    img:Sequelize.STRING
   
  },{
    timestamps: false
  });

module.exports=Usuario;