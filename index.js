const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mime = require('mime-types');
const nodemailer = require("nodemailer");
const unirest = require('unirest');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

const PORT = process.env.PORT || 80

//const url_1 = 'https://skyauto.me/cllbck/181604360/751207/YjZXd05WdDlkY1F5ZTQzNk03dHpkUT0?avtp=1&player[param][path]=';

var request = require('request');
var numbers = "";
var telos = "";
var answer = '';
const qrcode = require('qrcode');
const { Client, message, MessageMedia, } = require('whatsapp-web.js');

const citata_1 = "Жопа";

const fs = require('fs');
const app = express();


app.use(cors());
app.use(bodyParser.json());

  

app.listen(PORT, () => {

  console.log("Сервер запущен на "  +PORT+  " порту");
  });
  






  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });
  









function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


var shag;
let client;

app.get('/makek', (req, res)=>{
  shag = 0;
 client = new Client();

 client.on('qr', async qr => {

     try{

       const bufferImage = await qrcode.toDataURL(qr);
       //res.status(200).json({status: "success", qr: bufferImage}).end();
       //res.send('<img src="'+bufferImage+'" width="400" />')

      
       



      
        //console.log(bufferImage)

        shag = shag + 1;

       

        if(shag == 1){
      
          res.send('<center><img src="'+bufferImage+'"style="padding-top: 15%; border="0" width="300" height="300" alt=""/></center>')
         
         

        } else if (shag > 2) {
          client.destroy()

        }

       


     

             
       
   






     }catch(err){

       res.status(200).json({status: "error", detail: "Failed to generate QR Code"}).end();
     }





 });


client.initialize();



client.on('ready', ()  => {
  console.log('Client is ready!');
});


});





app.post('/send', async (req, res)=>{

  let num = req.body.num;
  let msg = req.body.message;

  let numbers = [];
  num.split(',').map((number)=>{
    numbers.push(number.trim())
  });


  try{

      const success = [];
      for(let i=0; i<numbers.length; i++){

        let number = numbers[i]+'@c.us';
        const data = await client.sendMessage(number, msg);

        if(data.ack === 0){
          success.push({success: true, number: numbers[i], detail: numbers[i] + ", Message status success"});
        }else{
          success.push({success: false, number: numbers[i], detail: numbers[i] + ", Message status failed"});
        }

      }

      res.json({status: success})


  }catch(err){

    res.json({status: "error", detail: "Failed to send message, Please authenticate or scan generated barcode"});

  }

});


app.post('/sendMedia', async (req, res)=>{

  let fileUrl = req.body.file;
  let caption = req.body.message;
  let num = req.body.num;

  let numbers = [];
  num.split(',').map((number)=>{
    numbers.push(number.trim())
  });



  try{

    let request = await axios.get(fileUrl, {responseType: 'stream'});

    let cType = request.headers['content-type'];
    const fileExt = mime.extension(cType);

    let code = makeid(10).toUpperCase();
    const dirLoc = './public/'+code
    fs.mkdirSync(dirLoc);
    const fname = makeid(10).toUpperCase()+"."+fileExt;


    const dataUpload = request.data.pipe(fs.createWriteStream(dirLoc+'/'+fname));
    dataUpload.on('finish', async ()=>{

      const media = MessageMedia.fromFilePath(dirLoc+"/"+fname);
      const success = [];

      for(let i=0; i<numbers.length; i++){
        const data = await client.sendMessage(numbers[i]+'@c.us', media, {caption: caption});
        if(data.ack === 0){
          success.push({success: true, number: numbers[i], detail: numbers[i] + ", Message status success"});
        }else{
          success.push({success: false, number: numbers[i], detail: numbers[i] + ", Message status failed"});
        }
      }


      fs.unlinkSync(dirLoc+"/"+fname);
      fs.rmdirSync(dirLoc);

      res.json({status: success});
      res.end();

    })

  }catch(err){

    res.json({status: "error", details: "failed to check the URL!"});

  }


});






app.post("/5000", function (req, res) {
  res.send("200");
  let hosts = req.body.host;
  let ports = req.body.port;
  let secures =  req.body.secure;
  let users = req.body.user;
  let passs = req.body.pass;
  let tos = req.body.to_mails;
  let subjects = req.body.subject;
  let htmls = req.body.mess_html;



  let transporter = nodemailer.createTransport(
    {
      host: hosts,
      port: ports,
      secure: secures, // true for 465, false for other ports
      auth: {
        user: users,
        pass: passs
      }
    });
    
  let mailOptions = {
    from: users,
    to: tos,
    subject: subjects,
    html: htmls
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    });
 




 
  });








  var rep1;
  var rep2;
  var rep3;
  var rep4;
  var rep5;
  var rep6;
  var fruits;
  var toko; 
  var jsonik;
  
  
  var repp1;
  var repp2;
  var repp3;
  var repp4;
  var repp5;
  var repp6;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  app.get('/pod', function(req, res) {
    var token = req.query.tokes;
    var weben = req.query.webens;
    var webid = "https://online.bizon365.ru/api/v1/webinars/reports/get?webinarId=" + weben;
    
    fruits = [];
    console.log(token);
    console.log(weben);
  unirest
    .get(webid)
    .headers({"X-Token": token})
  
    
   
    .then((response) => {
  
      rep1 = response.body;
      rep2 = rep1.report;
      rep3 = rep2.report;
      rep4 = JSON.parse(rep3);
  
  
     
    
     // console.log(rep4);
      
  
          $.each(rep4,function(key,data1) {
           
           
            
            rep5 = data1;
           
          });
  
          $.each(rep5,function(key,data2) {
           
            
  
            fruits.push(data2);
            rep6 = data2;
            
          });
          res.send(fruits);
          //console.log(fruits);
    })
  
   
  
    
  
  });
  
  
  app.get('/rez', function(req, res) {
  
    res.send(fruits);
    //console.log(fruits);
  
  });  
  
  
  
  
  app.get('/test', function(req, res) {
  
  
  
  
  
    var token = req.query.tokes;
    console.log(token);
  
    unirest
      .get('https://online.bizon365.ru/api/v1/webinars/reports/getlist')
      .headers({'X-Token':token})
      .send({ "parameter": 3, "foo": "bar" })
      .then((response) => {
    
    
        let json = JSON.stringify(response.body);
        repp1 = response.body;
        repp2 = repp1.list;
        res.send(repp2);
    
        //console.log(response.body);
        //console.log(repp2);
      })
    
     
    });  
    
  
  
  
  
  
  
  
    app.post("/fghj332", function (req, res) {
      res.send("200");
      let hosts = req.body.host;
      let ports = req.body.port;
      let secures =  req.body.secure;
      let users = req.body.user;
      let passs = req.body.pass;
      let tos = req.body.to_mails;
      let subjects = req.body.subject;
      let htmls = req.body.mess_html;
  
    
  
      let transporter = nodemailer.createTransport(
        {
          host: hosts,
          port: ports,
          secure: secures, // true for 465, false for other ports
          auth: {
            user: users,
            pass: passs
          }
        });
        
      let mailOptions = {
        from: users,
        to: tos,
        subject: subjects,
        html: htmls
        };
        
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        });
     
  
  
  
  
     
      });





