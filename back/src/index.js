import { response } from 'express';
import app from './app'
import db from './db'




//test your database connection
app.get('/', function (req, res) {
  
    //db.connect()
    db.query("SELECT username,password from admin ", function (err, rows,fields) {
        if(err) throw err
        if (rows.length !== 0) {
            res.send(rows)
          }
        else {
            console.log("no exist");
            
        }
    });
   // db.end()
  })

   app.get('/search',(req,res)=>{
     db.query("SELECT * FROM games",(err,rows)=>{
       try{
         res.send(rows)
       }
       catch(err){
         console.log(err);
       }
     })
   })
     

 app.get('/search/:searchInput', (req, res)=>{
  const searchInput=req.params.searchInput;
    db.query(`SELECT id AS id, name, rate, imagepath, releasdate, post FROM games 
    WHERE name LIKE '%${searchInput}%'
    OR rate LIKE '%${searchInput}%'
    OR releasdate LIKE '%${searchInput}%'`
    ,(err,rows)=>{
      try{
          res.send(rows)
        }
       catch(err){
          console.log(err)
          console.log("erro in search by id query")
      }
    });
 })

app.listen( 8001, () => console.log('server listening on port 8001') )