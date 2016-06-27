var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/sisgui";
var cliente = new pg.Client(conString);
var doc = new jsPDF('p', 'pt');

function relGastoMes(){
  var cliente = new pg.Client(conString);
  var colunas = [{title: "Mês", dataKey: "mes"},
                 {title: "Ano", dataKey: "ano"},
                 {title: "Custo", dataKey: "custo"}
               ];
  var linhas = new Array();

  cliente.connect(function(err){
    var query = "SELECT to_char(data,'Mon') AS Mes, extract(year from data) AS Ano,sum(custo) AS Custo FROM acao group by 1,2"
    cliente.query(query, function(err, result) {
    });
    resultQuery = cliente.query(query);
    resultQuery.on('row', function(row, result){
      result.addRow(row);
    });
    resultQuery.on('end', function(result){
      cliente.end();
      for(i = 0; i < result.rows.length; i++){
        var linhaObj = {mes:result.rows[i].mes,
                        ano:result.rows[i].ano ,
                        custo:result.rows[i].custo};
        linhas.push(linhaObj);
        delete linhaObj;
        console.log(result.rows);
      };
      console.log(linhas);
      console.log(colunas);
      doc.autoTable(colunas, linhas);
      doc.save('relGastosMes.pdf');
    });
  });
}

function relGastoCat(){
  var cliente = new pg.Client(conString);
  var colunas = [{title: "Categoria", dataKey: "categoria"},
                 {title: "Custo", dataKey: "custo"}
               ];
  var linhas = new Array();

  cliente.connect(function(err){
    var query = "select nome as categoria, sum(custo) as custo from acao INNER JOIN inconformidade ON(id_inconformidade = inconformidade.id) INNER JOIN categoria ON(id_categoria = categoria.id) group by 1"

    cliente.query(query, function(err, result) {
    });
    resultQuery = cliente.query(query);
    resultQuery.on('row', function(row, result){
      result.addRow(row);
    });
    resultQuery.on('end', function(result){
      cliente.end();
      for(i = 0; i < result.rows.length; i++){
        var linhaObj = {categoria:result.rows[i].categoria ,
                        custo:result.rows[i].custo};
        linhas.push(linhaObj);
        delete linhaObj;
        console.log(result.rows);
      };
      console.log(linhas);
      console.log(colunas);
      doc.autoTable(colunas, linhas);
      doc.save('relGastosCat.pdf');
    });
  });
}
