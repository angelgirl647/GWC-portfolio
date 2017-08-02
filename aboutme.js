
// window.alert("WELCOME!");

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

    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    document.logo.style.color="orange";


  }

  else if (clicks==2){
    document.body.style.backgroundColor="white";
    document.getElementById("motto").style.color="#ffa31a"; //orange
    document.body.style.color="black";


  }

  else if (clicks==3){
    document.body.style.backgroundColor="#ff944d"; //coral pink
    document.getElementById("motto").style.color="red"

  }

  else if(clicks==4){

    document.body.style.backgroundColor="red";
    document.getElementById("motto").style.color="white"
  }

  else {
    clicks=0;
    document.body.style.backgroundColor="#ffa31a";  //orange
    document.getElementById("motto").style.color="white";
    document.body.style.color="black";

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
