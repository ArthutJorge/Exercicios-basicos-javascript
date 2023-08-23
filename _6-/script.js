function Calcular(){

    let Codigo = Number(document.getElementById('Codigo').value)

    Resultado = document.getElementById('Result')
    
    switch (Codigo) {
        case 1:
            Result = "Alimento não-perecivel"
        break 
        case 2:
        case 3:
        case 4:
            Result = "Alimento perecivel"
        break 
        case 5:
        case 6:
            Result = "Vestuário"
        break 
        case 7:
            Result = "Higiene Pessoal"
        break 
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            Result = "Limpeza e Utensilios domésticos"
        break 
        default:
            Result = "Inválido"
        break 
        } 

    Resultado.innerHTML = `<strong> Classificação: </strong> ${Result}`
}