function Calcular(){

    Número = document.getElementById('numero').value
    Result = ""
    Resultado = document.getElementById('Resultado')

    if(Número >= 1 && Número <= 10){
        for(var i = 0; i<= 10; i++){
            Result += Número + "*" + i + " = " + Número*i + "<br>"
        }
    }
    else {
        alert("Número deve ser entre 1 e 10")
    }

    Resultado.innerHTML = Result
}