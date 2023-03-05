let listaProdutos = document.querySelector("#lista-produtos")

let compras = [];

const total = document.querySelector("#total");

function addProduto(produto) {
    let nomeProduto = document.querySelector(produto).textContent
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
    if(compras[index].amount > 0) {
    compras[index].amount--;
    }
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





