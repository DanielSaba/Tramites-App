
/*
var mysql = require('mysql');

module.exports=()=>{

return mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'tramites'
 });
}

*/
const  Sequelize  = require('sequelize');

//CONFIGURATION DATABASE LOCAL
/* const database = new Sequelize("tramites", "root", "", {
	host: "localhost",
	dialect: "mysql"
  }); */


  //CONFIGURATION DATABASE CLEVERCLOUD
  const database = new Sequelize("b4sbwj5ne2wfkdi6hvbc", "uvxepyxq2leehusq", "tdX7N15iNGIvj28UGmlu", {
    host: "b4sbwj5ne2wfkdi6hvbc-mysql.services.clever-cloud.com",
    dialect: "mysql"
    });

database.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

module.exports=database;

 