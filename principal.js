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
var result= document.getElementById('resultado');
var dado =  document.getElementsByClassName('dado');
var nDados=[4,6,8,10,12,20];
var resultado=0;
var resultDados=[];
var x = 0;
botao.addEventListener('click',function(e){
 // alert(e.currentTarget.innerHTML);
  //alert(e.currentTarget.innerHTML);
  //result.innerHTML='t';
  	for(var i = 0; i < 6 ;i++){
    	alert(dado[i].input);
    	/*for(var j = 0; j< dado[i].lastChild.value; j++){
      	alert(e.currentTarget.innerHTML);
      	resultDados[x]=Math.ceil(Math.random() * nDados[i]);
      	resultado=resultado + resultDados[x];
      	x++;
  }*/
  //alert(e.currentTarget.innerHTML);
  result.parentNode.className='';
  result.innerHTML='teste';
  }
});
