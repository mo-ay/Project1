var mysql = require('mysql')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '41231878',
  database: 'game'
})


export default db ;
