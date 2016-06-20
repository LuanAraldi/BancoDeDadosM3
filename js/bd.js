var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/sisgui";
var cliente = new pg.Client(conString);

function addBanco(tabela, valores){

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

function selectBancoCombobox(tabela, colunaWhere, valorWhere, retorno){
  cliente.connect(function(err){
    if(err){
      alert("Problemas com o banco de dados!");
    }
    var query = "SELECT FROM " + tabela.trim();
    if(colunaWhere.length > 0 && valorWhere.length > 0){
      query += " WHERE ";
      for( i = 0; i < colunaWhere.length; i++){
        if(i != (colunaWhere.length - 1)){
          query += colunaWhere + " = '" + valorWhere + "'";
          query += ",";
        }else{
          query += colunaWhere + " = '" + valorWhere + "'";
          query += ";";
        };
       };
     };
      cliente.query(query, function(err, result) {
      });
      var resultQuery = cliente.query(query);
      resultQuery.on('row', function(row, result){
        result.addRow(row);
      });
      resultQuery.on('end', function(result){
        retorno = 5;
        cliente.end();
        return retorno;
      });
  });
};
