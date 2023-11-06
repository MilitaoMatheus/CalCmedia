const tituloPagina = document.querySelector('#titulo')
//console.log(tituloPagina)

/*
    Propriedade textContent = retornar ou definir o conteudo de
    texto com a tag html    
*/
//console.log(tituloPagina.textContent)
tituloPagina.textContent = 'Etec Prof. Basilides de Godoy'

const linhasAlunos = document.querySelectorAll('.aluno')
//console.log(linhasAlunos.length)

for (let x = 0; x < linhasAlunos.length; x++){
    let dadosAlunos = linhasAlunos[x]
    //console.log(dadosAlunos.textContent)

    let nome = dadosAlunos.querySelector('.td-nome').textContent
    let n1 = dadosAlunos.querySelector('.td-n1').textContent
    let n2 = dadosAlunos.querySelector('.td-n2').textContent
    let n3 = dadosAlunos.querySelector('.td-n3').textContent
    let media = calcularMedia(n1,n2,n3)
    //console.log(media.toFixed(1))
    let mediaFinal = dadosAlunos.querySelector('.td-media')
    mediaFinal.textContent = media.toFixed(1)

    let situacao = dadosAlunos.querySelector('.td-situacao')
    situacao.textContent = mostrarSituacao(media)[0]
    situacao.classList.add(mostrarSituacao(media)[1])

    if(mediaFinal.textContent >= 7){
        mediaFinal.style.color= 'blue'
        mediaFinal.style.fontWeight = 'bold'
    } else{
        mediaFinal.style.color= 'red'
        mediaFinal.style.fontWeight = 'bold'
    }
}
function calcularMedia(x, y, z){
    return ( parseFloat(x)+ parseFloat(y) + parseFloat(z) ) / 3
} 
function mostrarSituacao(m){
    let resultado = []
    if(m >= 7){
        resultado.push('Aprovado')
        resultado.push('aprovado')
    } else {
        resultado.push('Reprovado')
        resultado.push('reprovado')
    }
    return resultado
}