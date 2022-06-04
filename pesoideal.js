function calcularIMC() { 
  var sexo = document.getElementById("sexo").value; 
  var altura = document.getElementById("altura").value; 
 
  if (sexo == "F" || sexo == "f") { 
    var pesoIdeal = (62.1 * altura) - 44.7; 
    var pesoArredondado = parseFloat(pesoIdeal.toFixed(2)) 
    alert("O seu peso ideal é: " + pesoArredondado + "Kg") 
  } 
  else if (sexo == "M" || sexo == "m") { 
    var pesoIdeal = (72.7 * altura) - 58; 
    var pesoArredondado = parseFloat(pesoIdeal.toFixed(2)) 
    alert("O seu peso ideal é: " + pesoArredondado + "Kg") 
  } 
  else { 
    alert("ERROR!!! Try Again.") 
  } 
}