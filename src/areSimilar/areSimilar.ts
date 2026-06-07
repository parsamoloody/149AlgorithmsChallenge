export function areSimilar(a: number[], b: number[]): boolean {
  let df:number[] = [];
  for(let i=0;i<a.length; i++){
     if(a[i] !== b[i]){
       df.push(i)
     };
  };
  if(df.length == 0) return true
  if(df && df.length == 2){
    let [x, z] = df;
    return a[x] == b[z] && a[z] == b[x]
  }
  return false;
    
}

// Example usage
console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false
