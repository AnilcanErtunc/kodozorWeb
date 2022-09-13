import express from "express";
var app = express();
var port = 9999;
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello world");
})


app.listen(process.env.PORT || port, () => {
    console.log('Servis aktif: http://localhost:%s', process.env.PORT || port);
});