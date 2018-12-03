const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Twitter = require('twitter');
require('dotenv').config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN,
  access_token_secret: process.env.TOKEN_SECRET
});
const storeTweets = {};
client.get("search/tweets",{q:'%23IoT', count:100},function(error, tweets, response){
  storeTweets.tweets = tweets;
})


const SERVER_PORT = 4000;

app.use(bodyParser.json());
app.use(cors());
app.get('/tweets', (req, res) => {
  res.send(storeTweets.tweets);
});

app.listen(SERVER_PORT, () => {
  console.log(`server started on port ${SERVER_PORT}`)
});