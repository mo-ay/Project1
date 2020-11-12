import app from './app'
import db from './db'


app.listen( 8080, () => console.log('server listening on port 8080') )

//test your database connection
app.get('/', function (req, res) {
  
    db.connect()
    db.query("SELECT username,password from admin ", function (err, rows,fields) {
        if(err) throw err
        if (rows.length !== 0) {
            res.send(rows)
          }
        else {
            console.log("no exist");
            
        }
    });
    db.end()
  
  });