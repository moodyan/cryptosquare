//back-end

function encodedMessage(text){
  debugger;
  var result = [];
  var cleanText = text.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
  var charArray = cleanText.split('');

  var rowLength = Math.floor(Math.sqrt(charArray.length));
  var columnLength = Math.ceil(Math.sqrt(charArray.length));

  var newSentence = [];
  var newString = [];
  var x = columnLength;

  for (var i=0; i < charArray.length; i++) {
       for (var j = 0; j < x ; j = j + 5) {
           newString += charArray.slice(j, j+5) + " ";
       }

   result = newString.slice(0, newString.length - 1);
   }


}



//front-end
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();

    var text = $("#text").val()

    var result = encodedMessage(text)
    $("#show").text(result)
  });
});
