function spinWords(string){
    return string.split(' ').map(s => s.length >=5 ? s.split('').reverse().join('') : s).join(' ')
}

console.log(spinWords("Hey fellow warriors"))