export function addBorder(picture: string[]): string[] {
    let asterisks = '**';
    for(let i=0;i<picture[0].length;i++){
        asterisks.concat('*');
    }
    let boarders = [];
    for(let i=0;i<picture.length;i++){
        boarders.push('*'+picture[i])
    }
    boarders.unshift(asterisks);
    boarders.push(asterisks);
    return boarders;
}

console.log(addBorder(["abc", "ded"]))