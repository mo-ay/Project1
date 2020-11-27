var mysql = require('mysql')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'alishkeir',
  password: 'password',
  database: 'game'
})


export default db ;