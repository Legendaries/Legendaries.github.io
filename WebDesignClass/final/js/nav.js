function checkNavBar (){
	if(event.clientX < 50) {
		document.getElementById("sideNav").style.width = "250px";
		document.getElementById("content").style.marginLeft = "250px";
		var x = document.getElementsByClassName("navLink");
		for (i = 0; i < x.length; i++)
			x[i].style.paddingLeft = "32px";
		document.getElementById("openSymbol").style.visibility = "hidden";
	} else if(event.clientX > 250) {
		document.getElementById("sideNav").style.width = "50px";
		document.getElementById("content").style.marginLeft = "50px";
		var x = document.getElementsByClassName("navLink");
		for (i = 0; i < x.length; i++)
			x[i].style.paddingLeft = "64px";
		document.getElementById("openSymbol").style.visibility = "visible";
	}
}