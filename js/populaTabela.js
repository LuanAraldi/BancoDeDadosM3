
function populaTabelaInc(){
  var resultQuery;
  var result;
  var tabela = document.getElementById("tabelaInc");
  var cliente = new pg.Client(conString);

  while(tabela.rows.length > 0){
    tabela.deleteRow(0);
  }

  cliente.connect(function(err){
    if(err){
      alert("Problemas com o banco de dados!");
    }
    var query = "select inconformidade.id, data_abertura, titulo, nome from inconformidade, categoria where id_categoria = categoria.id order by inconformidade.id;";

      cliente.query(query, function(err, result) {
      });
      resultQuery = cliente.query(query);
      resultQuery.on('row', function(row, result){
        result.addRow(row);
      });
      resultQuery.on('end', function(result){
        cliente.end();
        for(i = 0; i < result.rows.length; i++){
          var row = tabela.insertRow(-1);
          var data = result.rows[i].data_abertura;
          var id = result.rows[i].id;
          row.insertCell(-1).innerHTML = id;
          row.insertCell(-1).innerHTML = result.rows[i].titulo;
          row.insertCell(-1).innerHTML = formataData(data);
          row.insertCell(-1).innerHTML = result.rows[i].nome;
          row.insertCell(-1).innerHTML = "<button class='btn btn-danger btn-xs' onclick='excluiInc(" + id + ")'>Excluir</button>"
        };
      });
  });
};

function excluiInc(idApagar){
  var cliente = new pg.Client(conString);
  var query;

  cliente.connect(function(err){
    if(err){
      alert("Impossível excluir, verifique se a Inconformidade não possui nenhuma ação!");
    }

    query = "DELETE FROM inconformidade WHERE id = " + idApagar + ";";
    cliente.query(query, function(err, result) {
      if(err) {
        alert("Verifique se não existe nenhuma ação cadastrada para a inconformidade!");
      }
      cliente.end();
      populaTabelaInc();
    });
  });
}

function formataData(data){
  var ano = data.getFullYear();
  var mes = (1 + data.getMonth()).toString();
  mes = mes.length > 1 ? mes : '0' + mes;
  var dia = data.getDate().toString();
  dia = dia.length > 1 ? dia : '0' + dia;
  return (dia + "/" + mes + "/" + ano);
};
