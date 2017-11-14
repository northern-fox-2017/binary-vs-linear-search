var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var array =  [1,2,3,4,5,6,7,8,9]
var search = 4;

// add tests
suite.add('LiniearSearch', function() {
    let linearSearch = (search, array) => {
        
        //write your code here
        for(let i = 0; i<array.length;i++){
          if (search === array[i]){
            return i;
          }
      
        }
      
        return -1;
          
          
        
        
      
      }
  
})
.add('BinerySearch', function() {
      
      function binary_search (search, array) {
        debugger
        // Your searching code
        let awal  = 0;
        let akhir = array.length -1;
        
        while (awal<=akhir) {
          let midIndex = Math.round((awal + akhir)/2)
          if (search < array[midIndex]) {
            akhir = midIndex-1;
          }else if(search > array[midIndex]) {
            awal = midIndex+1;
            
          }else {
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