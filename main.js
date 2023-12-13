
let saldoInput = document.getElementById("saldo");
let gastoInput = document.getElementById("gasto");
let form = document.getElementById("form");
let btn = document.getElementsByTagName("button")[0];
let campoResult = document.getElementById("resultado");
form.addEventListener("submit", function(event){
    event.preventDefault();

    if(Number.parseFloat(saldoInput.value) > Number.parseFloat(gastoInput.value)){
        
        campoResult.style.display = "block";
        campoResult.style.color = "green";
        campoResult.innerHTML = "Formulá Válido. Saldo suficiente para o gasto."
       
    }
    else{
        campoResult.style.color = "red";
        campoResult.style.display = "block"
        campoResult.innerHTML = "Formulá inválido. Saldo insuficiente para o gasto."
       
    }
    saldoInput.value = "";
    gastoInput.value = "";
})