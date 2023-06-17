var total = 0; 

function adicionarItem() {
  var itemInput = document.getElementById("item");
  var quantidadeInput = document.getElementById("quantidade");
  var valorInput = document.getElementById("valor");
  var lista = document.getElementById("lista");
  var totalElement = document.getElementById("total");

  var item = itemInput.value;
  var quantidade = parseInt(quantidadeInput.value, 10);
  var valor = parseFloat(valorInput.value);

  if (item !== "" && !isNaN(quantidade) && !isNaN(valor)) {
    var listItem = document.createElement("li");
    var totalItem = quantidade * valor;
    listItem.textContent = item + " - " + quantidade + "x R$" + valor + " = R$" + totalItem.toFixed(2);
    lista.appendChild(listItem);

    total += totalItem;

    totalElement.textContent = "Total: R$ " + total.toFixed(2);

    itemInput.value = "";
    quantidadeInput.value = "";
    valorInput.value = "";
  }
}