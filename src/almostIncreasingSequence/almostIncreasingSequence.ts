export function almostIncreasingSequence(sequence: number[]): boolean {
    let notSequence = 0;
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            notSequence++
            if (notSequence > 1) return false;

            if (i > 1 && i < sequence.length - 1
                && sequence[i] <= sequence[i-2] && sequence[i-1] 
            ) {return false}
        }
    }
    return true;
}

almostIncreasingSequence([1, 3, 2, 1]);
almostIncreasingSequence([1, 3, 2]);    
