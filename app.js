var express = require("express");
var app = express();

//Définition du moteur de template
app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

var routes = require('./route/route')
app.use('/', routes)



app.listen(3000, (res, req) => {
	console.log("omg i lister to 3000 ocsef on ciojpren ")
})






