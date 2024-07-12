function myfunc(xyz){
	
	console.log(typeof xyz);
	console.log(xyz);
	
	var thumbPath = xyz.src;
	console.log(thumbPath);
	
	var mainPath = thumbPath.replace("128/128" , "832/832");
	console.log(mainPath);
	
	console.log(document.getElementById('big-img'));
	
	document.getElementById('big-img').src = mainPath;
	
}

function hideBox(){
	document.querySelector('.blackBox').style.display="none";
	document.querySelector('.whiteBox').style.display="none";
	
}
function showBox(){
	document.querySelector('.blackBox').style.display="block";
	document.querySelector('.whiteBox').style.display="block";
	
}

hideBox();

document.querySelector('.icon').onclick = function(){
	showBox();
}

document.querySelector('.close').onclick = function(){
	hideBox();
}
document.querySelector('.blackBox').onclick = function(){
	hideBox();
}

document.body.onkeyup = function(){
	
	if (event.keyCode == 27){
		
		hideBox();
	}
	
}

document.querySelector('.descPara').style.display="none";

document.querySelector('.deschead').onclick=function(){
	// console.log(Math.random());
	console.log(this);
	console.log(this.nextElementSibling.style.display);
	var ans =this.nextElementSibling.style.display;
	
	if (ans == "none"){
		document.querySelector('.descPara').style.display='block';
		
	}
	else{
		document.querySelector('.descPara').style.display='none';
	}
}