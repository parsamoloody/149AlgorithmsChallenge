export function alphabetSubsequence(s: string): boolean {
  let charCodes = [];
  for(let i=0;i <s.length;i++){
    charCodes.push(s.charCodeAt(i))
  }
  return charCodes.slice(1).every((val, i) => val - charCodes[i] === charCodes[1] - charCodes[0]);

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
