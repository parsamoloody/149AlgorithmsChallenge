export function alphabeticShift(inputString: string): string {
    let str = '';
    for (let i = 0; i < inputString.length; i++) {
        const cr = inputString.charCodeAt(i) + 1
        str += String.fromCharCode(cr)
    }
    return str
}

console.log(alphabeticShift('crazy'));
// I think it's will be = dsb{z