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
    let h2 = document.createElement("h2");
    h2.classList.add("titulo-carrinho");
    h2.innerText = "Confira suas compras";
    carrinho.appendChild(h2);


    if (carrinho.style.display === "none") {
        carrinho.style.display = "flex";
        listarCarrinho()
        calcularTotal()
    } else {
        carrinho.style.display = "none";
        carrinho.innerHTML = "";
    }
    if (quantidadeDF === 0 && quantidadeDA === 0 && quantidadeCF === 0 && quantidadeCA === 0) {
    } else {
    }

}

function listarCarrinho() {
    let tabelaCarrinho = document.createElement("table");
    tabelaCarrinho.classList.add("tabela-carrinho");
    let tBody = document.createElement("tbody");
    carrinho.appendChild(tabelaCarrinho);
    tabelaCarrinho.appendChild(tBody);



    let divPagamento = document.createElement("div");
    divPagamento.classList.add("div-pagamento");
    let debito = document.createElement("button");
    debito.classList.add("btn-pagamento");
    debito.innerText = "Débito";
    debito.setAttribute("type", "button");
    debito.addEventListener("click", pagarComDebito);
    let credito = document.createElement("button");
    credito.classList.add("btn-pagamento");
    credito.innerText = "Crédito";
    credito.setAttribute("type", "button");
    credito.addEventListener("click", pagarComCredito);
    divPagamento.appendChild(debito);
    divPagamento.appendChild(credito);
    carrinho.appendChild(divPagamento);

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
        remover.addEventListener("click", removerCarrinho);
        let iconeRemover = document.createElement("i");
        iconeRemover.classList.add("fa-solid");
        iconeRemover.classList.add("fa-trash");
        remover.appendChild(iconeRemover);
        tDLX.appendChild(remover);
        tR.appendChild(tDLX);
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
        remover.addEventListener("click", removerCarrinho);
        let iconeRemover = document.createElement("i");
        iconeRemover.classList.add("fa-solid");
        iconeRemover.classList.add("fa-trash");
        remover.appendChild(iconeRemover);
        tDLX.appendChild(remover);
        tR.appendChild(tDLX);

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
        remover.addEventListener("click", removerCarrinho);
        let iconeRemover = document.createElement("i");
        iconeRemover.classList.add("fa-solid");
        iconeRemover.classList.add("fa-trash");
        remover.appendChild(iconeRemover);
        tDLX.appendChild(remover);
        tR.appendChild(tDLX);
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
        remover.addEventListener("click", removerCarrinho);
        let iconeRemover = document.createElement("i");
        iconeRemover.classList.add("fa-solid");
        iconeRemover.classList.add("fa-trash");
        remover.appendChild(iconeRemover);
        tDLX.appendChild(remover);
        tR.appendChild(tDLX);
    }

    let trTotal = document.createElement("tr");
    let tdLabel = document.createElement("td");
    tdLabel.innerText = "Total:";
    tdLabel.classList.add("total-label");
    let tdValor = document.createElement("td");
    tdValor.setAttribute("colspan", "2");
    tdValor.innerText = `R$ ${calcularTotal()}`;
    tdValor.classList.add("total-valor");
    trTotal.appendChild(tdLabel);
    trTotal.appendChild(tdValor);
    tBody.appendChild(trTotal);
}

function calcularTotal() {
    let total = 0;

    total = total + quantidadeDF * 190.90;
    total = total + quantidadeDA * 179.90;
    total = total + quantidadeCF * 139.90;
    total = total + quantidadeCA * 119.90;

    return total.toFixed(2);
}

function removerCarrinho() {

}

function pagarComDebito() {
    carrinho.innerHTML = "";

    let h2D = document.createElement("h2");
    h2D.classList.add("titulo-carrinho");
    h2D.innerText = "Pagamento com Débito";
    carrinho.appendChild(h2D);

    let valorTotal = calcularTotal();
    let p = document.createElement("p");
    p.classList.add("texto-pagamento");
    p.innerText = `Valor total: R$ ${valorTotal}`;
    carrinho.appendChild(p);

    let form = document.createElement("form");
    form.classList.add("form-cartao");

    let inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.placeholder = "Nome do Titular";
    inputNome.required = true;
    inputNome.classList.add("input-cartao");

    let inputNumero = document.createElement("input");
    inputNumero.type = "text";
    inputNumero.placeholder = "Número do Cartão";
    inputNumero.required = true;
    inputNumero.maxLength = 16;
    inputNumero.classList.add("input-cartao");

    let inputValidade = document.createElement("input");
    inputValidade.type = "text";
    inputValidade.placeholder = "Validade (MM/AA)";
    inputValidade.required = true;
    inputValidade.maxLength = 5;
    inputValidade.classList.add("input-cartao");

    let inputCVV = document.createElement("input");
    inputCVV.type = "password";
    inputCVV.placeholder = "CVV";
    inputCVV.required = true;
    inputCVV.maxLength = 3;
    inputCVV.classList.add("input-cartao");

    form.appendChild(inputNome);
    form.appendChild(inputNumero);
    form.appendChild(inputValidade);
    form.appendChild(inputCVV);
    carrinho.appendChild(form);

    let btnConfirmar = document.createElement("button");
    btnConfirmar.classList.add("btn-pagamento-confirmar");
    btnConfirmar.innerText = "Confirmar Pagamento";
    btnConfirmar.setAttribute("type", "button");

    btnConfirmar.addEventListener("click", () => {
        if (
            inputNome.value === "" ||
            inputNumero.value.length < 16 ||
            inputValidade.value.length < 5 ||
            inputCVV.value.length < 3
        ) {
            alert("Preencha todos os dados do cartão corretamente!");
            return;
        }

        carrinho.innerHTML = "";
        let h2Confirmado = document.createElement("h2");
        h2Confirmado.classList.add("titulo-carrinho-finalizado");
        h2Confirmado.innerText = "Pagamento com Débito aprovado!";
        carrinho.appendChild(h2Confirmado);

        let pFinal = document.createElement("p");
        pFinal.classList.add("texto-pagamento-finalizado");
        pFinal.innerText = `Valor pago: R$ ${valorTotal}`;
        carrinho.appendChild(pFinal);
    });

    carrinho.appendChild(btnConfirmar);
}


