// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify)
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for(var i = 0; i < image.length; i++){
    var row = image[i];
    for(var t = 0; t < row.length; t++){
    
    //takeing a part of image values 
  var rgbString = image[i][t];
  var rgbNumbers = rgbStringToArray(rgbString);
  rgbNumbers[0] = 255;
  //calling rgb Array to string fuction with rgb numbers as a argument 
  rgbArrayToString(rgbNumbers) === rgbString;
  //returning image values 
  image[i][t] = rgbArrayToString(rgbNumbers)
  }
}
  
}


// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function
function keepInBounds(num){
  return num < 0 ? 0 
  : num > 255 ? 255 
  : num > 0 ? num:
   num < 255 ? num:
   num;

}
console.log(keepInBounds(-30));
console.log(keepInBounds(300));
console.log(keepInBounds(127));
// TODO 3: Create reddify function
function reddify(red){
  rgbNumbers[0] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(blue){
  blue[2] = keepInBounds(blue[2] - 50);
}
function increaseGreenByBlue(Reen){
  
}

// CHALLENGE code goes below here
