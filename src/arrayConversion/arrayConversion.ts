export function arrayConversion(inputArray: number[]): number {
  let iteration = 1;
  let arr = inputArray;

  while (arr.length > 1) {
    const newArr: number[] = [];

    for (let i = 0; i < arr.length; i += 2) {
      if (iteration % 2 === 1) {
        newArr.push(arr[i] + arr[i + 1]);
      } else {
        newArr.push(arr[i] * arr[i + 1]);
      }
    }

    arr = newArr;
    iteration++;
  }

  return arr[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));