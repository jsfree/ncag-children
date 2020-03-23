function sendText(){
const accountSid = 'ACec1f8876ec9e326f6fa06feaadea3eeb';
console.log(accountSid);
const authToken = '8deebb986b40e246de7feb1f03900085';
const client = require('twilio')(accountSid, authToken);

  client.messages.create({
      to: '+14096797160',
      from: '+12057089891',
      body: 'come get yo kid!'
  }) 
.then(message => console.log(message))
.catch(err=>console.log(err))
}