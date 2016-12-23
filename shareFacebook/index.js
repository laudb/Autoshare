'use strict';

/* get a message and post it to facebook */

const FB = require('fb');

const access_token;

exports.shareToFacebook = function (values) {
    const msg = values.msg;
    const page_id = values.page_id;

    FB.setAccessToken(access_token);
    
    FB.api('/'+page_id+'/feed', 'post', {message: msg }, function (res) {
      if(!res || res.error) {
        console.log( !res ? 'error occurred' : res.error );
        return;
      }
      console.log('Post Id: '+ res.id);
    });
};
