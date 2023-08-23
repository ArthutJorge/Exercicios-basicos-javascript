function Calcular(){

    Result = 0
    Troco = 0

    Resultado = document.getElementById('Result')
    
    for(var i = 1; i<=Quantos; i++){
        Result += parseInt(document.getElementById(`input${i}`).value)
    }

    Resultado.innerHTML = `<strong> Total: </strong> ${Result}`

    Label = document.createElement("label")
    div.appendChild(Label);
    Label.innerHTML = "Quanto dinheiro o cliente entregou: <br>"

    input = document.createElement("input")
    input.setAttribute("id", "inputDinheiro")
    div.appendChild(input);

    botão = document.createElement("button")
    botão.innerText = "Calcular troco"
    botão.setAttribute("onclick", "calcularTroco()")
    div.appendChild(botão);

}

function calcularTroco(){
    inputDinheiro = document.getElementById('inputDinheiro').value

    if(inputDinheiro>Result){
        Troco = inputDinheiro - Result
    }
    else{
        Troco = `Faltam ${Result-inputDinheiro}`
    }

    p = document.createElement('p')
    div.appendChild(p)
    p.innerHTML = `<strong> Troco: </strong> ${Troco}`
}

function AdicionarInputs(){
    Quantos = document.getElementById('Quantos').value
    div = document.getElementById('Div')

    for(var i = 1; i<=Quantos; i++){

        Label = document.createElement("label")
        div.appendChild(Label);
        Label.innerHTML = `${i}° Produto:`

        input = document.createElement("input")
        input.setAttribute("id", "input" + i)
        div.appendChild(input);

        p = document.createElement('p')
        div.appendChild(p)
        p.innerHTML = ""
        
    }
}