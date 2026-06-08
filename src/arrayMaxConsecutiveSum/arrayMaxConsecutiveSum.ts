export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let maxSum = 0;
    
    let sumConsecutive = 0;
    for (let i=0;i < k;i++) {
        sumConsecutive += inputArray[i];
    }
    maxSum = sumConsecutive;
    
    for (let i=k;i < inputArray.length;i++) {
        sumConsecutive = sumConsecutive - inputArray[i - k] + inputArray[i];
        if (sumConsecutive > maxSum) {
            maxSum = sumConsecutive;
        }
    }
    
    return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));