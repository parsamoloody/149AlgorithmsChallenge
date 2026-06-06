export function areSimilar(a: number[], b: number[]): boolean {
    const df = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            df.push(i);
        }
    }

    if (df.length === 0) return true;

    if (df.length === 2) {
        const [i, j] = df;
        return a[i] === b[j] && a[j] === b[i];
    }

    return false;
}

// Example usage
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1])); 
