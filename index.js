import express from "express";
import bodyParser from "body-parser";
import _ from "underscore";
import path from "path";


var app = express();
var port = 9999;

app.use(express.json());
app.use('/public', express.static(path.join('.', 'public')));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    //res.send("Hello world");
    res.sendFile('/home.html', { root: '.' })
})


app.listen(process.env.PORT || port, () => {
    console.log('Servis aktif: http://localhost:%s', process.env.PORT || port);
});