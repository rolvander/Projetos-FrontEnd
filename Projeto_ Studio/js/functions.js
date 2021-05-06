$(function(){

	//MENU MOBILE HOME
	$('.icon-menu-mobile').click(function(){
		$('.menu-mobile ul').slideToggle("slow").delay(2000).slideToggle();

	})
	//MENU MOBILE CONTATO
	$('.icon-menu-mobile2').click(function(){
		$('nav.menu-mobile2 ul').slideToggle("slow").delay(2000).slideToggle();

	})

	//SLIDER DE IMAGENS
	$('.img-mosaico-single a').fancybox({
		
	})

	//MASCARA PARA O CONTATO
	$('input[name=telefone]').mask('(99)99999-9999');

	//EVENTOS DO FORMULARIO
	$('form#form-contato input[type=text]').focus(function(){
		resetarInvalido($(this));
	})


$('form#form-contato').submit(function(e){
	e.preventDefault();
	var nome = $('input[name=nome]').val();
	var telefone = $('input[name=telefone]').val();
	var email = $('input[name=email]').val();

	if(verificarNome(nome) == false){
		aplicarInvalido($('input[name=nome]'));
	}else if(verificaTelefone(telefone) == false){
		aplicarInvalido($('input[name=telefone]'));
	}else if(verificaEmail(email) == false){
		aplicarInvalido($('input[name=email]'))
	}else{
		alert("Formulario enviado com sucesso!");
	}

})

//FUNCOES DE VERIFICAÇAO
function verificarNome(nome){

	if(nome == ''){
		console.log("CAMPO VAZIO")
		return false;
	}
	var amount = nome.split(' ').length;
	var splitStr = nome.split(' ');
	if( amount >= 2){
		for(var i = 0; i < amount;i++){
			if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
				//CONDIÇÃO VERDADEIRA
			}else {//Estilo nome incorreto
				aplicarInvalido($('input[name=nome]'));
				console.log('Condição nao bateu');
				return false;
			}
		}	
	}else{
		aplicarInvalido($('input[name=nome]'));
		console.log("Nome incorreto");
		return false;
	}
}

function verificaTelefone(telefone){
	if(telefone == ''){
			console.log("CAMPO VAZIO TELEFONE")
		return false;
	}

	if(!telefone.match(/^\([0-9]{2}\)[0-9]{5}\-[0-9]{4}$/)){
		console.log("Número incorreto")
		return false;
	}
}

function verificaEmail(email){
	if(email == ''){
		console.log("CAMPO VAZIO email")
		return false;
	}

	if(!email.match(/^[a-z0-9_.-]{1,}\@[a-z]{1,}[a-z.]{1,}$/)){
			console.log("Email Inválido")
		return false;
	}

}


//FUNCOES DE ESTILIZAÇÃO
function aplicarInvalido(elemento){
	elemento.css('border','1px solid rgb(200,0,0)');
	elemento.css('color','rgb(200,0,0)');
	elemento.css('box-shadow','0 2px 10px 0 rgb(100, 0, 0)');
	elemento.data('invalido','true');
}

function resetarInvalido(elemento){
	elemento.css('border','1px solid #ccc');
	elemento.css('box-shadow','none');
	elemento.css('color', 'rgb(130,130,130)');
}

});

