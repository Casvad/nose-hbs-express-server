const express = require('express')
const hbs = require('hbs');
require('./hbs/helpers')
const app = express()

var port = process.env.PORT || 8080;
app.use ( express.static( __dirname + '/public') )
//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
   res.render('home', {
       nombre : 'Carlos Sanchez'
   })
 })

 app.get('/about', function (req, res) {
    res.render('about')
  })
 
app.listen(port)

