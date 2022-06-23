let num = [3,4,5,2,6]

console.log(num)
console.log(`o vetor tem ${num.length} posições.`)
console.log(`o primeiro numero do vetor é ${num[0]}`)
console.log(`o vetor em ordem crescente é [${num.sort()}]`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`o valor não foi encontrado!`)
} else {
    console.log(`o valor 4 esta na posição ${pos}`)
}