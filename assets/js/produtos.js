let pegarQuantidadeDF = document.getElementById("racaoDogFilhote");
let quantidadeDF = parseInt(pegarQuantidadeDF.textContent);
function menosRacaoDogFilhote() {
    if (quantidadeDF > 0) {
        quantidadeDF = quantidadeDF - 1;
    }
    pegarQuantidadeDF.textContent = quantidadeDF;
}
function maisRacaoDogFilhote() {
    quantidadeDF = quantidadeDF + 1;
    pegarQuantidadeDF.textContent = quantidadeDF;
}

let pegarQuantidadeDA = document.getElementById("racaoDogAdulto");
let quantidadeDA = parseInt(pegarQuantidadeDA.textContent);
function menosRacaoDogAdulto() {
    if (quantidadeDA > 0) {
        quantidadeDA = quantidadeDA - 1;
    }
    pegarQuantidadeDA.textContent = quantidadeDA;
}
function maisRacaoDogAdulto() {
    quantidadeDA = quantidadeDA + 1;
    pegarQuantidadeDA.textContent = quantidadeDA;
}

let pegarQuantidadeCF = document.getElementById("racaoCatFilhote");
let quantidadeCF = parseInt(pegarQuantidadeCF.textContent);
function menosRacaoCatFilhote() {
    if (quantidadeCF > 0) {
        quantidadeCF = quantidadeCF - 1;
    }
    pegarQuantidadeCF.textContent = quantidadeCF;
}
function maisRacaoCatFilhote() {
    quantidadeCF = quantidadeCF + 1;
    pegarQuantidadeCF.textContent = quantidadeCF;
}

let pegarQuantidadeCA = document.getElementById("racaoCatAdulto");
let quantidadeCA = parseInt(pegarQuantidadeCA.textContent);
function menosRacaoCatAdulto() {
    if (quantidadeCA > 0) {
        quantidadeCA = quantidadeCA - 1;
    }
    pegarQuantidadeCA.textContent = quantidadeCA;
}
function maisRacaoCatAdulto() {
    quantidadeCA = quantidadeCA + 1;
    pegarQuantidadeCA.textContent = quantidadeCA;
}

function chamarCarrinho() {
    let carrinho = document.getElementById("carrinho");

    if (carrinho.style.display === "none") {
        carrinho.style.display = "flex";
    } else {
        carrinho.style.display = "none";
    }
}