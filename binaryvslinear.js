var Benchmark = require ('benchmark');
var suite = new Benchmark.Suite;

var target = 8,
    array = [1, 4, 8, 10]

// add tests
suite.add('Linear', function() {
//   /o/.test('Hello World!');
    var result = -1;
    for (var i = 0; i < array.length; i++) {
        if (target === array[i]) {
            result = i;
            break;
        } 
    }
    return result;
})
.add('Binary', function() {
//   'Hello World!'.indexOf('o') > -1;
    var end = array.length-1;
    var mid = Math.floor(end / 2);
    var index = 0;
    var start = mid + 1;        //console.log(array);

    for (var i = 0; i < array.length; i++) {  debugger
    if (target === array[mid]) {
        index = mid;
        break;
    } else if (target < array[mid]) {
        mid = Math.floor((mid-1) / 2);
    } else if (target > array[mid]) {
        start = end + 1;
        end = array.length - 1;
        mid = Math.floor((end - start) / 2);
    } else {
        index = -1;
    } 
    } //console.log('index: ' + index);debugger
    return index;
})
// .add('String#match', function() {
//   !!'Hello World!'.match(/o/);
// })
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });


/* OUTPUT
Linear x 31,570,431 ops/sec ±1.36% (74 runs sampled)
Binary x 189,639 ops/sec ±2.47% (63 runs sampled)
Fastest is Linear
*/
