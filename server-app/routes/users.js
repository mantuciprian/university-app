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

module.exports = router;
