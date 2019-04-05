

$(function() {
  $('form#beep-boop-input').submit(function(event) {
    event.preventDefault();
    $('.beep-boop-result').hide();
    var numberInput = parseInt($("#beep-boop-input").val());
    var result = returnPhrase(numberInput);
    $(".beep-boop-result").text(result);
  });
});
