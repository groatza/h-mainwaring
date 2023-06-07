$(document).ready(function() {
	$(".directions > li").each(function() { //for each step, add a button to the start
		$(this).prepend("<button class=\"hide-direction\" aria-label=\"Hide step\"><span aria-hidden=\"true\">&#10004;</span></button>"); //this is pretty ugly
	});
	$(".hide-direction").click( function() { //on click, remove element (basically)
		$(this).parent().css("position","absolute");
		$(this).parent().css("visibility","hidden");
	});
});