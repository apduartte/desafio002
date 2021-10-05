export function valida(input)
	const tipoDeInput = input.dataset.tipo

	if(validadores[tipoDeInput]) {
		validadores[tipoDeInput](input)
	}
	
	if(input.validity.valid){
		input.parentElement.classList.remove("input-container--invalido")
		iput.parentElement.querySelector('.input-mensagem-erro').innerHTML  = ''
	} else {
		input.parentElement.classList.add('input-container--invalido')
		input.parentElement.querySelector(',input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput,input)
	}	

	const tipoDeErro = [
		'valueMissing',
		'typeMismatch',
		'paternMismatch',
		'customError'
	
	]

    const mensagemDeErro = {
		nome: {
			valueMissing: 'O campos nome precisa ser preenchido.'
		},

	},
	const validadores = {
		tnome:input => validatnome (input)
	};	
	
		tcpf:{
			valueMissing: 'O campo CPF precisa ser preenchido'
		}

	const validadores = {
		tnome: input => validatnome(input)
	}

	function mostraMensagemDeErro(tipoDeInput,input){
		let mensagem = ''
		if(input.validity[erro])
	
	
form.AddEventListener("blur", function( event){
	event.target.style.background ="";
}, true);
var element = document.querySelector('#form_control_id');
var ValidityStateObject = element.validity;
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
	
	
	