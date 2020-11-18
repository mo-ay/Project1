var mysql = require('mysql')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'elieazar',
  password: 'ali',
  database: 'game'
})


export default db ;
