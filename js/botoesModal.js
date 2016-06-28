var valores = new Array();

function adicionaCategoria() {
    valores.length = 0;
    valores.push("DEFAULT");
    valores.push(document.getElementById("nomeCat").value);
    addBanco("categoria",valores);
  }

function adicionaInc(){
    valores.length = 0;
    valores.push("DEFAULT");
    valores.push(document.getElementById("descInc").value);
    valores.push(document.getElementById("dataInc").value);
    valores.push("NULL");
    valores.push(document.getElementById("comboCategoria").value);
    valores.push("false");
    valores.push(document.getElementById("titInc").value);
    addBanco("inconformidade",valores);
}

function adicionaAcao(){
    valores.length = 0;
    valores.push("DEFAULT");
    valores.push(document.getElementById("comboAcao").value);
    valores.push(document.getElementById("precoAcao").value);
    valores.push(document.getElementById("descricao").value);
    valores.push(document.getElementById("dataAcao").value);
    addBanco("acao",valores);

    if(document.getElementById("opcaoRadio1").checked){
      var acao = document.getElementById("comboAcao").value;
      var dataFim = document.getElementById("dataAcao").value;
      finalizaInc(acao, document.getElementById("dataAcao").value);
    };
}
