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
    db.query(`SELECT id AS id, name, rate, imagepath, author, post, date, itchio_link FROM games 
    WHERE name LIKE '%${searchInput}%'
    OR rate LIKE '%${searchInput}%'
    OR author LIKE '%${searchInput}%'`
    ,(err,rows)=>{
    if (err) res.send(err);
    else{
          res.send(rows)}
        
       
    });
 })

 //-------------------------------------//Game Card CRUD API//--------------------------//
//-----------------------------------------------------------------//
 //                 Read Game  -- Tested on POSTMAN                 //
 //-----------------------------------------------------------------//
 app.get('/game/:id', (req, res)=>{
  const id=req.params.id;
    db.query(`SELECT id AS id, name, rate, imagepath, author, post, date, itchio_link FROM games 
    WHERE id=${id}`
    ,(err,rows)=>{
          if (err) throw err;
          res.send(rows)
        });
 })
 //-----------------------------------------------------------------//
 //                 Add Game  -- Tested on POSTMAN                  //
 //-----------------------------------------------------------------//
 app.post('/addgame', (req, res)=>{
  var postData=req.body; 
  console.log(postData);                                           
  db.query('INSERT INTO games SET ?',postData,(err,rows,fields)=>{
    if (err)throw err;
    res.send(rows)
  });
 });

 //-----------------------------------------------------------------//
 //                 Remove Game -- Tested on POSTMAN                //
 //-----------------------------------------------------------------//
 app.delete('/deletegame', (req, res)=>{
  console.log(req.body)                                            
  db.query('DELETE FROM games WHERE `id`=?',[req.body.id],(err,rows,fields)=>{
    if (err)throw err;
    res.send('GAME HAS BEEN DELETED');
  });
 });
 //-----------------------------------------------------------------//
 //                 Update Game -- Tested on POSTMAN                //
 //-----------------------------------------------------------------//

 app.put('/updategame', (req, res)=>{
                                              
  db.query('UPDATE `games` SET `name`=?,`rate`=?,`imagepath`=?,`author`=?,`post`=?, `date=?`,`itchio_link` WHERE `id`=?',
  [req.body.name, req.body.rate, req.body.imagepath, req.body.author, req.body.post, req.body.date, req.body.itchio_link,  req.body.id],
  (err,rows,fields)=>{
    if (err)throw err;
    res.send(JSON.stringify(rows));
  });
 });
//------------------------------------------------------------------------------------------------------// 
/********************Admin routes  ***************************/

 //-----------------------------------------------------------------//
 //                 login check  -- Tested on POSTMAN               //
 //-----------------------------------------------------------------//
 app.post('/login',(req,res)=>{
 
   var adminName = req.body.adminName
    var adminPassword = req.body.adminPassword
   
   db.query(`SELECT username,password from admin WHERE 
   username = '${adminName}' AND password = ${adminPassword}`, function (err, rows,fields) {
     console.log(adminName + " " + adminPassword)
    if(err) throw err
    if (rows.length !== 0) {
      console.log("pass")
        res.status(200).send("ok")
       
      }
    else {
      console.log("no pass")
      res.status(403).send("deny")
       }
 })
})

// app.get('/login',(req,res)=>{
//   var path = require('../../front/src/components/admin/');
// res.sendFile(path.resolve('login.js'));

// })
 
//******************Categories****************** */

 //-----------------------------------------------------------------//
 //                 Get all categories   -- Tested on POSTMAN                  //
 //-----------------------------------------------------------------//
app.get('/category',(req,res)=>{
  db.query("SELECT * FROM category",(err,rows)=>{
    try{
      res.send(rows)
    }
    catch(err){
      console.log(err);
    }
  })
})


 //-----------------------------------------------------------------//
 //                 Get  categories by id  -- Tested on POSTMAN                  //
 //-----------------------------------------------------------------//
 app.get('/categoryid/:id',(req,res)=>{
  const id=req.params.id;
  db.query(`SELECT * FROM category WHERE id=${id} `,(err,rows)=>{
    try{
      res.send(rows)
    }
    catch(err){
      console.log(err);
    }
  })
})

//-----------------------------------------------------------------//
 //                Add  categories   -- Tested on POSTMAN                  //
 //-----------------------------------------------------------------//
 app.post('/addcategory',(req,res)=>{

  const dataPost=req.body;
  db.query(`INSERT INTO category SET ? `,dataPost,(err,rows,fields)=>{
    if (err)throw err;
    res.send(rows)
  });
 });


 //-----------------------------------------------------------------//
 //                Update categories   -- Tested on POSTMAN                  //
 //-----------------------------------------------------------------//
 app.put('/updatecategory', (req, res)=>{
                                              
  db.query('UPDATE `category` SET `categories`=? WHERE `id`=?',
  [req.body.categories, req.body.id],
  (err,rows,fields)=>{
    if (err)throw err;
    res.send(JSON.stringify(rows));
  });
 });
 


//-----------------------------------------------------------------//
 //                 Remove categories-- Tested on POSTMAN                //
 //-----------------------------------------------------------------//
 app.delete('/deletecategory', (req, res)=>{
                                           
  db.query('DELETE FROM category WHERE `id`=?',[req.body.id],(err,rows,fields)=>{
    if (err)throw err;
    res.send('Category  HAS BEEN DELETED');
  });
 });


//******************Categories****************** */


app.listen( 8001, () => console.log('server listening on port 8001') )