/* Initialize canvas pixel resolution and size */
xPixels = 16;
yPixels = 16;
pixelHeight = $('#canvas').height() / xPixels;
pixelWidth = $('#canvas').width() / yPixels;


$(document).ready(function(){
  drawCanvas(xPixels, yPixels);
  $('#shakeIt').on('click', clearCanvas);
});

function clearCanvas(event){
  event.preventDefault();
  userInput = prompt('How many pixels per side would you like (max 100)?', xPixels);
  if (!isNaN(userInput) && userInput < 101 && userInput != null) {
    xPixels = Math.floor(userInput);
    yPixels = xPixels;
    drawCanvas(xPixels, yPixels);
  } else if (userInput === null){
    /*
      If the user cancels out, prompt will return null.
      Don't need an alert for that.
    */
  } else {
    alert("Let's keep it to numbers 100 and lower!");
  }
}

function drawCanvas(x, y){
  $('#canvas').empty();
  console.log('building canvas x :' + x + ' y : '+ y);
  for (var i = 0; i < x * y; i++){
    $('#canvas').append("<div class='pixel'></div>")
  }
  /* Adapt "pixel" size to the number of rows & columns */
  pixelHeight = $('#canvas').height() / x;
  pixelWidth = $('#canvas').width() / y;

  $('.pixel').css({'height': pixelHeight, 'width': pixelWidth});
  $('.pixel').on('mouseenter', function(){
    $(this).addClass('pixelOn');
    $(this).animate({'opacity':'1'},'fast');
  });
}
