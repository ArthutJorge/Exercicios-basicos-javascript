function Calcular(){
    Maior = document.getElementById("Maior").value
    Menor = document.getElementById("Menor").value

    if (Menor>= Maior){
        alert("Menor não pode ser maior que o Maior")
    }
    else{
    Result = ""
    Resultado = document.getElementById('Resultado')

    for(var i = Menor; i<=Maior; i++){
        Result += i + "<br>"
    }

    Resultado.innerHTML = Result
}
}