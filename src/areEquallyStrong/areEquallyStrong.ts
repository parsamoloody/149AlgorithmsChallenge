export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    const yourFriendStro = Math.max(yourLeft, yourRight);
    const yourWeakest = Math.min(yourLeft, yourRight);
    
    const friendsStrongest = Math.max(friendsLeft, friendsRight);
    const friendsWeakest = Math.min(friendsLeft, friendsRight);
    
    return yourFriendStro === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
