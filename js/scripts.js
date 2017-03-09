$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var englishInput = $("input#translate").val();


    $("#result").text(englishInput);
  });
});
