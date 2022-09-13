var express = require("express");
var bodyParser = require("body-parser");
var _ = require("underscore");
var path = require("path");
var app = express();
var port = 9999;


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.post("/giris",function(req,res){
    let body = _.pick(req.body, "username","pw");
    if(body.username == "anilcan"){
         if(body.pw == "anilcan")
         {
            res.send("Merhaba "+body.username);
         }
         else{
            res.send("Hatalı parola");
         }
    }
    else{
        res.send("Kullanıcı adı hatalı");
    }
   
})

app.post("/kaydol",function(req,res){
    let body = _.pick(req.body, "username","pw","ad","soyad");
    res.send(body.username);
})

app.listen(port,function(req,res){

    console.log('Servis aktif: http://localhost:%s', port);
});