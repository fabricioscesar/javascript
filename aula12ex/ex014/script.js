function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = (`Agora são ${hora}:${minuto}.`)
    if(hora > 4 && hora <= 12) {
        //bodia
        img.src = 'manha.png'
        document.body.style.background = '#D7D246'
    } else if(hora>12 && hora <= 18) {
        //botarde
        img.src = 'tarde.png'
        document.body.style.background = '#d76d2d'
    } else {
        //bonoit
        img.src = 'noite.png'
        document.body.style.background = '#042b2b'
    }
}