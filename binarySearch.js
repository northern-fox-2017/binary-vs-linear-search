'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]


function ownSort(arr) {
  let result = []
  let i = 1
  while (arr.length > 0) {
    const index = arr.indexOf(i)
    if (index !== -1) {
      result.push(i)
      arr.splice(index, 1)
    } else {
      i++
    }
  }
  return result
}

let binary_search = (search, array) => {
  array = ownSort(array).slice(0)
  var minIndex = 0
  var maxIndex = array.length - 1

  while (minIndex <= maxIndex) {
    var midIndex = Math.floor((minIndex + maxIndex) / 2)
    if (array[midIndex] === search) {
      return midIndex
    }
    if (search < array[midIndex]) {
      maxIndex = midIndex - 1
    } else {
      minIndex = midIndex + 1
    }
  }
  return -1;
}

module.exports = {
  binary_search
}
