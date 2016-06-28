var cliente = new pg.Client(conString);
var doc = new jsPDF('p', 'pt');

function relGastoMes(){
  var cliente = new pg.Client(conString);
  var colunas = [{title: "Mês", dataKey: "mes"},
                 {title: "Ano", dataKey: "ano"},
                 {title: "Problemas", dataKey: "prob"},
                 {title: "Custo", dataKey: "custo"}
               ];
  var linhas = new Array();

  cliente.connect(function(err){
    var query = "SELECT to_char(data_abertura,'Mon') AS Mes, extract(year from data_abertura) AS Ano,count(inconformidade.id) as prob,(SELECT SUM(custo) FROM acao,inconformidade WHERE acao.id_inconformidade = inconformidade.id) as Custo FROM inconformidade group by 1,2;"
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
                        ano:result.rows[i].ano,
                        prob:result.rows[i].prob,
                        custo:"R$ " + (result.rows[i].custo).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')};
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
                 {title: "Custo", dataKey: "custo"},
                 {title: "Média Dias Resolução", dataKey: "mediaDias"}
               ];
  var linhas = new Array();

  cliente.connect(function(err){
    var query = "select categoria.id as id_categoria,nome as categoria, sum(custo) as custo,sum(data_fechamento - data_abertura)/count(categoria.id) as datas from acao INNER JOIN inconformidade ON(id_inconformidade = inconformidade.id) INNER JOIN categoria ON(id_categoria = categoria.id) group by 1;"

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
                        custo:"R$" + (result.rows[i].custo).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'),
                        mediaDias:result.rows[i].datas
                      };
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
