exports.min = function min (array) {
  let min ;
  if ( Array.isArray(array) && array.length !== 0) {
   min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
    }
}
return min;
  }
else {
return 0;
}
}

exports.max = function max (array) {
  let max;
  if (Array.isArray(array) && array.length !== 0) {
    max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]
    }
  }
  return max;
}
else {
  return 0;
}  
}

exports.avg = function avg (array) {
  let sum = 0;
  if ( Array.isArray(array) && array.length !== 0) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
else {
  return 0;
}
}
