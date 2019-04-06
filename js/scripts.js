function returnPhrase(number) {
	var outputArray = [];
	var resultArray = [];
	var i = 0;

	for (i = 0; i <= number; i++) {
		outputArray.push(i);
	}

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

	for (i = 0; i < outputArray.length; i++) {
		$('#result').append('<span>' + resultArray[i] + ', </span>');
	};
}

$(function() {
	$('form#beep-boop').submit(function(event) {
		event.preventDefault();
		$('#result').hide();
		var numberInput = parseInt($('input#beep-boop-input').val());
		$('#result').empty();
		var result = returnPhrase(numberInput);
		$('.beep-boop-result').text(result);
		$('#result').show();
	});
});