const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'gustavo',
    password: 'gustavinho',
    database: 'agendamento'
};

const mysqlConnection = mysql.createConnection(dbConfig);

module.exports = mysqlConnection;