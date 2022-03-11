function verificar() {
var time = window.document.getElementById('timao')
var res = window.document.getElementById('res')
var cor = String(time.value)
if (time.value.length == 0){
    window.alert('[ERRO] escreva um time válido')
    } else  {   
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
        genero = 'homem'
            if (time = 'corinthians') {
                img.setAttribute('src', 'homemcor.png')
            } else if (time = 'são paulo') {
                img.setAttribute('src', 'homemsp.png')
            } else if (time='santos'){
                img.setAttribute('src', 'homemsan.png')
            } else if (time = 'palmeiras') {
                img.setAttribute('src', 'homempal.png')
            }

        } else if (fsex[1].checked) {
        genero = 'mulher'
            if (time = 'corinthians') {
                img.setAttribute('src', 'mulhercor.png')
            } else if (time = 'são paulo') {
                img.setAttribute('src', 'mulhersp.png')
            } else if (time='santos'){
                img.setAttribute('src', 'mulherpal.png')
            } else if (time = 'palmeiras') {
                img.setAttribute('src', 'mulhersan.png')
            }
         } 
        res.appendChild(img)  
    }
    
}