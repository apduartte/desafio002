function formulario (){
    var cNome = document.getElementById ('tNome')
    var cCpf = document.getElementById ('tCpf') 
    var cRg = document.getElementById ('tRg') 
    var cSexo = document.getElementById ('tSexo') 
    var cEnd = document.getElementById ('tEnd') 
    var cCompl = document.getElementById ('tCompl') 
    var cBairro = document.getElementById ('tBairro') 
    var cCid = document.getElementById ('tCid') 
    var cCep = document.getElementById ('tCep') 
    var cFixo = document.getElementById ('tfixo') 
    var cCel = document.getElementById ('tCel') 

 
}

function checaCPFRepedido(cpf){
	const valoresRepetidos = [	
	('00000000000')
	('11111111111')
	('22222222222')
	('33333333333')
	('44444444444')
	('55555555555')
	('66666666666')
	('77777777777')
	('88888888888')
	('99999999999')
	]
}	
	
	let cpfValido = true
	
	valoresRepetidos.forEach(valor => {
		if (valor == cpf){
			cpfValido = false
		}	
})



