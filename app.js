var express = require("express");
var app = express();

//Définition du moteur de template
app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))

app.get('/', (request, response) => {
	response.render("accueil")
})



app.listen(3000, (res, req) => {
	
})