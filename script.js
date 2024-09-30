
let arr = [1,4,6,0,2,-3]
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const currentElement = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  

    return arr;
  }

  insertionSort(arr)
    