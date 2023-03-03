let botaoAdicionar = document.getElementsByClassName("botao-carrinho")

let listaProdutos = document.getElementById("lista-produtos")

let compras = JSON.parse(localStorage.getItem("compras")) || [];


function adicionarProdutos() {
    let spanProduto = document.querySelector(".nome-produto")
    let nomeProduto = spanProduto.textContent;

    let spanValor = document.querySelector(".price");
    let valorStr = parseFloat(spanValor.textContent);
    let valorFormatado = valorStr.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    let total = document.getElementById("total")
    let totalConteudo = total.textContent
    let totalFinal = totalConteudo + valorFormatado;
    total.innerText = `Total: R$ ${totalFinal}`
    const compra = { nomeProduto, valorFormatado };
    compras.push(compra);
    atualizarProdutos();
    mostrarProdutos();
}

function mostrarProdutos() {
    listaProdutos.innerHTML = "";
    compras.forEach((compra, i) => {
        const itemLista = document.createElement("li")
        itemLista.innerHTML = `${compra.nomeProduto} - ${compra.valorFormatado} <button class="remover" data-i="${i}">X</button>`;
        listaProdutos.appendChild(itemLista);
    })
}

function removerProdutos(event) {
    if (event.target.classList.contains("remover")) {
        const i = event.target.getAttribute("data-i");
        compras.splice(i, 1);
        atualizarProdutos()
        mostrarProdutos()
    }
}

function atualizarProdutos() {
    localStorage.setItem("compras", JSON.stringify(compras));
}


listaProdutos.addEventListener("click", removerProdutos);
mostrarProdutos();



