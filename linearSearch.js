

// Release 0
//console.log("Linear Search")
let linearSearch = (target, values) => {
  for(var i=0; i < values.length; i++){
    if(values[i] === target){
      return i
    }
  }
  return -1
}


module.exports = {
  linearSearch,

}
