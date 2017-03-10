const Options = function(domMain) {
	const self = this;
	const $dom = $(domMain);
	const html_serie = $('#template-serie').html(),
	html_intervalo = $('#template-intervalo').html();

	let duracoesSeries = {};
	let duracoesIntervalos = {};

	function createNewInput(init, html, index) {
		const obj = {
			valor: init,
			$ : $('<div>').html((html).replace(/\$\{index\}/g, index)),
			step : 5,
			max : 95,
			min : 5
		};
		$dom.find('.content-option').append(obj.$);
		initDisplay(obj);
		return obj;
	}

	this.renderNew = (qtdSeries, duracaoSerie, duracaoIntervalo) => {
		$dom.find('.content-option').html('');

		duracoesSeries = {};
		duracoesIntervalos = {};

		for(var i = 0; i < qtdSeries-1; i++) {
			duracoesSeries[i] = createNewInput(duracaoSerie, html_serie, i+1);
			duracoesIntervalos[i] = createNewInput(duracaoIntervalo, html_intervalo, i+1);
			
		}
		duracoesSeries[i] = createNewInput(duracaoSerie, html_serie, i+1);
	}

	this.getValores = () => {
		return {
			duracoesSeries,
			duracoesIntervalos
		}
	}
}