var mysql = require('mysql')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'elieazar',
  password: 'mostafa',
  database: 'game'
})


export default db ;
