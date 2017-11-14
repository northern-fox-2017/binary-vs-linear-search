var Benchmark = require('benchmark');
// var BinSearch = require('./binary');
// var LinSearch = require('./linear_search')

var suite = new Benchmark.Suite;

var arrayTest = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44];
var search = 55;

// add tests
suite.add('binarySearch', function() {
    
    function ownSort(arr) {
        // Your sorting code
        for (let i = 0 ; i < arr.length; i++){
          let j = i;
          while ((arr[j] < arr[j-1]) && (j >= 0) ){
            let swapTemp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = swapTemp;
            j--
          }
        }
        return arr
      }
      
      function binarySearch (search, arrayTest) {
      
        function midIdx(beginIdx, endIdx){
          return Math.floor( (beginIdx + endIdx)/ 2 ) 
        }
        let midIndex = midIdx(0, array.length - 1);
        if ( array.length === 0 ){
          return -1;
        } else {
          if( array[midIndex] === search){
            return midIndex;
          } else if ( array[midIndex] > search ){
            let leftArr = array.slice(0, midIndex);
            return binarySearch(search, leftArr);
          } else {
            let rightArr = array.slice(midIndex+1, array.length)
            if ( binarySearch(search, rightArr) === -1 ){
              return -1;
            } else {
              return ( midIndex + 1 ) + binarySearch(search, rightArr);
            }
          }
        }
      }


})
.add('Linear Search', function() {
   
    let linearSearch = (target, arrayTest) => {
        //write your code here
        for (let i = 0 ; i < values.length; i++ ){
          if (values[i] === target){
            return i;
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