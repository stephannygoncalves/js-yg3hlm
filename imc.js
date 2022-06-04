function calcular(){
  
  var formulario = document.getElementById("formulario");	
  	 
  var kilos  		= +formulario.kilos.value;
  var metros 		= +formulario.metros.value;
  var centimetros = +formulario.centimetros.value;
  
  var altura = (metros * 100 + centimetros) / 100;
   
  var imc = kilos / (altura * altura);
  
  formulario.imc.value = imc.toFixed(2);
  
  if(imc < 30)
  {
    alert('Voce esta abaixo do peso!');
  } 
  else if(imc >30 && imc <= 35)
  {
    alert("'Voce esta com o peso Ideal");
  }
  else if(imc >35 && imc <= 40)
  {
    alert("Sobrepeso");
  }
  else if(imc >40 && imc <= 45)
  {
    alert("Obesidade Moderada");
  }
  else if(imc >45 && imc <= 50)
  {
    alert("Obesidade Severa");
  }
  else if(imc >50 && imc <= 60)
  {
    alert("Obesidade Morbida");
  }
  else
  {
    alert('Peso em excesso');
  }
}