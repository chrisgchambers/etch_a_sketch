xPixels = 16;
yPixels = 16;

pixelHeight = $('#canvas').height() / xPixels;
pixelWidth = $('#canvas').width() / yPixels;

$(document).ready(function(){
  drawCanvas(xPixels, yPixels);
  $('#shakeIt').on('click', function(event){
    event.preventDefault();
    userInput = prompt('How many pixels per side would you like (max 100)?', '16');
    if (!isNaN(userInput) && userInput < 101 && userInput != null) {
      xPixels = userInput;
      yPixels = userInput;
      drawCanvas(xPixels, yPixels);
    } else if (userInput === null){
    } else {
      alert("Let's keep it to numbers 100 and lower!");
    }

  });
});

function drawCanvas(x, y){
  $('#canvas').empty();
  console.log('building canvas x :' + x + ' y : '+ y);
  for (var i = 0; i < x * y; i++){
    $('#canvas').append("<div class='pixel'></div>")
  }
  pixelHeight = $('#canvas').height() / x;
  pixelWidth = $('#canvas').width() / y;
  $('.pixel').css({'height': pixelHeight, 'width': pixelWidth});
  $('.pixel').on('mouseenter', function(){
    $(this).addClass('pixelOn');
    $(this).animate({'opacity':'1'},'fast');
  });
}
