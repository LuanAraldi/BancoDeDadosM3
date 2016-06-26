var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/sisgui";
var cliente = new pg.Client(conString);
var doc = new jsPDF('p', 'pt');

function 
