var request = require("request");

var options = { method: 'POST',
  url: 'https://five-stone.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"oBnb2LKsa6AkRwPPDZoa3GHoYmoq13H4","client_secret":"B0D5kFe5RW8IHs9zfPGyYzq2eciHzpqMOzLgtipTHIsMXxkirhOzIsvy_oHY1GLp","audience":"fs-portal","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});