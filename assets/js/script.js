/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className == "navbar") {
    x.className = "navbar responsive";
  } 
  else {
    x.className = "navbar";
  }
}