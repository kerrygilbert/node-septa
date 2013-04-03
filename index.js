var http = require('http');

module.exports = septa;

function septa() {
  return new septa.Septa();
}

septa.Septa = function() {
  var self = this;

  /* Makes an http request and attempts to turn the response data into a JSON object */
  self.getJSON = function(options, callback) {
    var req = http.request(options, function(res) {
      var output = '';
      res.setEncoding('utf8');

      res.on('data', function (data) {
        output += data;
      });

      res.on('end', function() {
        var obj = JSON.parse(output);
        callback(obj);
      });
    });

    req.on('error', function(err) {
      res.send('error: ' + err.message);
    });

    req.end();
  };  

  /* A sample function that builds out an options object with info pertinent to SEPTA's API,
  calls getJSON and then  */ 
  self.getBus = function(route, callback) {
    var options = {
      host: 'www3.septa.org',
      path:'/hackathon/TransitView/'+route,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    self.getJSON(options, function(data) {
      console.log(data)
      callback(data);
    }); 
  }
}