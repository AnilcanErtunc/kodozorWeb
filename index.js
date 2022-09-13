import express from "express";
var app = express();
var port = 9999;
app.use(express.json());


app.get("/",() => {
    res.sendFile(path.join(__dirname, 'home.html'))
})


app.listen(port, () => {
    console.log('Servis aktif: http://localhost:%s', port);
});