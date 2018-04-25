var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    ejs         = require('ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
  res.render('index');
});

app.get("/:input", function (req, res) {
  var str = req.params.input;
  var dateInput = /[a-zA-Z]/.test(str) ? str : Number(str) * 1000;
  
  // console.log(str, /[a-zA-Z]/.test(str), Number(str));
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  var date = new Date(dateInput);
  
  var readableDate = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  
  var output = {
    unix: date.getTime() / 1000,
    natural: months[date.getMonth()] === undefined ? null : readableDate
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(output));
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Server initialised on PORT: ' + listener.address().port);
});
