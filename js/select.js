var pg = require('pg');
var conString = "caminho do banco";

var client = new pg.Client(conString);
client.connect(function(err){
  if(err){
    alert("Problemas com o banco de dados!")
  }
})
