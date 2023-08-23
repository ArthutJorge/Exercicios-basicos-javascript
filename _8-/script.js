function Calcular(){

    V1 = Number(document.getElementById('V1').value )
    V2 = Number(document.getElementById('V2').value )
    V3 = Number(document.getElementById('V3').value )
    V4 = Number(document.getElementById('V4').value )
    V5 = Number(document.getElementById('V5').value )
    V6 = Number(document.getElementById('V6').value )
    V7 = Number(document.getElementById('V7').value )
    V8 = Number(document.getElementById('V8').value )
    V9 = Number(document.getElementById('V9').value )
    V10 = Number(document.getElementById('V10').value )
    V11 = Number(document.getElementById('V11').value )
    V12 = Number(document.getElementById('V12').value )
    V13 = Number(document.getElementById('V13').value )
    V14 = Number(document.getElementById('V14').value )
    V15 = Number(document.getElementById('V15').value )
    V16 = Number(document.getElementById('V16').value )
    V17 = Number(document.getElementById('V17').value )
    V18 = Number(document.getElementById('V18').value )
    V19 = Number(document.getElementById('V19').value )
    V20 = Number(document.getElementById('V20').value )

    Valores = document.getElementsByName('Valores')

    Resultado = document.getElementById('resultado')
    Result = 0
    var i = 0

    do {
        Result += parseInt(Valores[i].value)
        i += 1
    } while(i<Valores.length)
    

    Resultado.innerHTML = `<strong> Total: </strong> ${Result}`
}