function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var sex = document.getElementsByName('radsex')//pegou através do nome uma variavel com 2 elementos
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {//confere qual array foi selecionado pelo checked(bolinha da pag)
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (sex[1].checked){ // tb confere
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // alinha a variavel RES em css através de js
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//exibe um conteudo adicional a variavel RES,neste caso,a foto
    }
}