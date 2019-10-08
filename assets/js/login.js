function logar(){

	setMensagem(""); //Remover a mensagem da tentativa de login anterior

	if ( document.getElementById("email").value == "" ) {
		setMensagem("E-mail não informado!");
	} else if ( document.getElementById("senha").value == "" ) {
		setMensagem("Senha não informada!");
	} else {

		var senha = document.getElementById("senha").value.trim(); // trim() para remover os espaços
		let regex = /[^a-zA-Z0-9]+/g;

		console.log(senha);

		if ( senha.length < 6 ) {
			setMensagem("A senha precisa ter mais de 5 dígitos!");
		} else if ( senha.length > 10 ) {
			setMensagem("A senha não ter mais de 10 dígitos!");
		} else if ( regex.test(senha) == false ) {
			setMensagem("A senha precisa ter caracteres especiais!");
		} else {
			alert("Bem vindo!");
		}
	}
	
}

function setMensagem(mensagem) {
	document.getElementById("falha").innerHTML = mensagem;
}