function Calcular(){

    Result = ""
    Resultado = document.getElementById('Resultado')

    for(var i=0; i<=50; i++){
         if(i%2!=0){
            Result += i + "<br>"
        }
    }

    Resultado.innerHTML = Result
}