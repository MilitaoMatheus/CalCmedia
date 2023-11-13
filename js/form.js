const botao = document.querySelector('#adicionar-aluno')

botao.addEventListener('click', function(){
    event.preventDefault()

    let formulario = document.querySelector('#form-aluno')
    let dadosAluno = validaForm(formulario)
	console.log(dadosAluno.jNome)
	console.log(dadosAluno.jN1.toFixed(1))
	console.log(dadosAluno.jN2.toFixed(1))
	console.log(dadosAluno.jN3.toFixed(1))
	console.log(dadosAluno.jMediaFinal.toFixed(1))
	console.log(dadosAluno.jSituacao)
	
	
	//Criando uma nova linha
	let linha = document.createElement('tr')
	//crindo as células das linhas
	let tdNome = document.createElement('td')
	let tdN1 = document.createElement('td')
	let tdN2 = document.createElement('td')
	let tdN3 = document.createElement('td')
	let tdMediaFinal = document.createElement('td')
	let tdSituacao = document.createElement('td')
	
	tdNome.textContent = dadosAluno.jNome
	tdN1.textContent = dadosAluno.jN1.toFixed(1)
	tdN2.textContent = dadosAluno.jN2.toFixed(1)
	tdN3.textContent = dadosAluno.jN3.toFixed(1)
	tdMediaFinal.textContent = dadosAluno.jMediaFinal.toFixed(1)
	tdSituacao.textContent = dadosAluno.jSituacao
	tdSituacao.classList.add(mostrarSituacao(dadosAluno.jMediaFinal)[1])
	
	linha.appendChild(tdNome)
	linha.appendChild(tdN1)
	linha.appendChild(tdN2)
	linha.appendChild(tdN3)
	linha.appendChild(tdMediaFinal)
	linha.appendChild(tdSituacao)
	
	let tabela = document.querySelector('#tabela-aluno')
	tabela.appendChild(linha)
	
	formulario.reset()
	formulario.querySelector('#nome').focus()
})
function validaForm(meuForm){
    if(meuForm.querySelector('#nome').value == ""){
        alert('Obrigatório o preenchimento dos campos!!!')
        meuForm.querySelector('#nome').Focus()
    }
    else if (meuForm.querySelector('#n1').value == ""){
        alert('Informar a nota 1 do aluno!!')
        meuForm.querySelector('#n1').Focus()
    } else if(isNaN(meuForm.querySelector('#n1').value)){
        alert('Informar apenas valores numéricos no campo nota 1')
        meuForm.querySelector('#n1').value = ""
        meuForm.querySelector('#n1').Focus()
    } else if (meuForm.querySelector('#n1').value > 10){
        alert('Informar apenas valores numéricos entre 0 e 10')
        meuForm.querySelector('#n1').value = ""
        meuForm.querySelector('#n1').Focus()
    }
	
    else if (meuForm.querySelector('#n2').value == ""){
        alert('Informar a nota 2 do aluno!!')
        meuForm.querySelector('#n2').Focus()
    } else if(isNaN(meuForm.querySelector('#n2').value)){
        alert('Informar apenas valores numéricos no campo nota 2')
        meuForm.querySelector('#n2').value = ""
        meuForm.querySelector('#n2').Focus()
    } else if (meuForm.querySelector('#n2').value > 10){
        alert('Informar apenas valores numéricos entre 0 e 10')
        meuForm.querySelector('#n2').value = ""
        meuForm.querySelector('#n2').Focus()
    }
	
	else if (meuForm.querySelector('#n3').value == ""){
        alert('Informar a nota 3 do aluno!!')
        meuForm.querySelector('#n3').Focus()
    } else if(isNaN(meuForm.querySelector('#n3').value)){
        alert('Informar apenas valores numéricos no campo nota 3')
        meuForm.querySelector('#n3').value = ""
        meuForm.querySelector('#n3').Focus()
    } else if (meuForm.querySelector('#n3').value > 10){
        alert('Informar apenas valores numéricos entre 0 e 10')
        meuForm.querySelector('#n3').value = ""
        meuForm.querySelector('#n3').Focus()
    } else {
		let jsonAluno = {
			jNome: meuForm.querySelector('#nome').value,
			jN1: parseFloat(meuForm.querySelector('#n1').value.replace(",", ".")),
			jN2: parseFloat(meuForm.querySelector('#n2').value.replace(",", ".")),
			jN3: parseFloat(meuForm.querySelector('#n3').value.replace(",", ".")),
			
			jMediaFinal:calcularMedia(meuForm.querySelector('#n1').value.replace(",", "."),
						meuForm.querySelector('#n2').value.replace(",", "."),
						meuForm.querySelector('#n3').value.replace(",", ".")),
						
			jSituacao: mostrarSituacao(calcularMedia(meuForm.querySelector('#n1').value.replace(",", "."),
													meuForm.querySelector('#n2').value.replace(",", "."),
													meuForm.querySelector('#n3').value.replace(",", ".")))[0]
		}
		return jsonAluno
	}
}   