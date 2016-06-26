var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/sisgui";

function addBanco(tabela, valores){
  var cliente = new pg.Client(conString);

  cliente.connect(function(err){
    if(err){
      alert("Problemas com o banco de dados!");
    }
    var query = "INSERT INTO " + tabela.trim() + " VALUES(";
    alert(valores.length);
    for( i = 0; i < valores.length; i++){
      if(typeof valores[i] == "string" && valores[i] != "DEFAULT" && valores[i] != "NULL"){
        query += "'" + valores[i] + "'";
      }else{
        query += valores[i];
      }
      if(i == (valores.length - 1)){}else {
        query += ",";
      }
    };
    query += ");";
    alert(query);
    cliente.query(query, function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      cliente.end();
    });
  });
};

function populaComboboxCategoria(){
  var resultQuery;
  var result;
  var combo = document.getElementById("comboCategoria");
  var cliente = new pg.Client(conString);

  cliente.connect(function(err){
    if(err){
      alert("Problemas com o banco de dados!");
    }
    var query = "SELECT * FROM categoria";

      cliente.query(query, function(err, result) {
      });
      resultQuery = cliente.query(query);
      resultQuery.on('row', function(row, result){
        result.addRow(row);
      });
      resultQuery.on('end', function(result){
        cliente.end();
        for(i = 0; i < result.rows.length; i++){
          var combobox = document.createElement("option");
          combobox.text = result.rows[i].nome;
          combobox.value = result.rows[i].id;
          combo.add(combobox, null);
        };
      });
  });
};

function populaComboboxInc(){
  var resultQuery;
  var result;
  var combo = document.getElementById("comboAcao");
  var cliente = new pg.Client(conString);

  cliente.connect(function(err){
    if(err){
      alert("Deu erro na inconformidade");
    }
    var query = "SELECT * FROM inconformidade WHERE situacao = false";

      cliente.query(query, function(err, result) {
      });
      resultQuery = cliente.query(query);
      resultQuery.on('row', function(row, result){
        result.addRow(row);
      });
      resultQuery.on('end', function(result){
        cliente.end();
        for(i = 0; i < result.rows.length; i++){
          var combobox = document.createElement("option");
          combobox.text = result.rows[i].descricao;
          combobox.value = result.rows[i].id;
          combo.add(combobox, null);
        };
      });
  });
};

function finalizaInc(idInc){
  var cliente = new pg.Client(conString);
  var query = "UPDATE inconformidade SET situacao = true WHERE id = " + idInc;
  alert(query);

  cliente.connect(function(err){
    cliente.query(query, function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      cliente.end();
    });
  });
};
