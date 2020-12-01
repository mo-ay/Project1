var mysql = require('mysql')

var db = mysql.createConnection({
  host: 'localhost',
<<<<<<< HEAD
  user: 'alishkeir',
  password: 'password',
=======
  user: 'elieazar',
  password: 'mostafa',
>>>>>>> e6546b32ff6eeae13adaa86cba690cca52fcd199
  database: 'game'
})


export default db ;