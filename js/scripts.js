//back-end

function encodedMessage(text){
  var result = [];




 return result;
}



//front-end
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();

    var num = $("#number").val()

    var result = encodedMessage(text)
    $("#show").text(result)
  });
});
