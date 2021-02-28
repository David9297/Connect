var datastore = require('nedb');
var db = new datastore({filename: 'database.json', autoload: true});

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/formdata', function (req, res) {
    console.log(req.query.text);
    console.log("Request Received");
    var dataToSave = {
        first_initial: req.query.first_initial,
        last_initial: req.query.last_initial,
        birth_month: req.query.birth_month,
        birth_date: req.query.birth_date,
        gamer_name: newName(),
    }
console.log(dataToSave.gamer_name);

    db.insert(dataToSave, function(err, newDoc) {
        db.find({}, function(err, docs) {
            //var dataWrapper = {data: newDoc};
            //res.render('outputtemplate.ejs', dataWrapper);
            res.send(docs);
        });
        // res.send(docs);
    });
});

app.listen(8000, function() {
    console.log('Example app listening on port 8000!')
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
