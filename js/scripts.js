function returnPhrase(number) {
	var outputArray = [];
	var resultArray = [];
	var i = 0;

	for (; i <= number; i++) {
		outputArray.push(i);
	}
	console.log(outputArray);

	for (; i <= outputArray.length; i++) {
		var outputResult = '';
		if (number.toString().includes(3)) {
			outputResult += resultArray.push('I\'m sorry Dave. I\'m afraid I can\'t do that.');
		} else if (number.toString().includes(2)) {
			outputResult += resultArray.push('Boop!');
		} else if (number.toString().includes(1)) {
			outputResult += resultArray.push('Beep!');
		} else {
			outputResult += resultArray.push(number);
		}
		console.log('result array', resultArray);
		console.log('result', outputResult);
	}
}

$(function() {
	$('form#beep-boop').submit(function(event) {
		event.preventDefault();
		$('#result').hide();
		var numberInput = parseInt($('input#beep-boop-input').val());
		var result = returnPhrase(numberInput);
		$('.beep-boop-result').text(result);
		$('#result').show(result);
	});
});


//outputArray.push('' + number) --changes to string ?