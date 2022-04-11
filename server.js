const express = require('express');

const app = express();

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


var fcm = require('fcm-notification');
var Tokens = [ 'token1 here', '....', 'token n here'];
var FCM = new fcm('./fir-2842f-firebase.json');
 
var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  notification:{
    title : 'Navish',
    body : 'Test message by navish'
  }
};
FCM.sendToMultipleToken(message, Tokens, function(err, response) {
    if(err){
        console.log('err--', err);
    }else {
        console.log('response-----', response);
    }
 
})
 