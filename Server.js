const fs = require('fs')
var mysql = require('mysql');
const http = require('http');
const express = require('express')
const app = express()
app.use(express.json())

////////sql////////////////

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "125000",
    database:'magti'
  });


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");     
    
});

/////////sql end//////////





const javshani=(req,res)=>{

        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');

// console.log(req.url)
// res.send('post from get')
          console.log(req.params.data1)
          console.log(req.params.data2)
          con.query(`insert into bakuriani.bakuriani_data(saxeli,lastname,piradoba,javshnis_dasackisi,javshnis_dasasruli,mobile_number)
                   values('${req.params.saxeli}',
                   '${req.params.gvari}',
                   '${req.params.piradi_nomeri}',
                   '${req.params.data1}',
                   '${req.params.data2}',
                   '${req.params.mobiluris_nomeri}')`,function(errr,result,field){         
         console.log(result.length) 
        //  res.send(' chacerilia')
        })


           }
const moizebna=(req,res)=>{
    
}


const mozebna1=(req,res)=>{

        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');

        console.log(req.params.data3)

con.query(`select * from bakuriani.bakuriani_data where javshnis_dasackisi like '${req.params.data3}'`,function(errr,result1,field){
  res.send(result1)
})
// console.log('result1')
// res.send('from zebna')  
//   res.send('aris postman')
// console.log(req.url)
// res.send('result')
}

app.route('/app/:data1?/:data2?/:saxeli?/:gvari?/:piradi_nomeri?/:mobiluris_nomeri?').get(javshani)


// app.route('/app/zebna/:data1?').get(moizebna)

app.route('/zebna/:data3?').get(mozebna1)

app.listen(1000,'127.0.0.1',()=>{
    console.log('i em listenining on 1000 port ')
})