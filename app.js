const digitalDisplayText = ($d, v) => $d.text(('00'+v).slice(-2));
const initDisplay = (layout) => {
	const change = function(novoValor) {
		layout.valor = novoValor;
		digitalDisplayText(layout.$.find('.digital-display'), layout.valor);
	}
	layout.$.find('.btn-inc').click(() => {
		change(Math.min(layout.valor+layout.step, layout.max));
	});
	layout.$.find('.btn-dec').click(() => {
		change(Math.max(layout.valor-layout.step, layout.min));
	});
	digitalDisplayText(layout.$.find('.digital-display'), layout.valor);
}


jQuery(document).ready(function($) {
	var html_serie = $('#template-serie').html(),
	    html_intervalo = $('#template-intervalo').html();

	$('<div>').html((html_serie + html_intervalo).replace(/\$\{index\}/g, 1)).appendTo('#options .content-option');
	$('<div>').html((html_serie + html_intervalo).replace(/\$\{index\}/g, 2)).appendTo('#options .content-option');
	$('<div>').html((html_serie).replace(/\$\{index\}/g, 3)).appendTo('#options .content-option');
	
	const home = new Home(
		$('#home').find('.qtd-series'),
		$('#home').find('.duracao-series'),
		$('#home').find('.duracao-intervalo')
	);

	$('#home').show();
	$('#options').hide();
	$('#running').hide();
});
