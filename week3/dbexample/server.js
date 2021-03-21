var datastore = require('nedb');

var db = new datastore({filename: 'database.json', autoload: true});

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

app.get('/displayrecord', function(req, res) {
    db.find({_id: req.query._id}, function(err, docs) {
        var dataWrapper = {data: docs[0]};
        res.render("individual.ejs", dataWrapper);
    });
});

app.post('/formdata', function (req, res) {
    console.log(req.body);

    var dataToSave = {
        first_initial: req.body.first_initial,
        last_initial: req.body.last_initial,
        birth_month: req.body.birth_month,
        birth_date: req.body.birth_date,
        gamer_name: newName(),
        longtext: req.body.longtext
    }

    db.insert(dataToSave, function(err, newDoc) {
        // db.find({}, function(err, docs) {
            var dataWrapper = {data: newDoc};
            res.render('outputtemplate.ejs', dataWrapper);
        // });
    });
});

app.listen(8008, function() {
    console.log('Example app listening on port 8008!')
});

var gamerNames = [
    'Zany Snake',
    'Tallboy Yuppie',
    'Killer Beef',
    'Nefarious Nutcracker',
    'Prickly Pizza',
    'Living Metalhead',
    'Danny Menace',
    'Baptismal Globetrotter',
    'Peanut Galerie',
    'Angel Zombie',
    'President Avenger',
    'Life Vader',
    'Doctor Foxtrot',
    'Hispanic Raider',
    'Curd Burglar',
    'Tricky Troll',
    'Santa Slayer',
    'Brothers in Doom',
    'Dancing Snowball',
    'Societal Puppet',
    'Lance King',
    'Leader of the Park',
    'Lethal Lover',
    'Zumba Zebra',
    'Flabbergaster Felix',
    'Fallout Impersonator',
    'Mischievous Deviant',
    'Fishy Mistress',
    'Tech Foreigner',
    'Hunter Johnnyboi',
    'Mustard Pawn',
    'Stakey Marks',
    'Skyrim McDonald',
    'Halo Baller',
    'Pirate Eyeball',
    'Corona Killer',
    'Mushroom Stomper',
    'Sleeping Sister',
    'Italian Sonic',
    'Sixpack Armstrong',
    'Billy Bob Loser',
    'New Girl Sally'
]

function newName() {
    var randomNumber = Math.floor(Math.random() * (gamerNames.length));
    return gamerNames[randomNumber];
}
