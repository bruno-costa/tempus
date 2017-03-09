const Home = function(domQtdSeries, domDuracaoSerie, domDuracaoIntervalo) {
	const self = this;
	const $qtdSeries = $(domQtdSeries), $duracaoSerie = $(domDuracaoSerie), $duracaoIntervalo = $(domDuracaoIntervalo);

	let qtdSeries = 10;
	const changeQtdSeries = function(novoValor) {
		qtdSeries = novoValor;
		digitalDisplayText($qtdSeries.find('.digital-display'), qtdSeries);
	}
	const incQtdSeries = function() {
		changeQtdSeries(qtdSeries = Math.min(qtdSeries+1, 99));
	}
	const decQtdSeries = function() {
		changeQtdSeries(qtdSeries = Math.max(qtdSeries-1, 1));
	}

	$qtdSeries.find('.btn-inc').click(incQtdSeries);
	$qtdSeries.find('.btn-dec').click(decQtdSeries);
	digitalDisplayText($qtdSeries.find('.digital-display'), qtdSeries);

	let duracaoSerie = 30;
	const changeDuracaoSerie = function(novoValor) {
		duracaoSerie = novoValor;
		digitalDisplayText($duracaoSerie.find('.digital-display'), duracaoSerie);
	}
	const incDuracaoSerie = function() {
		changeDuracaoSerie(duracaoSerie = Math.min(duracaoSerie+5, 95));
	}
	const decDuracaoSerie = function() {
		changeDuracaoSerie(duracaoSerie = Math.max(duracaoSerie-5, 5));
	}

	$duracaoSerie.find('.btn-inc').click(incDuracaoSerie);
	$duracaoSerie.find('.btn-dec').click(decDuracaoSerie);
	digitalDisplayText($duracaoSerie.find('.digital-display'), duracaoSerie);

	let duracaoIntervalo = 15;
	const changeDuracaoIntervalo = function(novoValor) {
		duracaoIntervalo = novoValor;
		digitalDisplayText($duracaoIntervalo.find('.digital-display'), duracaoIntervalo);
	}
	const incDuracaoIntervalo = function() {
		changeDuracaoIntervalo(duracaoIntervalo = Math.min(duracaoIntervalo+5, 95));
	}
	const decDuracaoIntervalo = function() {
		changeDuracaoIntervalo(duracaoIntervalo = Math.max(duracaoIntervalo-5, 5));
	}

	$duracaoIntervalo.find('.btn-inc').click(incDuracaoIntervalo);
	$duracaoIntervalo.find('.btn-dec').click(decDuracaoIntervalo);
	digitalDisplayText($duracaoIntervalo.find('.digital-display'), duracaoIntervalo);
}