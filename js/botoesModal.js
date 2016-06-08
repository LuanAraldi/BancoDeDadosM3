var valores[];

function init() {
  document.getElementById("botaoSalvarCategoria").addEventListener("click", function (e) {
    valores.push(document.getElementById("nomeCat").value());
    valores.push(1);
    addBanco("categoria",valores);
  });
