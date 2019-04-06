function returnPhrase(number) {
	var resultArray = [];
		
	var i = 0;
	for(i = 0; i <= number; i++) {
		if(i.toString().includes('3')) {
			resultArray.push('I\'m sorry Dave. I\'m afraid I can\'t do that. ');
		} else if(i.toString().includes('2')) {
			resultArray.push('Boop! ');
		} else if(i.toString().includes('1')) {
			resultArray.push('Beep! ');
		} else {
			resultArray.push(i + ', ');
		}
	} return resultArray.join('');
}

$(function() {
	$('form#beep-boop').submit(function(event) {
		event.preventDefault();
		var numberInput = $('input#beep-boop-input').val();
		var result = returnPhrase(numberInput);
		$('#result').empty();
		$('#result').text(result.slice(0, -2));
		$('#result').show();
	});
});