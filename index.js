var Benchmark = require('benchmark')
var suite = new Benchmark.Suite
var binary = require('./binarySearch').binary_search
var linear = require('./linearSearch').linearSearch
suite.add('Binary', function () {
  binary(8, [40, 18, 22, 32, 90, 10, 22, 8])
}).add('Linear', function () {
    linear(8, [40, 18, 22, 32, 90, 10, 22, 8])
  }).on('cycle', event => {
    console.log(String(event.target))
  }).on('complete', function () {
    console.log('fastest is' + this.filter('fastest').map('name'))
  }).run({
    async: true
  })
