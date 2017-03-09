const digitalDisplayText = ($d, v) => $d.text(('00'+v).slice(-2));

$('#home').show();
$('#options').hide();
$('#running').hide();


jQuery(document).ready(function($) {
	var html_serie = $('#template-serie').html(),
	    html_intervalo = $('#template-intervalo').html();

	$('<div>').html((html_serie + html_intervalo).replace(/\$\{index\}/g, 1)).appendTo('#options .content-option');
	$('<div>').html((html_serie + html_intervalo).replace(/\$\{index\}/g, 2)).appendTo('#options .content-option');
	$('<div>').html((html_serie).replace(/\$\{index\}/g, 3)).appendTo('#options .content-option');
	
	new Home(
		$(home).find('.qtd-series'),
		$(home).find('.duracao-series'),
		$(home).find('.duracao-intervalo')
	);
});
