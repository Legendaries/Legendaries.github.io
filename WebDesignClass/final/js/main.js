function checkNavBar (){
	if(event.clientX < 25) {
		document.getElementById("sideNav").style.width = "250px";
		document.getElementById("content").style.marginLeft = "250px";
		document.getElementById("openSymbol").style.visibility = "hidden";
	} else if(event.clientX > 250) {
		document.getElementById("sideNav").style.width = "25px";
		document.getElementById("content").style.marginLeft = "25px";
		document.getElementById("openSymbol").style.visibility = "visible";
	}
}