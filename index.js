<!Doctype html>

<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Exemplo de Exercício</title>
    <script type="text/javascript" src="imc.js">
       
    </script>
</head>
<body>
    <form id="formulario">
    <fieldset>
    	<legend>Calculo IMC</legend>
    	
        <label for="kilos">Kilos:</label>
        <input name="kilos" type="text" />
    
        <label for="metros">metros:</label>
        <input name="metros" type="text" />
    
        <label for="centimetros">centimetros:</label>
        <input name="centimetros" type="text" />
    
        <label for="imc">imc:</label>
        <input name="imc" type="text" disabled="disabled" />
            
        <a href="#" onclick="calcular();">Calcular</a>
    </fieldset>
    </form>
</body>

</html>