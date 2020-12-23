create database tramites;
use tramites;

create table usuarios(

idUsuario integer primary key auto_increment,

nombreUsuario varchar(30),
apellidoUsuario varchar(30),
telefonoUsuario varchar(10),
areaUsuario varchar(15),
rolUsuario varchar(15),
nombre varchar(20),
email varchar(100),
password varchar(20),
img varchar(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

create table tramites(

idTramite integer primary key auto_increment,
nombreTramite varchar(40),
nombreUsuario varchar(20),
apellidoUsuario varchar(20),
fechaTramite date,
archivoTramite varchar(20),
areaDestino varchar(20),
estadoTramite int DEFAULT 2

);

insert into usuarios (nombreUsuario, apellidoUsuario, telefonoUsuario, areaUsuario, rolUsuario, nombre, email, password, img) values('daniel','perez','989777834','administracion','administracion','daniel','dasaba@gmail.com','123','');