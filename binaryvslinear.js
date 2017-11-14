var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var search = Math.random();
var array = Array(1000000).fill(Math.floor(Math.random() * 9));;

// add tests
suite.add('linear_search', function() {
  let linearSearch = (search, array) => {
  var index = -1

  for(let i = 0; i < array.length; i++) {
    if(array[i] === search) {
      return i;
    }
  }
  return index;
}
})
.add('binary_search', function() {
  function ownSort(arr) {
  let tempNum;

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        tempNum = arr[j];
        arr[j] = arr[i];
        arr[i] = tempNum;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  let startIdx = 0;
  let endIdx = array.length-1;

  while(startIdx <= endIdx) {
    let midIndex = Math.floor((startIdx + endIdx) / 2);
    if(search > array[midIndex]) {
      startIdx = midIndex + 1;
    } else if(search < array[midIndex]) {
      endIdx = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
