'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define('usuarios', {
       
        nombreUsuario: {
            allowNull: false,
            type: DataTypes.STRING
        },
        apellidoUsuario: {
            allowNull: true,
            type: DataTypes.STRING
        },
        telefonoUsuario: {
            allowNull: true,
            type: DataTypes.STRING
        },
        areaUsuario: {
            allowNull: true,
            type: DataTypes.STRING
        },
        rolUsuario: {
            allowNull: true,
            type: DataTypes.STRING
        },
        nombre: {
            allowNull: true,
            type: DataTypes.STRING
        },
        email: {
            allowNull: true,
            type: DataTypes.STRING
        },
        password: {
            allowNull: true,
            type: DataTypes.STRING
        }
    });

    Usuarios.associate = function(models) {
    // associations can be defined here
    };
    return Usuarios;
};