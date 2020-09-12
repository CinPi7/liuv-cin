let cardapio = document.getElementById("solutionCardapio");
let comanda = document.getElementById("solutionComanda");
let delivery = document.getElementById("solutionDelivery");
let pagamentoMesa = document.getElementById("solutionPagamentoNaMesa");
let pre = document.getElementById("solutionPre");
let QRCode = document.getElementById("solutionQRCode");

const buttons = document.querySelectorAll(".buttonSolution");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let siblings = button.parentNode.querySelectorAll(".buttonSolution");
    siblings.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});

function showCardapio() {

    if(cardapio.style.display === "none"){
        cardapio.style.display = "block";
        comanda.style.display = "none";
        delivery.style.display = "none";
        pagamentoMesa.style.display = "none";
        pre.style.display = "none";
        QRCode.style.display = "none";
    }
    else {
        cardapio.style.display = "none";
    }
}

function showComanda(){
    if(comanda.style.display === "none"){
        comanda.style.display = "block";
        cardapio.style.display = "none";
        delivery.style.display = "none";
        pagamentoMesa.style.display = "none";
        pre.style.display = "none";
        QRCode.style.display = "none";
    }
    else {
        comanda.style.display = "none";
    }
}

function showDelivery(){
    if(delivery.style.display === "none"){
        delivery.style.display = "block";
        cardapio.style.display = "none";
        comanda.style.display = "none";
        pagamentoMesa.style.display = "none";
        pre.style.display = "none";
        QRCode.style.display = "none";
    }
    else {
        delivery.style.display = "none";
    }
}

function showPagamentoNaMesa(){
    if(pagamentoMesa.style.display === "none"){
        pagamentoMesa.style.display = "block";
        cardapio.style.display = "none";
        comanda.style.display = "none";
        delivery.style.display = "none";
        pre.style.display = "none";
        QRCode.style.display = "none";
    }
    else {
        pagamentoMesa.style.display = "none";
    }
}

function showPre(){
    if(pre.style.display === "none"){
        pre.style.display = "block";
        cardapio.style.display = "none";
        comanda.style.display = "none";
        delivery.style.display = "none";
        pagamentoMesa.style.display = "none";
        QRCode.style.display = "none";
    }
    else {
        pre.style.display = "none";
    }
}

function showQRCode(){
    if(QRCode.style.display === "none"){
        QRCode.style.display = "block";
        cardapio.style.display = "none";
        comanda.style.display = "none";
        delivery.style.display = "none";
        pagamentoMesa.style.display = "none";
        pre.style.display = "none";
    }
    else {
        QRCode.style.display = "none";
    }
}

