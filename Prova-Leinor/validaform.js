var enviarMensagem = document.querySelector("#bt-enviar-mensagem");

var formulario = document.querySelector("#formulario");
$("#formulario").attr("hidden", false);

enviarMensagem.addEventListener("click", function(event){
    event.preventDefault();

    validacaoNome();

    validaEmail();

    validacaoRadio();

    validacaoCheck();

    validaMensagem();

    escondeForm();
});

function validacaoNome() {
    var nome = $("#nome").val();

    var qtdPalavras = nome.split(/\S+/).length -1;

    if (nome.value == "" || qtdPalavras <2) {
        alert("Insira um nome válido.");
        return false;
    }
  }
  function validaEmail(){
    var email = formulario.email;
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

function mostraPersonalizar(){
  var disponibilidade = $("#radper");
  console.log(disponibilidade);
  disponibilidade.on("click",function() {
    if(disponibilidade.is(":checked")){
      $("#personalizar").attr("hidden",false);
    }else{
      $("#personalizar").attr("hidden",true);
    }
  });
}
mostraPersonalizar();

function mostraOutro(){
  var outro = $("#outro");
  outro.on("click", function() {
    if(outro.is(":checked")) {
      $("#outroCampo").attr("hidden", false);
    } else {
      $("#outroCampo").attr("hidden", true);
    }
  });
}
mostraOutro();

function escondeForm(){
$("#formulario").attr("hidden", true);
  $("#depois-form").attr("hidden", false);
}
