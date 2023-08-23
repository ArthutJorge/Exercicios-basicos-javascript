function Calcular(){

    let Num1 = document.getElementById('Num1').value 
    let Num2 = document.getElementById('Num2').value
    Codigos = document.getElementsByName('Codigo')

    for(var i=0; i < Codigos.length; i++){
        if (Codigos[i].checked == true){
            CodigoEscolhido = Codigos[i].value
        }
    }

    Resultado = document.getElementById('Result')
    
    if(CodigoEscolhido == "1"){
        Result = parseInt(Num1) + parseInt(Num2)
    }
    else if(CodigoEscolhido == "2") {
        Result = Num1 * Num2
    }
    else if(CodigoEscolhido == "3"){
        Result = Num1 / Num2
    }

    Resultado.innerHTML = `<strong> Resultado: </strong> ${Result}`
}