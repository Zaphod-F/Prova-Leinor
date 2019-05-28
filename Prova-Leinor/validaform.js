var enviarMensagem = document.querySelector("#bt-enviar-mensagem");

var formulario = document.querySelector("#formulario");

enviarMensagem.addEventListener("click", function(event){
    event.preventDefault();
    
    validacaoNomeEmail();
    
    validacaoRadio();
    
    validacaoCheck();
    
    validaMensagem();
    
});

function validacaoNomeEmail() {
    var nome = formulario.nome;
    var email = formulario.email;

    if (nome.value == "") {
        alert("Insira um nome válido.");
        return false;
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        return false;
    }
}

function validacaoRadio(){
    var radio = formulario.disponibilidade;
    
    for (i = 0; i<radio.length;i++){
        if (radio[i].checked){
            return true;
        }
    }
    alert("Selecione um turno");
        return false;
}

function validacaoCheck(){
    var check = formulario.interesses;
    
    for (i = 0; i<check.length;i++){
        if (check[i].checked){
            return true;
        }
    }
    alert("Selecione pelo menos 1 interesse");
        return false;
}

function validaMensagem(){
    var mensagem = formulario.mensagem;
    
    if (mensagem.value.length < 140){
        alert("Insira uma mensagem com pelo menos 140 caracteres");
        return false;
    }
}