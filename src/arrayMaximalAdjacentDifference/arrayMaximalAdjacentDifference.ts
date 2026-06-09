export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDf = 0;
        for(let i = 1; i < inputArray.length-1; i++){
            const df = Math.abs(inputArray[i]-inputArray[i-1])
            if(df > maxDf){maxDf = df}
        }
        return maxDf
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));