var makerjs = require('makerjs');
var MyModel = require('./index.js');
console.log(makerjs.exporter.toSVG(new MyModel()));
