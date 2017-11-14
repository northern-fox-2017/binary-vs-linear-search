var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    target = 22,
    random_numbers = [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ];

suite.add('linear Search', function() {
  for (var i in random_numbers) {
    if (target === random_numbers[i]) {
      return i;
    }
  }
  return -1;
})
.add('Binary Search', function() {
  var startIndex = 0,
      stopIndex = random_numbers.length - 1,
      middle = Math.floor((stopIndex + startIndex) / 2)

  while (random_numbers[middle] !== target && startIndex < stopIndex) {
    if (target < random_numbers[middle]) {
      stopIndex = middle - 1
    } else if (target > random_numbers[middle]) {
      startIndex = middle + 1
    }
    middle = Math.floor((stopIndex + startIndex) / 2)
  }
  return (random_numbers[middle] !== target) ? -1 : middle;
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is : ' + this.filter('fastest').map('name'));
})
.run({'async' : true})
