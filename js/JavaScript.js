<script type="text/javascript">
	fuction validaString(nome){
		var charValido = /[A-z][][A-z]/;
		return charValido.test(nome);
	} 
	</script>
	
	<script type="text/javascript">
	fuction validaNome(nome){
		var invalido = "ATENCAO!\n";
		var msgErro=false;
		if(!validaString(nome){
			
			invalido+="Digite seu(s) sobrenome(s)! "\n;
			msgErro=true;
		}
		if (msgErro){
			alert(invalido)
			return false;
		}
		return true;
	}
	</script>