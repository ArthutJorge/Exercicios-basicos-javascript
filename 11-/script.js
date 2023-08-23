function Calcular(){

    V1 = Number(document.getElementById('V1').value )
    V2 = Number(document.getElementById('V2').value )
    V3 = Number(document.getElementById('V3').value )
    V4 = Number(document.getElementById('V4').value )
    V5 = Number(document.getElementById('V5').value )

    Valores = document.getElementsByName('Valores')

    Resultado = document.getElementById('resultado')
    Result = 0

    for(var i = 0; i<Valores.length; i++){
        Result += parseInt(Valores[i].value)
    }
    Media = Result/Valores.length

    Resultado.innerHTML = `<strong> Resultado: </strong> ${Result} <br>
                            <strong> Media: </strong> ${Media}`
}