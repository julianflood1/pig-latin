var pigLatin = function(userInput) {
  // var vowel = $.inArray(["a", "e", "i", "o", "u"]);
  // var wordArray = translation.split();
  if ((userInput === "a") || (userInput === "e") || (vowel === "i") || (userInput === "o") || (userInput === "u")) {
    return userInput + "ay";
  }
}


$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var englishInput = $("input#translate").val();
     var result = pigLatin(englishInput);
     $("#result").text(result);
     console.log(result);
      });
    });
