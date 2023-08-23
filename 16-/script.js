function Calcular(){

    Número = Number(document.getElementById('numero').value)
    Result = ""
    Resultado = document.getElementById('Resultado')

    if (Número % 2 == 0){     
        if (Número == 2){
            Result = "Primo"
        }else{
            Result = "Não"
        }
    }     
    else{
        possivelDivisor = 3
        resto = 1
        
        while(possivelDivisor <= Número/2 && resto != 0){
            resto = Número % possivelDivisor
            possivelDivisor += 2
        }
                
        if (resto != 0 && Número != 1){      
            Result = "Primo"
        } else{
            Result = "Não"
        }
    }
    Resultado.innerHTML = Result
}