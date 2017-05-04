//back-end

function encodedMessage(text){
  debugger;
  var result = [];
  var cleanText = text.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
  var charArray = cleanText.split('');

  var rowLength = Math.floor(Math.sqrt(charArray.length));
  var columnLength = Math.ceil(Math.sqrt(charArray.length));

  for (var i=0; i <= charArray.length; i++) {

  }

 return result;
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
