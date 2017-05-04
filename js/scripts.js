//back-end

function encodedMessage(text){
  debugger;
  var result = [];
  var cleanText = text.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
  var charArray = cleanText.split('');
  console.log(charArray);



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
