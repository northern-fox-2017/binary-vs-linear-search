var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var search = 8
var array=[1,2,3,4,1,2,3,4,8,13,24]
var Linier = require('./linear_search');
var Binary = require('./binary')


suite.add('Linier',function(){
    Linier.linearSearch(search,[1,2,3,4,1,2,3,4,8,13,24]);
})
.add('Binary',function(){
    Binary.binary_search(search,[1,2,3,4,1,2,3,4,8,13,24])
})

.on('cycle',function(event){
    console.log(String(event.target));
})
.on('complete',function(){
    console.log('Fastest is '+this.filter('fastest').map('name'))
})
.run({'async':true})

