
window.alert("WELCOME!");

//clicks counter
var clicks = 0;
   function click() {
       clicks += 1;
       return clicks;
   };

//click to see robot pics
function click4Pics(){
document.getElementById("robotPicsContainer").src="http://i.imgur.com/UHdxkp8.jpg";
}

function changeBg(){
  click();
  if (clicks==1){
    document.body.style.backgroundColor="red";

  }

  else if (clicks==2){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    document.logo.style.color="white";

  }

  else{
    document.body.style.backgroundColor="orange";
    document.body.style.color="black";
    document.body.motto.color="white"; 


  }
}

//randomizes bg color
// var r= Math.floor(Math.random()*255);
// var g= Math.floor(Math.random()*255);
// var b= Math.floor(Math.random()*255);
//
// function randomBgColor(){
//   return document.body.style.backgroundColor= rgb('+r+','+g+',255);
// }
