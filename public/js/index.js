$(document).ready(function() {
  setInterval(getMessages, 2000);
  setInterval(getUsers, 2000);
  let usersArr = [];

  //Utils
 function getMessages(){
  $("#sentMessages").empty();
   $.ajax({
    url: "/api/messages",
    type: "GET"
  }).then(function(res) {
    res.forEach(function(message){
      $("#sentMessages").append(`<p>${message.username}: ${message.text}  <span class="created-at">Message Sent: ${message.createdAt}</span></p>`);
    });
  });
 }

 function getUsers(){
  $("#activeUsers").empty();
  $.ajax({
   url: "/api/users",
   type: "GET"
 }).then(function(res) {
   res.forEach(function(users){
    usersArr.push(users.username);
    return usersArr;
   });
   let reducedUsers = new Set(usersArr);
   reducedUsers.forEach(function(user){
     console.log(user);
     $("#activeUsers").append(`<li>${user}</li>`);
   });
 });
}

//Grab user name on login page and store it using localStorage (maybe use css to make it hidden on chat.html page if need be)
let username = $("#username").val();

$("#loginSubmit").on("click", function() {
    localStorage.clear();
    localStorage.setItem("username", username);
  });

//If user wants to sign in as guest then their username is set as an anonymous username
$('#guest').on('click', function(){
  let number = Math.floor((Math.random() * 9999) + 1)
  username = "anonymous" + number;
  localStorage.setItem("username", username);
  window.location.href = "/chat";
});

function postMessage(){
  let message = $("#message").val();
  let username = localStorage.getItem("username");
  $.ajax({
    url: "/api/message",
    type: "POST",
    data: {
      text: message,
      username: username
    }
  }).then(function(){
    getMessages();
  });
}

function postUser(){
  let userName = $("#newUserName").val();
  let passWord = $("#newUserPassword").val();

  $.ajax({
    url: "/api/users",
    type: "POST",
    data: {
      username: userName,
      password: passWord 
    }
  }).then(function(res){
    window.location.href = "/login";
  });
}

  //GET all messages when user clicks send
  $("#send").on("click", function() {
    postMessage();
    $("#message").val('');
  }); 
  
//Goes to index.html
$("#home").on('click', function(){
  $.ajax({
    url: '/',
    type: "GET"
  }).then(function(){
    window.location.href = "/";
  });
});

//Deletes User(s) Possible candidate for removal
$(".delete-user").on("click", function(){
  let id = $(this).attr("id");
  $(this).parent().remove();
});

//Create New User
$("#createNewUser").on("click", function(e){
  e.preventDefault();
  postUser();
});

});