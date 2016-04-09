// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade
var botao = document.getElementById('rolar');
var result = document.getElementById('resultado');
var dado = document.getElementsByClassName('dado');
var values=[];
values[0]=document.getElementById('quantidadeD4');
values[1]=document.getElementById('quantidadeD6');
values[2]=document.getElementById('quantidadeD8');
values[3]=document.getElementById('quantidadeD10');
values[4]=document.getElementById('quantidadeD12');
values[5]=document.getElementById('quantidadeD20');
var stringValues='';
var nDados = [4, 6, 8, 10, 12, 20];
var resultDados = [];
var resultado = 0;
var x = 0;
result.innerHTML='';
botao.addEventListener('click', function(e) {
  for (var i = 0; i < 6; i++) {
    for(var j = 0; j< values[i].value; j++){
      	resultDados[x]=Math.ceil(Math.random() * nDados[i]);
      	resultado=resultado + resultDados[x];
        if(stringValues == ''){
        	stringValues =	stringValues + resultDados[x];
          x++;
        } else{
        	stringValues=stringValues + '+' + resultDados[x];
      		x++;
        }

  }

  }
   if(stringValues!=''){
     result.parentNode.className = '';
     result.innerHTML =stringValues + ' = ' + resultado;
     resultado = 0;
     x = 0;
     stringValues='';
   }
   else{
     result.parentNode.className = 'oculto';
   }
});
