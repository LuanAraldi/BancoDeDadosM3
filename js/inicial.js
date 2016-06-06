function myModal(){
    $(document).ready(function(){
    $(".btn").click(function(){
        $("#myModal").modal('show');
    });
});
}

function validarDepo(){
	if($('input[name=nomeDepo]').val() == ""){
		alert("Nome não inserido!");
		return false;	
	}

	if($('input[name=depo]').val() == ""){
		alert("Depoimento não inserido!");
		return false;	
	}
}

function validarEma(){
	if ($('input[name=nome]').val() == ""){
		alert("Nome não inserido!");
		return false;
	}

	if($('input[name=email]').val() == ""){
		alert("E-Mail não inserido!");
		return false;
	}

	if($('input[name=teleEma]').val() == ""){
		alert("Telefone não inserido!");
		return false;
	}

	if($('input[name=emailEma]').val() == ""){
		alert("Descrição do trabalho não inserida!");
		return false;
	}
}

(function($) {
    "use strict";

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery);