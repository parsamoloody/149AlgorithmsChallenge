export function arrayPreviousLess(items: number[]): number[] {
    let result = [-1]
    for (let i = 1; i < items.length; i++) {
        // Check for smallest item start from the left side(reverce)
        const smallest = Math.max(...items.slice(i - 1, i));
        // check for if smallest to push the value, otherwise, push -1
        (smallest > items[i]) ? result.push(-1) : result.push(smallest)
    }
    return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5])); // [-1, 3, -1, 2, 4]