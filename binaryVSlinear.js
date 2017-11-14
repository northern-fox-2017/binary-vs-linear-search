
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var target = 8;
var values = [ 10, 10, 18, 22, 22, 32, 40, 8, 90 ];
suite.add('Linear', function(){

  //let linearSearch = (target, values) => {
    for (var i = 0; i < values.length; i++) {
      if (values[i] == target) {
        return i
      }
    }
    return -1;
  //}
})
.add('Binary', function() {

  function ownSort(values) {
    var tampungPindahan = 0
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < i; j++) {
        if (values[i]<values[j]) {
          tampungPindahan = values[i];
          values[i] = values[j];
          values[j] = tampungPindahan;
        }
      }
    }
    return arr
  }

  function binary_search (target, values) {
    var result = -1;
    var startIndex = 0;
    var stopIndex = values.length-1;
    var midIndex = Math.floor((startIndex+stopIndex)/2);
    while (search != values[midIndex] && startIndex < stopIndex) {
      if (values[midIndex]< target) {
        startIndex = midIndex;
      }
      else if (values[midIndex]> target) {
        stopIndex = midIndex-1;
      }
      midIndex = Math.floor((startIndex+stopIndex)/2);
    }
    return (values[midIndex]==target)? midIndex : -1;
  }

})

.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
