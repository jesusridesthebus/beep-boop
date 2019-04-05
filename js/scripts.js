function returnPhrase(number) {
	var outputArray = [];
	var resultArray = [];
	var i = 0;

	for (i = 0; i <= number; i++) {
		outputArray.push(i);
	}
	console.log(outputArray);

	for (i = 0; i < outputArray.length; i++) {
		if(i.toString().includes('3')) {
			resultArray.push('I\'m sorry Dave. I\'m afraid I can\'t do that.');
		} else if(i.toString().includes('2')) {
			resultArray.push('Boop!');
		} else if(i.toString().includes('1')) {
			resultArray.push('Beep!');
		} else {
			resultArray.push(i);
		}
	}
	console.log('result array', resultArray);

	resultArray.forEach(function() {
		$('#result').append(resultArray);
	});
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