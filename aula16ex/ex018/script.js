let num = document.querySelector('input#fnum')//variavel para buscar valor de html
let lista = document.querySelector('select#flista')//var para buscar valor html
let res = document.querySelector('div#res')// var para buscar || inserir valor html
let valores = []//array para guardar os numeros da lista 

function isNumero(n) {//função para teste logico p ver se o n esta entre 1 a 100
    if (Number(n) >=1 && Number(n) <= 100) {
        return true //retorno booleano verdadeiro(==entre 1 e 100)
    } else {
        return false//retorno booleano falso(!= de 1 e 100)
    }
}
// o metodo indexOf() serve para recuperar a posição inicial de um numero,se esse numero não estiver 
//presente,ele retornará o valor -1
function inLista(n , l) {
    if (l.indexOf(Number(n)) != -1) {//teste log para ver se a pos do num retorna valor existente
        return true//caso verdade, o numero já consta na lista
    } else {
        return false//caso falso,o indexOf retorna -1 pois o num ñ existe na lista
    }
}

function adicionar() {//teste log pra ver se o num ta entre 1 e 100 && se !(não)está na lista
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O Valor ${num.value} foi adicionado`
        lista.appendChild(item);
    } else {
        window.alert(`Valor Inválido ou ja encontrado na lista.`)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        valores.sort()
        let total = valores.length
        let soma = 0
        let media = 0
        
        for(let pos in valores) {
            soma += valores[pos]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>o maior numero é ${valores[total -1]}</p>`
        res.innerHTML += `<p>o menor numero é ${valores[0]} </p>`
        res.innerHTML += `<p>a soma dos valores é igual a ${soma} </p>`
        res.innerHTML += `<p>a media entre os valores é igual a ${media}</p>`
    }
}