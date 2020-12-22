/*import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.then((r: any) => r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('Conexion exitosa.')
}));

export default pool;
*/


const mysql = require('promise-mysql');
const keys= require('./keys');

const pool = mysql.createPool(keys.database);
pool.getConnection()
	.then(connection=>{
		pool.releaseConnection(connection);
		console.log('db is conected');
	});

module.exports =pool;