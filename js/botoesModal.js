var valores = new Array();

function adicionaCategoria() {
    valores.length = 0;
    valores.push("DEFAULT");
    valores.push(document.getElementById("nomeCat").value);
    addBanco("categoria",valores);
  }

function adicionaInconformidade(){
    valores.length = 0;
    valores.push("DEFAULT");
    valores.push(document.getElementById("descInc").value);
    valores.push(document.getElementById("dataInc").value);
    valores.push("NULL");
    valores.push(document.getElementById("catInc").value);
    valores.push("false");
    addBanco("inconformidade",valores);
}

function adicionaAcao(){
    valores.length = 0;
    valores.push("DEFAULT");
}
