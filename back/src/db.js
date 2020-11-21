var mysql = require('mysql')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'm777',
  database: 'game'
})


export default db ;
