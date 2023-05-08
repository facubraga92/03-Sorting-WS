function swap(arr, i, j) {
    let tempArr = arr[i];
  
    arr[i] = arr[j];
    arr[j] = tempArr;
  }

function bubbleSort(array) {
  if (array.length < 1) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length-1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  }
  return array;
}





let array  = [5,4,3,2,1]

console.log(bubbleSort(array))

