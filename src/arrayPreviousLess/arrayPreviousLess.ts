export function arrayPreviousLess(items: number[]): number[] {
    let lastSmallestes = [-1]
    for (let i = 1; i < items.length; i++) {
        const smallest = Math.max(...items.slice(i - 1, i));
        if (items[i] <= smallest) {
            lastSmallestes.push(-1)
        } else {
            lastSmallestes.push(smallest)
        }
    }
    return lastSmallestes
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));