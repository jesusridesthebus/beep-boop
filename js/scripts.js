// var beep = 'Beep!';
// var boop = 'Boop!';
// var dave = 'I\'m sorry Dave. I\'m afraid I can\'t do that.'; 

function returnPhrase(number) {
	var outputArray = [];
	
	
	for (var i = 0; i <= number; i++) {
		var outputResult = '';
		if (number.toString().includes(3)) {
			outputArray.push(outputResult += 'I\'m sorry Dave. I\'m afraid I can\'t do that.');
		} else if (number.toString().includes(2)) {
			outputArray.push(outputResult += 'Boop!');
		} else if (number.toString().includes(1)) {
			outputArray.push(outputResult += 'Beep!');
		// } else {
		// 	outputArray.push(outputResult);
		}
	}
	console.log(outputArray);
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