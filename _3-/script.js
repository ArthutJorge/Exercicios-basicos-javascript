function Calcular(){

    let Preço = document.getElementById('Preço').value 
    let Formas = document.getElementsByName('FormaPagamento')
    
    for(var i=0; i < Formas.length; i++){
        if (Formas[i].checked == true){
            FormaEscolhida = Formas[i].value
        }
    }

    Resultado = document.getElementById('Result')
    

    if(FormaEscolhida == "Vista"){
        Result = Preço
        Parcela = Preço
    }

    else if(FormaEscolhida == "3x"){
        Preço = parseInt(Preço) + (Preço * 0.05);
        Parcela = Preço/3
    }
    else if(FormaEscolhida == "4x"){
        Preço = parseInt(Preço) + (Preço * 0.1);
        Parcela = Preço/4
    }
    else if(FormaEscolhida == "5x"){
        Preço = parseInt(Preço) + (Preço * 0.15);
        Parcela = Preço/5
    }

    Resultado.innerHTML = `<strong> Preço total: </strong> ${Preço} <br>
    <strong> Preço Parcela: </strong> ${Parcela}`
}