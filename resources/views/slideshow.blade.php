@extends('layouts.app2')

@include('navbar')
    <head>
        <meta charset="UTF-8" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <title>iRental</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="Fullscreen Background Image Slideshow with CSS3 - A Css-only fullscreen background image slideshow" />
        <meta name="keywords" content="css3, css-only, fullscreen, background, slideshow, images, content" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/style4.css" />
        <script type="text/javascript" src="js/modernizr.custom.86080.js"></script>
        


<style>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 100%;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 3.5s;
  animation-name: fade;
  animation-duration: 3.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}

@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css);
@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

body {
    font-family: 'Lato', sans-serif;
    background: #353535;
    color: #FFF;
}
.jumbotron h1 {
    color: #353535;
}
footer {
  margin-bottom: 0 !important;
  margin-top: 80px;
}
footer p {
  margin: 0;
  padding: 0;
}
span.icon {
    margin: 0 5px;
    color: #D64541;
}
h2 {
    color: #BDC3C7;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mrng-60-top {
    margin-top: 60px;
}
/* Global Button Styles */
a.animated-button:link, a.animated-button:visited {
    position: relative;
    display: block;
    margin: 30px auto 0;
    padding: 14px 15px;
    color: #fff;
    font-size:14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: .08em;
    border-radius: 0;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}
a.animated-button:link:after, a.animated-button:visited:after {
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    z-index: -1;
    -webkit-transition: all 0.75s ease 0s;
    -moz-transition: all 0.75s ease 0s;
    -o-transition: all 0.75s ease 0s;
    transition: all 0.75s ease 0s;
}
a.animated-button:link:hover, a.animated-button:visited:hover {
    color: #FFF;
    text-shadow: none;
}
a.animated-button:link:hover:after, a.animated-button:visited:hover:after {
    height: 450%;
}
a.animated-button:link, a.animated-button:visited {
    position: relative;
    display: block;
    margin: 30px auto 0;
    padding: 14px 15px;
    color: #fff;
    font-size:14px;
    border-radius: 0;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: .08em;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}

/* Victoria Buttons */

a.animated-button.victoria-one {
    border: 2px solid #DC2d13;
}
a.animated-button.victoria-one:after {
    background: #DC2d13;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
}
a.animated-button.victoria-two {
    border: 2px solid #DC2d13;
}
a.animated-button.victoria-two:after {
    background: #DC2d13;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    transform: translateX(-50%) translateY(-50%) rotate(25deg);
}
a.animated-button.victoria-three {
    border: 2px solid #DC2d13;
}
a.animated-button.victoria-three:after {
    background: #DC2d13;
    opacity: .5;
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}
a.animated-button.victoria-three:hover:after {
    height: 140%;
    opacity: 1;
}
a.animated-button.victoria-four {
    border: 2px solid #DC2d13;
}
a.animated-button.victoria-four:after {
    background: #DC2d13;
    opacity: .5;
    -moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    transform: translateY(-50%) translateX(-50%) rotate(90deg);
}
a.animated-button.victoria-four:hover:after {
    opacity: 1;
    height: 600% !important;
}
/* Sandy Buttons */

a.animated-button.sandy-one {
    border: 2px solid #AEA8D3;
    color: #FFF;
}
a.animated-button.sandy-one:after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    
}
a.animated-button.sandy-one:hover:after {
    height: 120% !important;
    opacity: 1;
    color: #FFF;
}
a.animated-button.sandy-two {
    border: 2px solid #AEA8D3;
    color: #FFF;
}
a.animated-button.sandy-two:after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) translateX(-50%) rotate(90deg);
    transform: translateY(-50%) translateX(-50%) rotate(90deg);
}
a.animated-button.sandy-two:hover:after {
    height: 600% !important;
    opacity: 1;
    color: #FFF;
}
a.animated-button.sandy-three {
    border: 2px solid #AEA8D3;
    color: #FFF;
}
a.animated-button.sandy-three:after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
}
a.animated-button.sandy-three:hover:after {
    height: 400% !important;
    opacity: 1;
    color: #FFF;
}
a.animated-button.sandy-four {
    border: 2px solid #AEA8D3;
    color: #FFF;
}
a.animated-button.sandy-four:after {
    border: 3px solid #AEA8D3;
    opacity: 0;
    -moz-transform: translateY(-50%) translateX(-50%) rotate(25deg);
    -ms-transform: translateY(-50%) translateX(-50%) rotate(25deg);
    -webkit-transform: translateY(-50%) translateX(-50%) rotate(25deg);
    transform: translateY(-50%) translateX(-50%) rotate(25deg);
}
a.animated-button.sandy-four:hover:after {
    height: 400% !important;
    opacity: 1;
    color: #FFF;
}
/* Gibson Buttons */

