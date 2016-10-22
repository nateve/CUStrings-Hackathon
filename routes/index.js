var express = require('express');
var Twitter = require('twitter');
var router = express.Router();
var fs = require('fs');
var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


router.get('/', function(req, res){
  res.render('index', {
    title: 'CU Strings'
  });
});

router.post('/', function(req,res){
  var emotion = req.body.emotion
  res.redirect('/search/' + emotion);
})


var client = new Twitter({
  consumer_key: 'sHndUIB5Obz6CKFj6IDacXnFc',
  consumer_secret: 'i1oqZhCC5kJJjfgMbCcEawKlqcTR9PSI53i3nWgKcWUvi45TXf',
  access_token_key: '786232481456414720-o9VxrRoX1mYQm8FHSLXt6IcvpxMljqG',
  access_token_secret: 'T1apaw81udzULOIblAqSalBw4HT2fhZuqQplRQ28Q96J4'
});
geocode = "40.109309,-88.228389,15mi"
//query = "stress OR stressed OR stressing OR tired"

router.get('/search/:emotion', function(req, res){
  var query = req.params.emotion
  client.get('search/tweets', {q: query, geocode: geocode, count: 20},function(error, tweets, response) {
        if(!error) {
            res.status(200).render('search', {
            title: 'CU Strings',
            emotion: req.params.emotion,
            tweets: tweets
            });
        }
        else{
          res.status(500).json({ error: error });
        }
    });
});


router.get('/about', function(req, res){
  res.render('about', {
    title: 'CU Strings'
  });
});


module.exports = router;

