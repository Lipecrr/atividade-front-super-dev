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
        let tabelaCarrinho = document.createElement("table");
        tabelaCarrinho.classList.add("tabela-carrinho");
        let tBody = document.createElement("tbody");
        carrinho.appendChild(tabelaCarrinho);
        tabelaCarrinho.appendChild(tBody);

        if (quantidadeDF > 0) {
            let tR = document.createElement("tr");
            let tDI = document.createElement("td");
            let tDD = document.createElement("td");
            let tDV = document.createElement("td");
            let tDQ = document.createElement("td");
            let tDLX = document.createElement("td");

            tBody.appendChild(tR);
            let img = document.createElement("img");
            img.src = "../assets/image/cachorro-filhote";
            img.classList.add("img-carrinho");
            tDI.appendChild(img);
            tR.appendChild(tDI);

            let descricao = document.createElement("p");
            descricao.innerText = "Ração de 15,0kg para cães filhotes.";
            descricao.classList.add("descricao-carrinho");
            tDD.appendChild(descricao);
            tR.appendChild(tDD)

            let valor = document.createElement("p");
            let calcularValor = quantidadeDF * 190.90;
            calcularValor = calcularValor.toFixed(2);
            calcularValor = calcularValor.toString();
            valor.innerText = `R$ ${calcularValor}`;
            tDV.appendChild(valor);
            tR.appendChild(tDV);

            let quantidade = document.createElement("p");
            quantidade.innerText = quantidadeDF;
            tDQ.appendChild(quantidade);
            tR.appendChild(tDQ);

            let remover = document.createElement("button");
            remover.setAttribute("type", "button");
            remover.innerText = "LX";
            remover.addEventListener("click", removerCarrinho);
            tDLX.appendChild(remover);
            tR.appendChild(tDLX)
        }
        if (quantidadeDA > 0) {
            let tR = document.createElement("tr");
            let tDI = document.createElement("td");
            let tDD = document.createElement("td");
            let tDV = document.createElement("td");
            let tDQ = document.createElement("td");
            let tDLX = document.createElement("td");

            tBody.appendChild(tR);
            let img = document.createElement("img");
            img.src = "../assets/image/cachorro-adulto.webp";
            img.classList.add("img-carrinho");
            tDI.appendChild(img);
            tR.appendChild(tDI);

            let descricao = document.createElement("p");
            descricao.innerText = "Ração de 15,0kg para cães adultos.";
            descricao.classList.add("descricao-carrinho");
            tDD.appendChild(descricao);
            tR.appendChild(tDD)

            let valor = document.createElement("p");
            let calcularValor = quantidadeDA * 179.90;
            calcularValor = calcularValor.toFixed(2);
            calcularValor = calcularValor.toString();
            valor.innerText = `R$ ${calcularValor}`;
            tDV.appendChild(valor);
            tR.appendChild(tDV);

            let quantidade = document.createElement("p");
            quantidade.innerText = quantidadeDA;
            tDQ.appendChild(quantidade);
            tR.appendChild(tDQ)

            let remover = document.createElement("button");
            remover.setAttribute("type", "button");
            remover.innerText = "LX";
            remover.addEventListener("click", removerCarrinho);
            tDLX.appendChild(remover);
            tR.appendChild(tDLX)

        }
        if (quantidadeCF > 0) {
            let tR = document.createElement("tr");
            let tDI = document.createElement("td");
            let tDD = document.createElement("td");
            let tDV = document.createElement("td");
            let tDQ = document.createElement("td");
            let tDLX = document.createElement("td");

            tBody.appendChild(tR);
            let img = document.createElement("img");
            img.src = "../assets/image/gato-filhote.jpg";
            img.classList.add("img-carrinho");
            tDI.appendChild(img);
            tR.appendChild(tDI);

            let descricao = document.createElement("p");
            descricao.innerText = "Ração de 10,1kg para gatos filhotes.";
            descricao.classList.add("descricao-carrinho");
            tDD.appendChild(descricao);
            tR.appendChild(tDD)

            let valor = document.createElement("p");
            let calcularValor = quantidadeCF * 139.90;
            calcularValor = calcularValor.toFixed(2);
            calcularValor = calcularValor.toString();
            valor.innerText = `R$ ${calcularValor}`;
            tDV.appendChild(valor);
            tR.appendChild(tDV);

            let quantidade = document.createElement("p");
            quantidade.innerText = quantidadeCF;
            tDQ.appendChild(quantidade);
            tR.appendChild(tDQ)

            let remover = document.createElement("button");
            remover.setAttribute("type", "button");
            remover.innerText = "LX";
            remover.addEventListener("click", removerCarrinho);
            tDLX.appendChild(remover);
            tR.appendChild(tDLX)
        }
        if (quantidadeCA > 0) {
            let tR = document.createElement("tr");
            let tDI = document.createElement("td");
            let tDD = document.createElement("td");
            let tDV = document.createElement("td");
            let tDQ = document.createElement("td");
            let tDLX = document.createElement("td");

            tBody.appendChild(tR);
            let img = document.createElement("img");
            img.src = "../assets/image/gato-adulto.jpg";
            img.classList.add("img-carrinho");
            tDI.appendChild(img);
            tR.appendChild(tDI);

            let descricao = document.createElement("p");
            descricao.innerText = "Ração de 10,1kg para gatos adultos.";
            descricao.classList.add("descricao-carrinho");
            tDD.appendChild(descricao);
            tR.appendChild(tDD)

            let valor = document.createElement("p");
            let calcularValor = quantidadeCA * 119.90;
            calcularValor = calcularValor.toFixed(2);
            calcularValor = calcularValor.toString();
            valor.innerText = `R$ ${calcularValor}`;
            tDV.appendChild(valor);
            tR.appendChild(tDV);

            let quantidade = document.createElement("p");
            quantidade.innerText = quantidadeCA;
            tDQ.appendChild(quantidade);
            tR.appendChild(tDQ)

            let remover = document.createElement("button");
            remover.setAttribute("type", "button");
            remover.innerText = "LX";
            remover.addEventListener("click", removerCarrinho);
            tDLX.appendChild(remover);
            tR.appendChild(tDLX);
        }
    } else {
        carrinho.style.display = "none";
        carrinho.innerHTML = "";
    }

}

function removerCarrinho() {

}