'use strict';

const Twitter = require('twitter');

module.shareToTwitter = function (values) {

  var client = new Twitter (
    {
      consumer_key: values.consumer_key,
      consumer_secret: values.consumer_secret,
      access_token_key: values.access_token_key,
      access_token_secret: values.access_token_secret
  });

  client.post('statuses/update', {status: values.message}, function(error, tweet, response){
    if (!error) { throw error };
      console.log(tweet);
      console.log(response);
  });

}
