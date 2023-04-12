let num1 = document.getElementById("numeroA")
let num2 = document.getElementById("numeroB")
let retorno = document.getElementById("retorno")
let erro = document.getElementById("msgErro")
let n = document.querySelector("button#botaoVerificar")

// Esse comando serve para a página não atualizar automaticamente
/*addEventListener("submit", function(e){
    let verif = false;
    e.preventDefault()
})*/

// função que verifica se o número(A) é maior que o numéro(B)
function verificar() {
    let numA = Number(num1.value)
    let numB = Number(num2.value) 
    if (numB > numA){
        retorno.innerHTML = `<strong>Você digitou: ${numA} e ${numB}. O número(B) é maior!<strong>`
        retorno.style.border = "2px solid rgb(50, 150, 50)"
        retorno.style.background = "rgb(50, 190, 50)"
        n.innerHTML = ("Clique para confirmar!")
        botaoVerificar.onclick = function() { return true; };
        erro.innerText = ""
        num2.style.marginBottom = "6px"
        num2.style.border = "1px solid black"

    }  else {
        retorno.innerHTML = `<strong>Você digitou: ${numA} e ${numB}` 
        retorno.style.border = "2px solid rgb(150, 40, 40)"
        retorno.style.background = "rgb(200, 40, 40)"
        num2.style.border = "4px solid rgb(150, 40, 40)"
        erro.innerText = "Digite um número maior para o Número(B)!"
        erro.style.color = "white"
        erro.style.textAlign = "justify"
        erro.style.font = "bold 14px Arial"
        erro.style.margin = "-3px 0px 1px 0px"
        erro.style.background = "rgb(200, 40, 40)"
        erro.style.border = "2x solid rgb(150, 40, 40)"
        erro.style.display = "block"
        erro.style.width = "60%"
    }
    if (numA == '' && numB == ''){
        let numA = Number(num1.value)
        let numB = Number(num2.value) 
        retorno.innerText = `Atenção! Nenhum valor foi inserido!`
        num2.style.border = "none"
        retorno.style.border = "none"
        num2.style.border = "1px solid black"
        num2.style.margin = "0px 0px 3px 0px"
    }
}

