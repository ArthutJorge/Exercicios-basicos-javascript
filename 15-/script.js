function Calcular(){

    Número = Number(document.getElementById('numero').value)
    Result = 1
    Resultado = document.getElementById('Resultado')

    if(Número<= 16){
        for(var i = 1; i<= Número; i++){
            Result *= i
        }
    }
    else {
        alert("Número deve ser menor que 16")
    }

    Resultado.innerHTML = Result
}