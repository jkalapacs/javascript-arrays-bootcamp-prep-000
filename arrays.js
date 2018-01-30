var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
    return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element){
<<<<<<< HEAD
    arr.unshift(element)
=======
    arr[0] =  element
>>>>>>> 82ef0f5e0470dfe1535a20dd825eb6bbd1f1c9bb
    return arr
}

function addElementToEndOfArray(arr, element){
    return [...arr, element]
}

function destructivelyAddElementToEndOfArray(arr, element){
<<<<<<< HEAD
    arr.push(element)
    return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr, element){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray (arr, element){
  var arrr = arr.slice(1)
  return arrr
}

function destructivelyRemoveElementFromEndOfArray(arr, element){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr, element){
  var arrr = arr.slice(0, arr.length -1)
  return arrr
=======
    arr =  [...arr, element] 
    return arr
>>>>>>> 82ef0f5e0470dfe1535a20dd825eb6bbd1f1c9bb
}