export function avoidObstacles(inputArray: number[]): number {
    const sorted = inputArray.sort((a, b) => a - b);
    const mxcle = sorted[sorted.length - 1];

    for (let jump = 2; jump <= mxcle + 1; jump++) {
        let works = true;
        for (let pos = jump; pos <= mxcle; pos += jump) {
            if (sorted.includes(pos)) {
                works = false;
                break;
            }
        }
        if (works) {
            return jump;
        }
    }
    return mxcle + 1;
}