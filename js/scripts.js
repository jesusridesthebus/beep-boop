var beep = 'Beep!';
var boop = 'Boop!';
var dave = 'I\'m sorry Dave. I\'m afraid I can\'t do that.'; 

function returnPhrase(number) {
	var input = $('input#beep-boop-input').val(number);
	var outputResult = '';
	var outputArray = [];
	
}

$(function() {
	$('form#beep-boop-input').submit(function(event) {
		event.preventDefault();
		$('.beep-boop-result').hide();
		var numberInput = parseInt($('#beep-boop-input').val());
		var result = returnPhrase(numberInput);
		$('.beep-boop-result').text(result);
	});
});
