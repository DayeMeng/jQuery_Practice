var username="";

function send_message(message){

  var prevState = $("#container").html();

  if (prevState.length > 4) {
    prevState = prevState + "<br>";
  }

  $("#container").html(prevState + "<span class='current_message'>"
  + "<span class='bot'>Chatbot: </span>" + message + "</span>");
  $(".current_message").hide();
  $(".current_message").delay(500).fadeIn();
  $(".current_message").removeClass("current_message"); 

}

function get_username(){

  send_message("Hello, what is your name? ");

}

function ai(message){

  if (username.length<3) {
    username = message;
    send_message("Nice to meet you " + username + ", how are you doing? ");
  }

}

$(function(){

  get_username();

  $("#textbox").keypress(function(){
    if (event.which == 13) {
      if ($("#enter").prop("checked")) {

        $("#send").click();
        event.preventDefault();

      }
    }
  });

  $("#send").click(function(){
    var userName = "<span class=\"userName\">You: </span>";

    var newMessage = $("#textbox").val();

    $("#textbox").val("");

    var prevState = $("#container").html();

    if (prevState.length > 4) {
      prevState = prevState + "<br>";
    }

    $("#container").html(prevState + userName + newMessage);

    $("#container").scrollTop($("#container").prop("scrollHeight"));

    ai(newMessage);
  });

});
