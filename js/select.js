var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/sisgui";

function addBanco(tabela, valores){
  var client = new pg.Client(conString);
  var query = "INSERT INTO " + tabela.trim() + " VALUES(";
  for( i = 0; i < valores.length; i++){
    query += valores[i];
  }
  query += ");";

  client.connect(function(err){
    if(err){
      console.log("Problemas com o banco de dados!");
    }
    pg.query(query);
  })
}
