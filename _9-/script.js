function Calcular(){

    i = 0
    Result = ""
    Resultado = document.getElementById('Resultado')

    while(i <= 100){

        if(i%2==0){
            Result += `<strong> ${i}^2 = </strong>` + i**2 + "<br>"
        }
        i += 1
    }

    Resultado.innerHTML = Result
}