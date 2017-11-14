var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var search = 5;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 1000, 10000, 1000000];

// add tests
suite.add('Linear', function () {
        function linear(search, array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === search) {
                    return i;
                }
            }
            return -1;
        }
    })
    .add('Binary', function () {
        function binary(search, array) {
            var minIdx = 0;
            var maxIdx = array.length - 1;

            while (minIdx <= maxIdx) {
                var midIdx = Math.round((minIdx + maxIdx) / 2);
                if (search < array[midIdx]) {
                    maxIdx = midIdx - 1;
                } else if (search > array[midIdx]) {
                    minIdx = midIdx + 1;
                } else {
                    return midIdx;
                }
            }
            return -1;
        }
    })

    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({
        'async': true
    });

// Binary is the fastest method for this case