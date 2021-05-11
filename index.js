$(document).ready(function() {
  setTimeout(function() {
    $(".envelope.first").fadeIn(750).delay(1000).fadeOut(750);
  }, 1000);
  setTimeout(function() {
    $(".envelope.second").fadeIn(500).delay(1500).hide(0);
  }, 3500);
  setTimeout(function() {
    $(".envelope.third").show(0);
  }, 5500);
  setTimeout(function() {
    $(".card").fadeOut(500);
    $(".inside").attr("src", "images/inner_part.svg");
  }, 7000);
  setTimeout(function() {
    $(".card").fadeIn(500);
    $(".card").css("z-index", "1");
    $(".inside").css("transform", "rotate(30deg)");
  }, 8500);
  setTimeout(function() {
    $(".rsvp").slideDown(500);
  }, 10000);
});
