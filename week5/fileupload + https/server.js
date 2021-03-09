var https = require('https');
var fs = require('fs'); // Using the filesystem module

var credentials = {
  key: fs.readFileSync('star_itp_io.key'),
  cert: fs.readFileSync('star_itp_io.pem')
};

var datastore = require('nedb');
var db = new datastore({ filename: 'database.json', autoload: true });

var express = require('express');
var multer  = require('multer');
var bodyParser = require('body-parser');
var app = express();

var upload = multer({ dest: 'public/uploads/' });

var urlencodedBodyParser = bodyParser.urlencoded({extended: true});
app.use(urlencodedBodyParser);

app.use(express.static('public'));

app.set('view engine', 'ejs');

var submittedData = [];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/displayrecord', function (req, res) {
  db.find({_id: req.query._id}, function(err, docs) {
    var dataWrapper = {data: docs[0]};
    res.render("individual.ejs", dataWrapper);
  });
});

app.post('/formdata', upload.single('photo'), function (req, res) {

    console.log(req.file);

    if (req.file.mimetype == "image/jpeg" || req.file.mimetype == "image/png") {

      console.log(req.body.data);

      var dataToSave = {
        file: req.file,
        text: req.body.data,
        color: req.body.color,
        longtext: req.body.longtext
      };

      db.insert(dataToSave, function (err, newDoc) {  
        db.find({}, function(err, docs) {
      
          var dataWrapper = {data: docs};
          res.render("outputtemplate.ejs",dataWrapper);
    
        });      
      });
    }
    else {
      fs.unlink(req.file.path, function(err) {
        if (err) { 
          console.log(err)
        } else {
          console.log(req.file.path + ' was deleted');
        }
      });
      res.send("Not an image file!");
    }

    
});

var httpsServer = https.createServer(credentials, app);

// Default HTTPS Port
httpsServer.listen(8443);