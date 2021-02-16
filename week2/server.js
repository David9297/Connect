var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedBodyParser = bodyParser.urlencoded({extended: true});
app.use(urlencodedBodyParser);

app.set('view engine', 'ejs');

app.use(express.static('public'));

var submittedData = [];

app.get('/', function(req, res) {
    res.send('Hello World!')
});

app.post('/formdata', function (req, res) {
    console.log(req.body.data);

    var dataToSave = {
        first_initial: req.body.first_initial,
        last_initial: req.body.last_initial,
        birth_month: req.body.birth_month,
        birth_date: req.body.birth_date
    }

    console.log(dataToSave);

    submittedData.push(dataToSave);

    console.log(submittedData);

    var output = "<html><body>"
    output += "<h1>Your Gamer Name is: </h1>";
    output += "</body></html>";
    res.render('submitted.ejs');
})

app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
});