var website;

function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions)
        if( el.style[t] !== undefined )
            return transitions[t];
}
function redirect (site){
	document.getElementById("overlay").style.zIndex = "1";
	document.getElementById("overlay").style.background = "rgba(0,0,0,0.7)";
	website = site;
	var transitionEnd = whichTransitionEvent();
	document.getElementById("overlay").addEventListener(transitionEnd, function () {window.location = website;}, false);
}

function initDisplay (){
	document.getElementById('overlay').style.background = 'rgba(0,0,0,0.0)';
	
	var transitionEnd = whichTransitionEvent();
	document.getElementById("overlay").addEventListener(transitionEnd, function (){document.getElementById('overlay').style.zIndex = '-1';}, false);
}