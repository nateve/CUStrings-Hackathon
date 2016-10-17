var express = require('express');
var Twitter = require('twitter');
var router = express.Router();


router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});


var client = new Twitter({
  consumer_key: 'sHndUIB5Obz6CKFj6IDacXnFc',
  consumer_secret: 'i1oqZhCC5kJJjfgMbCcEawKlqcTR9PSI53i3nWgKcWUvi45TXf',
  access_token_key: '786232481456414720-o9VxrRoX1mYQm8FHSLXt6IcvpxMljqG',
  access_token_secret: 'T1apaw81udzULOIblAqSalBw4HT2fhZuqQplRQ28Q96J4'
});
geocode = "40.1164204,-88.24338290000003,50mi"
query = "stress OR stressed OR stressing OR tired"

router.get('/about', function(req, res){
  client.get('search/tweets', {q: query, geocode: geocode, count: 20},function(error, tweets, response) {
        if(!error) {
            res.status(200).render('about', {
            title: 'About',
            tweets: tweets
            });
            console.log(tweets);
            for(i in tweets){
                console.log(tweets.text)
            }
        }
        else{
        res.status(500).json({ error: error });
        }
    });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});


module.exports = router;

