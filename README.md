node-septa
==========

A nodejs module that simplifies SEPTA's real-time data API. Uses data from http://www3.septa.org/hackathon.

#### find it on on NPM:
https://npmjs.org/package/node-septa

### Installation
```
$ npm install node-septa
```

### Usage
```javascript
var septa = require('node-septa')();

var myBusRoute = 57;
septa.getBus(myBusRoute, function(data){
  //outputs a whole blob of json courtesy of SEPTA
  console.log(data);
});
```
