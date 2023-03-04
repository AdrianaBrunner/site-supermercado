let listaProdutos = document.querySelector("#lista-produtos")

let compras = [];

let produto1 = document.querySelector("#produto1");
let produto2 = document.querySelector("#produto2");
let produto3 = document.querySelector("#produto3");

const total = document.querySelector("#total");

function addProduto1() {
    let nomeProduto = document.querySelector("#macarrao").textContent
    const temOProduto = compras.find((produto) => produto.product === nomeProduto);
    if (temOProduto) {
        temOProduto.amount++;
    } else {
        compras.push({
            product: nomeProduto,
            amount: 1,
            price: 10.00,
        });
    }
    setCompras();
    carregarCompras();
}

function addProduto2() {
    let nomeProduto = document.querySelector("#arroz").textContent
    const temOProduto = compras.find((produto) => produto.product === nomeProduto);
    if (temOProduto) {
        temOProduto.amount++;
    } else {
        compras.push({
            product: nomeProduto,
            amount: 1,
            price: 15.50,
        });
    }
    setCompras();
    carregarCompras();
}

function addProduto3() {
    let nomeProduto = document.querySelector("#cafe").textContent
    const temOProduto = compras.find((produto) => produto.product === nomeProduto);
    if (temOProduto) {
        temOProduto.amount++;
    } else {
        compras.push({
            product: nomeProduto,
            amount: 1,
            price: 5.50,
        });
    }
    setCompras();
    carregarCompras();
}

function addProduto4() {
    let nomeProduto = document.querySelector("#acucar").textContent
    const temOProduto = compras.find((produto) => produto.product === nomeProduto);
    if (temOProduto) {
        temOProduto.amount++;
    } else {
        compras.push({
            product: nomeProduto,
            amount: 1,
            price: 2.50,
        });
    }
    setCompras();
    carregarCompras();
}

function addProduto5() {
    let nomeProduto = document.querySelector("#oleo").textContent
    const temOProduto = compras.find((produto) => produto.product === nomeProduto);
    if (temOProduto) {
        temOProduto.amount++;
    } else {
        compras.push({
            product: nomeProduto,
            amount: 1,
            price: 9.00,
        });
    }
    setCompras();
    carregarCompras();
}

function addProduto6() {
    let nomeProduto = document.querySelector("#coca").textContent
    const temOProduto = compras.find((produto) => produto.product === nomeProduto);
    if (temOProduto) {
        temOProduto.amount++;
    } else {
        compras.push({
            product: nomeProduto,
            amount: 1,
            price: 8.50,
        });
    }
    setCompras();
    carregarCompras();
}

function deleteItem(index) {
    compras.splice(index, 1);
    setCompras();
    carregarCompras();
}

function aumentaItem(index) {
    compras[index].amount++;

    setCompras();
    carregarCompras();
}
function diminuiItem(index) {
    compras[index].amount--;
    setCompras();
    carregarCompras();
}

function inserirItem(item, index) {
    let item1 = document.createElement("span");

    item1.innerHTML = `

    <div class="spans"> 
        <div class="botaoIconesAumentar"><button onclick="aumentaItem(${index})">+</button>
        </div>
        <div class="botaoIconesDiminuir"><button onclick="diminuiItem(${index})">-</button>
        </div>      

        <div class="itens">
            <div id="product"><span>${item.product}</span></div>
            <div id="amount"><span>Qt: ${item.amount} </span></div>
            <div id="priceU"><span>Preço Unitário: R$${Math.abs(item.price).toFixed(2)}</span></div>
            <div id="priceT"><span>Preço Total: R$${Math.abs(item.price * item.amount).toFixed(2)}</span></div>
            <div class="botaoIconesDel"> <button onclick="deleteItem(${index})">x</button>
            </div>
        </div>
    </div>
    `;
    listaProdutos.appendChild(item1);
}


function carregarCompras() {
    compras = getCompras();
    listaProdutos.innerHTML = "";
    compras.forEach((item, index) => {
        inserirItem(item, index);
    });
    getTotals();
}

function getTotals() {
    let totalProdutos = 0;
    let totalPrecos = 0;
    let quantidadeProdutos = 0;
  
    compras.forEach((element) => {
      quantidadeProdutos++;
      totalProdutos += element.amount;
      totalPrecos += element.price;
    });
  
    let valorCompraTotal = totalProdutos * totalPrecos;
  
    total.innerHTML = `<b>Valor Total: R$ ${Math.abs(valorCompraTotal).toFixed(2)}</b>`;
  }

function finalizar() {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.innerText = `${valorCompraTotal}`
}

const getCompras = () =>
    JSON.parse(localStorage.getItem("BANCO_MERCADO")) ?? [];

const setCompras = () =>
    localStorage.setItem("BANCO_MERCADO", JSON.stringify(compras));





