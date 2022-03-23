var secretNumber = parseInt(Math.random() * 11);
var tentativas = 3;
var result = document.getElementById("resultado");
var elementTentativas = document.getElementById("tentativas");
elementTentativas.innerHTML = "Tentativas: " + tentativas;


function Chutar() {
  var element = document.getElementById("valor")
  var value = parseInt(element.value);
  if (value == secretNumber) {
    result.innerHTML = "Acertou";
    secretNumber = parseInt(Math.random() * 11);
    tentativas = 3;
    elementTentativas.innerHTML = "Tentativas: " + tentativas;
  }
  else if (value > 10 || value < 0) {
    result.innerHTML = "Você deve digitar um número de 0 a 10";
  }
  else {
    tentativas = tentativas - 1;
    if(secretNumber < value){
      if(tentativas == 0) {
        result.innerHTML = "Você perdeu, o número era " + secretNumber;
        tentativas = 3;
        secretNumber = parseInt(Math.random() * 11);
        elementTentativas.innerHTML = "Tentativas: " + tentativas; 
      }
      else{
        result.innerHTML = "Errou, o número secreto é menor";
        elementTentativas.innerHTML = "Tentativas: " + tentativas;  
      }
    }
    else {
      if(tentativas == 0) {
        result.innerHTML = "Você perdeu, o número era " + secretNumber;
        tentativas = 3;
        secretNumber = parseInt(Math.random() * 11);
        elementTentativas.innerHTML = "Tentativas: " + tentativas;
      } 
      else {
        result.innerHTML = "Errou, o número secreto é maior";
        elementTentativas.innerHTML = "Tentativas: " + tentativas;  
      }
    }
  }
}

function Resetar() {
  result.innerHTML = "Programa resetado, o número era " + secretNumber;
  secretNumber = parseInt(Math.random() * 11);
  tentativas = 3
}

