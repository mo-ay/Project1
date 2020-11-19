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

   app.get('/games',(req,res)=>{
     db.query("SELECT * FROM games",(err,rows)=>{
       try{
         res.send(rows)
       }
       catch(err){
         console.log(err);
       }
     })
   })
     

 app.get('/games/:searchInput', (req, res)=>{
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

 //-------------------------------------//Game Card CRUD API//--------------------------//

 //-----------------------------------------------------------------//
 //                 Add Game  -- Tested on POSTMAN                  //
 //-----------------------------------------------------------------//
 app.post('/games', (req, res)=>{
  var postData=req.body;                                            
  db.query('INSERT INTO games SET ?',postData,(err,rows,fields)=>{
    if (err)throw err;
    res.send(JSON.stringify(rows))
  });
 });

 //-----------------------------------------------------------------//
 //                 Remove Game -- Tested on POSTMAN                //
 //-----------------------------------------------------------------//
 app.delete('/games', (req, res)=>{
  console.log(req.body)                                            
  db.query('DELETE FROM games WHERE `id`=?',[req.body.id],(err,rows,fields)=>{
    if (err)throw err;
    res.send('GAME HAS BEEN DELETED');
  });
 });
 //-----------------------------------------------------------------//
 //                 Update Game -- Tested on POSTMAN                //
 //-----------------------------------------------------------------//

 app.put('/games', (req, res)=>{
                                              
  db.query('UPDATE `games` SET `name`=?,`rate`=?,`imagepath`=?,`releasdate`=?,`post`=? WHERE `id`=?',
  [req.body.name, req.body.rate, req.body.imagepath, req.body.releasdate, req.body.post, req.body.id],
  (err,rows,fields)=>{
    if (err)throw err;
    res.send(JSON.stringify(rows));
  });
 });
//------------------------------------------------------------------------------------------------------// 


app.listen( 8001, () => console.log('server listening on port 8001') )