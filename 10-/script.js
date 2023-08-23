function Calcular(){

    V1 = Number(document.getElementById('V1').value )
    V2 = Number(document.getElementById('V2').value )
    V3 = Number(document.getElementById('V3').value )
    V4 = Number(document.getElementById('V4').value )
    V5 = Number(document.getElementById('V5').value )

    Valores = document.getElementsByName('Valores')

    Resultado = document.getElementById('resultado')
    Result = 0
    var i = 0

    for(var lento = 0; lento<Valores.length; lento++){
        for(var rapido = 0; rapido<Valores.length; rapido++){
            if(Valores[lento].value > Valores[rapido].value){
                Trocar(lento, rapido)
            }
        }
    }

    Resultado.innerHTML = `<strong> Maior: </strong> ${Valores[0].value}`
}

function Trocar(origem, destino){
    aux = Valores[origem].value
    Valores[origem].value = Valores[destino].value
    Valores[destino].value = aux
}