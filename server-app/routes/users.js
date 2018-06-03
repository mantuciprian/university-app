var express = require('express');
var router = express.Router();
// var Client =  require('../node_modules/pg');
var app = express();
var logger = require('morgan');
const {Client} =  require('pg');
var cors = require('cors')


const client = new Client({
  user:'postgres',
  host:'localhost',
  database: 'university',
  password: 'ciprian',
  port: '5432'
})

client.connect();



/* GET users listing. */
router.get('/userData', (req, res)=> {
 
  //    res.send('hello')
     let sendData = res;
     const str = 'SELECT * FROM public."users"';
     client.query(str, (err, res) => {
         sendData.send(res.rows)
          // client.end()
       })

       
  });


  router.put('/userData', (req, res)=> {
    var body = req.body;
    console.log('attepting to log in ' + body.userName + ' / ' + body.password)
    console.log('user login attempt ' + body.userName + body.password)
    //    res.send('hello')
       let sendData = res;
       const userName = body.userName;
       const password = body.password;
       if(userName === password && userName !== '') {
         console.log(userName , password)
          const text = 'SELECT * FROM users WHERE username = $1 AND password = $2';
          const values = [userName, password];
          client.query(text, values, (err, res) => {
          sendData.send(res.rows[0]);
        })
       } else {
         throw 'user not found!'
       }
 

  
         
    });


    router.put('/register', (req, res)=> {
      var body = req.body;
      var sendData = res;
      console.log('attepting to register ' + body.userName + ' / ' + body.password + ' / ' + body.firstName + ' / ' + body.lastName + ' / ' 
      + body.recovery      + ' / ' + body.recoveryAns      + ' / ' + body.role + ' / '  + body.email
    )

     var userName = body.userName;
     var password = body.password;
     var firstName = body.firstName;
     var lastName  = body.lastName ;
     var recovery  = body.recovery ;
     var recoveryAns = body.recoveryAns;
     var role = body.role;
     var email = body.email;
     var authorization = false;

     var checkData = [userName, password, firstName, lastName , recovery, recoveryAns, role, email, authorization];

     var dataCorrect = true;

     checkData.map((v) => v === '' ? dataCorrect = false : dataCorrect);
     
     if(dataCorrect) {
        console.log('data received');
      
       
        const text = 'INSERT INTO users("username", "password", "firstName", "lastName", "recoveryQuestion", "recoveryAnswer", "role" , "email", "authorization") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
        const values = [userName, password, firstName, lastName , recovery, recoveryAns, role, email, authorization];
        // callback
        client.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0]);
      sendData.send(res.rows[0].username)
    }
  });
     } else {
         throw 'data is incomplete!'
       }
    
           
      });


      router.put('/register/check', (req, res)=> {
        var body = req.body;
        console.log('checking avabiliy for ' + body.userName)
        //    res.send('hello')
        var sendData = res;
           const userName = body.userName;
           if(userName !== '') {
              const text = 'SELECT username FROM users WHERE username = $1';
              const values = [userName];
              client.query(text, values, (err, res) => {
                console.log('username: ' + res.rows[0]);
                if(res.rows[0]) {
                  sendData.send(false);
                } else {
                  sendData.send(true);
                }
              // sendData.send(res.rows[0]);
            })
           } else {
             throw 'data incorrect'
           }
     
    
      
             
        });
module.exports = router;
