function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
msg.innerHTML = (`Agora são ${hora} horas`)
var hora =20

if (hora >= 0 && hora < 12) {
    img.src = 'manhã.png'
    document.body.style.background = '#EB973F'
} else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#E58349'
    } else {
            img.src = 'noite.png'
            document.body.style.background = '#304046'
    }
}