require('dotenv').config();
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('port', process.env.PORT || 3030);
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public")); // Para colocar la carpeta public con css, img
app.use(express.json());


app.get('/', function(req, res){
    res.render("home");
});


app.listen(app.get('port'), function () {
    console.log("Server started on port", app.get('port'));
});