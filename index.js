var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var search = 8
var array=[1,2,3,4,1,2,3,4,8,13,24]


suite.add('Linier',function(){
    let linearSearch = (search, array) => {
        //write your code here
        for(let i=0;i<values.length;i++){
          if(target===values[i]){
            return i
          }
        }
        return -1
      }
})
.add('Binary',function(){
    function ownSort(arr) {
        // Your sorting code
        for (let i = 1; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
              let index1 = arr[j]
              let index2 = arr[i]
              arr[i] = index1;
              arr[j] = index2;
            }
          }
        }
        return arr;
      }
      
      function binary_search(search, array ,minMax) {
        // Your searching code
        let nilaiTengah = 0,min,max;// min =minMax[0], max = minMax[1];
        if(minMax===undefined){
          min=0;
          max=array.length-1;
        }else{
          min=minMax[0];
          max=minMax[1]
        }
        if (min > max) {
          return -1
        }else{
          nilaiTengah = Math.floor(min + max / 2);
          if (array[nilaiTengah] === search) {
            return nilaiTengah;
          } else if (search < array[nilaiTengah]) {
            return binary_search(search,array,[min,max=nilaiTengah-1])
          } else {
            return binary_search(search,array,[max,min=nilaiTengah+1])
          }
        }
      }
})

.on('cycle',function(event){
    console.log(String(event.target));
})
.on('complete',function(){
    console.log('Fastest is '+this.filter('fastest').map('name'))
})
.run({'async':true})