function calcularIMC() { 
  var sexo = document.getElementById("sexo").value; 
  var altura = document.getElementById("altura").value; 
 
  if (sexo == "F" || sexo == "f") { 
    var pesoIdeal = (67.4 * altura) - 38.3; 
    var pesoArredondado = parseFloat(pesoIdeal.toFixed(2)) 
    alert("O seu peso ideal é: " + pesoArredondado + "Kg") 
  } 
  else if (sexo == "M" || sexo == "m") { 
    var pesoIdeal = (80.9 * altura) - 60; 
    var pesoArredondado = parseFloat(pesoIdeal.toFixed(2)) 
    alert("O seu peso ideal é: " + pesoArredondado + "Kg") 
  } 
  else { 
    alert("ERROR!!! Try Again.") 
  } 
}