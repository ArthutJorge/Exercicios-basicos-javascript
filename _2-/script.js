function Calcular(){

    let A = document.getElementById('A').value 
    let B = document.getElementById('B').value

    Resultado = document.getElementById('Result')
    
    if(A == B){
        C = parseInt(A) + parseInt(B)
    }
    else {
        C = A * B
    }

    Resultado.innerHTML = `<strong> C: </strong> ${C}`
}