$(document).ready(function () {
  //Setup typed.js
  var sentences = [];
  $('.text-cycle-item').each(function( index ) {
    sentences.push($(this).text());
  });

  $('.text-cycle').typed({
    strings: sentences,
    typeSpeed: 0,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    backDelay: 875,
  });

  });