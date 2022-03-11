var idade = 66
console.log(idade)
if (idade < 16 ) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
        console.log(`O voto é opcional`)
    } else{
        console.log(`Voto Obrigatório!`)
}
