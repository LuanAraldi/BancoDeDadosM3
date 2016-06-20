var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/sisgui";
var cliente = new pg.Client(conString);

var arr1 = new Array();
var arr2 = new Array();

var retorno;

function init() {
  var teste = selectBancoCombobox("categoria", arr1, arr2, retorno);
  console.log(teste + " - " + retorno);
};
init();
