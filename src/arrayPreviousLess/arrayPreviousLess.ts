export function arrayPreviousLess(items: number[]): number[] {
    let result = [-1]

    for (let i = 1; i < items.length; i++) {
        const smallest = Math.max(...items.slice(i - 1, i));
        if (smallest > items[i]) { result.push(-1) }
        else { result.push(smallest) }
    }

    return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));