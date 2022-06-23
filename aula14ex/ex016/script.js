function contar(){
    let ini = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let res = document.getElementById("res")
    
    if(ini.value.length==0 ||fim.value.length==0 ||passo.value.lenght==0){
        res.innerHTML = `Impossível contar!`
        window.alert(`[ERRO]Faltam dados!`)//.value.length pegar valor do tamanho
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)//SEMPRE lembrar
        let f = Number(fim.value)//de converter
        let p = Number(passo.value)//String pra Number
        if(p <=0){
            window.alert(`[ERRO]Passo inválido!Considerando Passo 1`)
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}