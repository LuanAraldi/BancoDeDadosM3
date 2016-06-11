var valores = new Array();

function adicionaCategoria() {
    valores.length = 0;
    valores.push("DEFAULT");
    valores.push(document.getElementById("nomeCat").value);
    addBanco("categoria",valores);
  }

function adicionaInconformidade(){

}

function adicionaAcao(){
  
}
