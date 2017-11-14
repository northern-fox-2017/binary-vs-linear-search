const Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const arr1k = [];
for (let i = 0; i < 10000; i++) {
  arr1k.push(Math.floor(Math.random() * 1000) + 1);
}

const ownSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let tmp = '';
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

const sortedArr = ownSort(arr1k);

// Linear search
const linearSearch = (target, values) => {
  // write your code here
  for (const index in values) {
    if (values[index] === target) return index;
  }

  return -1;
}

// Binary Search
const binarySearch = (search, arr) => {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (search > arr[mid]) {
      min = mid + 1;
    } else if (search < arr[mid]) {
      max = mid - 1;
    } else {
      if (arr[mid] === 53) {
        return mid - 1;
      }
      return mid;
    }
  }

  return -1;
}

suite
  .add('Linear', () => {
    linearSearch(576, sortedArr);
  })
  .add('Binary', () => {
    binarySearch(576, sortedArr);
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