a.animated-button.gibson-one {
    border: 2px solid #65b37a;
    color: #FFF;
}
a.animated-button.gibson-one:after {
    opacity: 0;
    background-image: -webkit-linear-gradient( transparent 50%, rgba(101,179,122,0.2) 50%);
    background-image: -moz-linear-gradient(transparent 50%, rgba(101,179,122,0.2) 50%);
    background-size: 10px 10px;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
    transform: translateX(-50%) translateY(-50%) rotate(25deg);
}
a.animated-button.gibson-one:hover:after {
    height: 600% !important;
    opacity: 1;
    color: #FFF;
}
a.animated-button.gibson-two {
    border: 2px solid #65b37a;
    color: #FFF;
}
a.animated-button.gibson-two:after {
    opacity: 0;
    background-image: -webkit-linear-gradient( transparent 50%, rgba(101,179,122,0.2) 50%);
    background-image: -moz-linear-gradient(transparent 50%, rgba(101,179,122,0.2) 50%);
    background-size: 10px 10px;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
}
a.animated-button.gibson-two:hover:after {
    height: 600% !important;
    opacity: 1;
    color: #FFF;
}
a.animated-button.gibson-three {
    border: 2px solid #65b37a;
    color: #FFF;
}
a.animated-button.gibson-three:after {
    opacity: 0;
    background-image: -webkit-linear-gradient( transparent 50%, rgba(101,179,122,0.2) 50%);
    background-image: -moz-linear-gradient(transparent 50%, rgba(101,179,122,0.2) 50%);
    background-size: 10px 10px;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(90deg);
    transform: translateX(-50%) translateY(-50%) rotate(90deg);
}
a.animated-button.gibson-three:hover:after {
    height: 600% !important;
    opacity: 1;
    color: #FFF;
}
a.animated-button.gibson-four {
    border: 2px solid #65b37a;
    color: #FFF;
}

a.animated-button.gibson-four:hover:after {
    height: 600% !important;
    opacity: 1;
    color: #FFF;
}
/* Thar Buttons */

a.animated-button.thar-one {
    color: #fff;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #F7CA18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
a.animated-button.thar-one:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: none;
}
a.animated-button.thar-one:hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
}
a.animated-button.thar-one:before {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
a.animated-button.thar-two {
    color: #fff;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #F7CA18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
a.animated-button.thar-two:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: ntwo;
}
a.animated-button.thar-two:hover:before {
    top: 0%;
    bottom: auto;
    height: 100%;
}
a.animated-button.thar-two:before {
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
a.animated-button.thar-three {
    color: #fff;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #F7CA18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);

}
a.animated-button.thar-three:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nthree;
}
a.animated-button.thar-three:hover:before {
    left: 0%;
    right: auto;
    width: 100%;
}
a.animated-button.thar-three:before {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);

}
a.animated-button.thar-four {
    color: #fff;
    cursor: pointer;
    display: block;
    position: relative;
    border: 2px solid #F7CA18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);

}
a.animated-button.thar-four:hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nfour;
}
a.animated-button.thar-four:hover:before {
    right: 0%;
    left: auto;
    width: 100%;
}
a.animated-button.thar-four:before {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #F7CA18;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);

}
</style>
    </head>
    
    <div>
   <div class="" style="width:100%;height:750px; background:whiht">

   
   
        
            
    




<div class="slideshow-container">

<div class="mySlides fade">
  
  <img src="./images/2.jpg" style="width:100%">
  <div style="position: absolute;margin-top: -200px;margin-left: 20px;">
  <h2 style="color: white;">Rent instantly for affordable prices.</h2>
  <h2 style="color: white;"> Recieve instantly</h2>
  <h2 style="color: white;">nd drive with comfort!</h2>
</div>

</div>

<div class="mySlides fade">
  
  <img src="./images/3.jpg" style="width:100%">
  <div style="position: absolute;margin-top: -200px;margin-left: 20px;">
    <h2 style="color: white;">add new </h2>
    </div>
</div>

<div class="mySlides fade">
 
  <img src="./images/1.jpg" style="width:100%">
  <div style="position: absolute;margin-top: -200px;margin-left: 20px;">
    <h2 style="color: white;">add  car</h2>
    </div>
</div>

</div>

</div>
<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>

<div style="margin-left:420px;text-align: center;" class="row">
        <div class="col-md-3 col-sm-3 ">
           
                <a href="{{ route('login') }}" class="btn btn-sm animated-button victoria-two" style="color: #000;height: 250px;">
                <br>
                OFFER A CAR 
                <br>
                <br>
                <br>
                <br>
                <img src="./add-car.png" style="height: 50px;">
                </a> 
               </div>
               <div class="col-md-3 col-sm-3 ">
                 
                    <a href="{{ url('carlist') }}" class="btn btn-sm animated-button victoria-two" style="color: #000;height: 250px;">
                    <br>
                    RENT A CAR
                    <br>
                <br>
                <br>
                <br>
                    <img src="./get-car.png"  style="height: 50px;">
                    </a> 
                   </div>

</div>


     <br>
     <br>  



</div>

<div id="example"></div>

<div style="position: relative;">
    <button 
    style="clip-path: polygon(0 0, 100% 0, 100% 17%, 80.5% 17%, 69.5% 0, 30.5% 0, 20% 17%, 0 17%);background: red; top: 0;width: 100%;height: 500px;padding-top: 60px; position: relative;"></button>
<div style="clip-path: polygon(30% 0%, 70% 0%, 80% 26%, 100% 27%, 100% 100%, 0 100%, 0 27%, 20% 27%); width: 100%;height:300px;top: 15px;position: absolute;">

    
    <img src="{{asset('./car_img/imagess.jpg')}}" style="width: 100%;height: 100%" >

</div>
<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
</script>
</div>