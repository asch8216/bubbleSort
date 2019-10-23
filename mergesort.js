function split(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.ceil(arr.length / 2);
  let arr1 = arr.slice(0, middle);
  let arr2 = arr.slice(middle);
  return [arr1, arr2];
}

function merge(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  let mergedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      let shifted = arr1.shift();
      mergedArr.push(shifted);
    } else {
      let shifted = arr2.shift();
      mergedArr.push(shifted);
    }
  }
  if (arr1.length) {
    mergedArr = mergedArr.concat(arr1);
  }
  if (arr2.length) {
    mergedArr = mergedArr.concat(arr2);
  }
  return mergedArr;
}

const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }
  let splitArr = split(array);
  let left = mergeSort(splitArr[0]);
  let right = mergeSort(splitArr[1]);

  let mergedArr = merge([left, right]);

  return mergedArr;
};

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] && arr2[i]) {
//     if (arr1[i] < arr2[i]) {
//       mergedArr.push(arr1[i]);
//       mergedArr.push(arr2[i]);
//     } else {
//       mergedArr.push(arr2[i]);
//       mergedArr.push(arr1[i]);
//     }
//   } else {
//     mergedArr.push(arr1[i]);
//   }
// }
// return mergedArr;
