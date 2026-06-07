export function arrayChange(inputArray: number[]): number {

    let totalIncrease = 0;
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            totalIncrease += inputArray[i - 1] - inputArray[i] + totalIncrease + 1;
        }
    }
    return totalIncrease;


}

console.log(arrayChange([1, 1, 1]));