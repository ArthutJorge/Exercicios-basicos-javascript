function Calcular(){

    NomeFunc = document.getElementById('NomeFunc').value 
    SalarioFunc = document.getElementById('SalarioFunc').value

    Resultado = document.getElementById('NovoSalario')
    novoSalario = parseInt(SalarioFunc) + (SalarioFunc * 0.1)

    Resultado.innerHTML = `<strong> Nome: </strong> ${NomeFunc} 
    <br> <strong> Novo salário: </strong> ${novoSalario}`
}