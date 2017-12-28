$(document).ready(function(){


$('#icon1').on('click', function(){
  $('.ion-social-youtube-outline').slideUp(1300).fadeIn(3500);
  $('#bttn1').fadeOut(1300).fadeIn(3500);

});

$('#icon2').on('click', function(){
  $('.ion-ios-mic-outline').slideUp(1300).fadeIn(3500);
  $('#bttn2').fadeOut(1300).fadeIn(3500);

});

$('#icon3').on('click', function(){
  $('.ion-ios-person-outline').slideUp(1300).fadeIn(3500);
  $('#bttn3').fadeOut(1300).fadeIn(3500);

});

$('#icon4').on('click', function(){
  $('.ion-ios-email-outline').slideUp(1300).fadeIn(3500);
  $('#bttn4').fadeOut(1300).fadeIn(3500);

});
});

var buttons = document.getElementsByClassName('nav-button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', myLink1);
}

<!--funct1 -->
function myLink1(){
  var buttonLink = this.dataset.link;
  window.setTimeout(function() {
    window.location.assign(buttonLink);
  }, 2000);
}

function slowLink1(){

  window.location.assign(buttonLink);
}
