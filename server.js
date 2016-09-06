var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var querystring = require('querystring');
var https = require('https');

var host = 'api.kabbage.com';


// parse application/json, this will make the request body to json format so req.body can access the properties
app.use(bodyParser.json());

app.use(express.static('src/'));

function performRequest(endpoint, method, data, success) {
  var headers = {};

  var postData = querystring.stringify(data);
  headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  };

  var options = {
    host: host,
    path: endpoint,
    port: 443,
    headers: headers,
    method: method,
  };

  var req = https.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
      success(responseString);
    });

    res.on('error', function(error) {
      console.error(error);
    });
  });

  //before the request is sent out, we write data to request body
  req.write(postData);

  req.end();
}

app.post('/data', function(req, res) {
  performRequest('/v2/prequalify', 'POST', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    businessName: req.body.businessName,
    phoneNumber: req.body.phoneNumber,
    yearStarted: req.body.yearStarted,
    estimatedFICO: req.body.estimatedFICO,
    estimatedAnnualRevenue: req.body.estimatedAnnualRevenue,
    grossPercentageFromCards: req.body.grossPercentageFromCards,
    typeOfBusiness: req.body.typeOfBusiness,
    api_key: 'vauwg9sbqkrdnzdmr7eyk92t'
  }, function(data) {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log('App listening on port' + port + '!');
});
