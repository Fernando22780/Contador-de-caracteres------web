document.addEventListener('DOMContentLoaded', function () {
  var textarea = document.getElementById('texto');
  var contadorCaracteres = document.getElementById('contador');
  var contadorLinhas = document.getElementById('contadorLinhas');
  var contadorPalavras = document.getElementById('contadorPalavras');
  var botaoLimpar = document.getElementById('limpar-btn'); 

  textarea.addEventListener('input', function () {
      var texto = textarea.value;
      var numCaracteres = texto.length;
      var numLinhas = texto.split('\n').length;
      var numPalavras = texto.split(/\s+/).filter(function (word) {
          return word.length > 0;
      }).length;

      contadorCaracteres.textContent = 'Caracteres: ' + numCaracteres;
      contadorLinhas.textContent = 'Linhas: ' + numLinhas;
      contadorPalavras.textContent = 'Palavras: ' + numPalavras;
  });

  
  botaoLimpar.addEventListener('click', function () {
      textarea.value = ''; 
      contadorCaracteres.textContent = 'Caracteres: 0'; 
      contadorLinhas.textContent = 'Linhas: 0';
      contadorPalavras.textContent = 'Palavras: 0';
  });
});
