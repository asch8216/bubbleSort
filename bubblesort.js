function bubbleSort(array) {
  /* your code here */
  if (array.length < 2) {
    return array;
  }

  let counter = 0;
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {
    let curElem = array[i];
    if (curElem > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swaps++;
    }
    counter++;
  }
  console.log("counter", counter);
  console.log("swaps", swaps);

  if (counter === array.length) {
    console.log(array);
    counter = 0;
    if (swaps === 0) {
      console.log(array);
      return array;
    } else {
      bubbleSort(array);
    }
  }

  return array;
}
