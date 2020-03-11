@extends('layouts.app2')



@include('navbar')
<body style="background:#FFF;">
<style>

input {
	
	border:2px solid rgb(255, 255, 255);
	font-size:1.75em;
	padding:.25em .5em .3125em;
	color:rgb(255, 255, 255);
	border-radius:.25em;
	background:transparent;
    transition:all .100s;
    
	
}
.input{
	
	border:2px solid rgb(255, 255, 255);
	font-size:1.75em;
	padding:.25em .5em .3125em;
	color:rgb(255, 255, 255);
	border-radius:.25em;
	background:transparent;
    transition:all .100s;
    box-sizing:border-box;
	bottom: 4em;
	
	width:9em;
	margin-left:6.5em;
    
	
}





input {
	font-family: "Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif;
}




input:focus::-webkit-input-placeholder {
	opacity:.5;
}


input:focus::-moz-placeholder {
	opacity:.5;
}


input:focus:-ms-input-placeholder {
	opacity:.5;
}







.lable{
    color:rgb(255, 255, 255);
}
input {
	/* position:absolute; */
	box-sizing:border-box;
	bottom: 4em;
	
	width:16em;
	margin-left:5.5em;
}
</style>



<input type="hidden" className="nameInput" id="name" value={{$id}}>
<div id="carsofcompany"></div>
</body>