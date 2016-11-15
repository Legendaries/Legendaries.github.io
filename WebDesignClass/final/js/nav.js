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

function initNav (){
	var navElements = document.getElementsByClassName("navLink");
	for(i = 1; i <= navElements.length+1; i++) {
		var css = "div.nav a:nth-child(" + i + "){ transition: padding " + ((i * .25) + 1) + "s; }",
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
	}
}