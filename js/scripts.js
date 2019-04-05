var beep = 'Beep!';
var boop = 'Boop!';
var dave = 'I\'m sorry Dave. I\'m afraid I can\'t do that.'; 

function returnPhrase(number) {
	var outputArray = [];
	
	
	for (var i = 0; i <= number; i++) {
		var outputResult = '';
		if (number.includes(1)) {
			outputArray(outputResult += 'Beep!').push;
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