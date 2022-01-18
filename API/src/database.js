const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'KOALA@96',
    database : 'deepdaem_web_admin'
});

/*BD EN HOSTING*/
// const mysqlConnection = mysql.createConnection({
//     host : 'deepdaemon.org',
//     database : 'deepdae1_deepdaem_web',
//     user : 'deepdae1_deepdaemonDB',
//     password : 'RTB5NLmgVC39XFN'
    
// });

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
    }else{
        console.log('Conexion exitosa a la BD');
    }  
});


module.exports = mysqlConnection;