function pagarComCredito() {
    carrinho.innerHTML = "";

    let h2C = document.createElement("h2");
    h2C.classList.add("titulo-carrinho");
    h2C.innerText = "Pagamento com Crédito";
    carrinho.appendChild(h2C);

    let valorTotal = calcularTotal();
    let p = document.createElement("p");
    p.classList.add("texto-pagamento");
    p.innerText = `Valor total: R$ ${valorTotal}`;
    carrinho.appendChild(p);

    let form = document.createElement("form");
    form.classList.add("form-cartao");

    let inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.placeholder = "Nome do Titular";
    inputNome.required = true;
    inputNome.classList.add("input-cartao");

    let inputNumero = document.createElement("input");
    inputNumero.type = "text";
    inputNumero.placeholder = "Número do Cartão";
    inputNumero.required = true;
    inputNumero.maxLength = 16;
    inputNumero.classList.add("input-cartao");

    let inputValidade = document.createElement("input");
    inputValidade.type = "text";
    inputValidade.placeholder = "Validade (MM/AA)";
    inputValidade.required = true;
    inputValidade.maxLength = 5;
    inputValidade.classList.add("input-cartao");

    let inputCVV = document.createElement("input");
    inputCVV.type = "password";
    inputCVV.placeholder = "CVV";
    inputCVV.required = true;
    inputCVV.maxLength = 3;
    inputCVV.classList.add("input-cartao");

    form.appendChild(inputNome);
    form.appendChild(inputNumero);
    form.appendChild(inputValidade);
    form.appendChild(inputCVV);
    carrinho.appendChild(form);

    let pParcelamento = document.createElement("p");
    pParcelamento.classList.add("texto-pagamento");
    pParcelamento.innerText = "Escolha a forma de parcelamento:";
    carrinho.appendChild(pParcelamento);

    let selectParcelas = document.createElement("select");
    selectParcelas.classList.add("select-parcelamento");

    for (let i = 1; i <= 3; i = i + 1) {
        let option = document.createElement("option");
        let valorParcela = (valorTotal / i).toFixed(2);
        option.value = i;
        option.innerText = `${i}x de R$ ${valorParcela}`;
        selectParcelas.appendChild(option);
    }
    carrinho.appendChild(selectParcelas);

    let btnConfirmar = document.createElement("button");
    btnConfirmar.classList.add("btn-pagamento-confirmar");
    btnConfirmar.innerText = "Confirmar Pagamento";
    btnConfirmar.setAttribute("type", "button");

    btnConfirmar.addEventListener("click", () => {
        if (
            inputNome.value === "" ||
            inputNumero.value.length < 16 ||
            inputValidade.value.length < 5 ||
            inputCVV.value.length < 3
        ) {
            alert("Preencha todos os dados do cartão corretamente!");
            return;
        }

        carrinho.innerHTML = "";
        let h2Confirmado = document.createElement("h2");
        h2Confirmado.classList.add("titulo-carrinho-finalizado");
        h2Confirmado.innerText = "Pagamento com Crédito aprovado!";
        carrinho.appendChild(h2Confirmado);

        let parcelas = selectParcelas.value;
        let valorParcela = (valorTotal / parcelas).toFixed(2);

        let pResumo = document.createElement("p");
        pResumo.classList.add("titulo-carrinho-finalizado");
        pResumo.innerText = `Compra parcelada em ${parcelas}x de R$ ${valorParcela}`;
        carrinho.appendChild(pResumo);

        let pFinal = document.createElement("p");
        pFinal.classList.add("texto-pagamento-finalizado");
        pFinal.innerText = "Transação concluída com sucesso!";
        carrinho.appendChild(pFinal);
    });

    carrinho.appendChild(btnConfirmar);
}