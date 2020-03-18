const accountSid = 'ACec1f8876ec9e326f6fa06feaadea3eeb';
const authToken = '8deebb986b40e246de7feb1f03900085';

  var twilio = require('twilio');

  var client = new twilio(accountSid, authToken);

  client.messages.create({
      to: '+14096797160',
      from: '+12057089891',
      body: 'come get yo kid!'
  })