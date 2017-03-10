const Home = function(domQtdSeries, domDuracaoSerie, domDuracaoIntervalo) {
	const layoutQtdSeries = {
		valor: 10,
		$ : $(domQtdSeries),
		step : 1,
		max : 99,
		min : 1
	};
	const layoutDuracaoSerie = {
		valor: 25,
		$ : $(domDuracaoSerie),
		step : 5,
		max : 95,
		min : 5
	};
	const layoutDuracaoIntervalo = {
		valor: 15,
		$ : $(domDuracaoIntervalo),
		step : 5,
		max : 95,
		min : 5
	};

	initDisplay(layoutQtdSeries);
	initDisplay(layoutDuracaoSerie);
	initDisplay(layoutDuracaoIntervalo);

	this.getValores = function() {
		return {
			qtdSeries: layoutQtdSeries.valor,
			duracaoSerie: layoutDuracaoSerie.valor,
			duracaoIntervalo: layoutDuracaoIntervalo.valor
		};
	}
}