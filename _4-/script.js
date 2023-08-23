function Calcular(){

    let N1 = document.getElementById('N1').value 
    let N2 = document.getElementById('N2').value
    let N3 = document.getElementById('N3').value 
    let Nome = document.getElementById('Nome').value

    Resultado = document.getElementById('Result')
    let media = (parseInt(N1)+parseInt(N2)+parseInt(N3))/3

    if (media >= 5){
        Situação = "Sim"
    }
    else {
        Situação = "não"
    }

    Resultado.innerHTML = `<strong> Nome: </strong> ${Nome} <br>
    <strong> Média: </strong> ${media} <br>
    <strong> Aprovado: </strong> ${Situação}`
}