const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'monorail.proxy.rlwy.net',
  user: 'root',
  password: 'iYqtXRfrRmUhtLfLrltRwHsADdYEfPmR',
  database: 'railway',
  port: 40396
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;