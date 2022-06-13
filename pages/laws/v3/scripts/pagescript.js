$(document).ready(function() {
	$("#aboutLink").bind("click", function(){
		about();
	});

	$("#helpLink").bind("click", function(){
		pageHelp();
	});
	
	$("#sunburstLink").bind("click", function(){
		location.href="/sunburst/";
	});

	$("#backButton").bind("click", function(){
		backwards();
	});
	
	$("#resetButton").bind("click", function(){
		reset();
	});

	var winWidth = ($(window).width() > 800) ? 800 : $(window).width()*0.8;
	var winHeight = ($(window).height() > 600) ? 600 : $(window).height()*0.6;
	
	$("#about").dialog({
		autoOpen: false,
		show: "puff",
		hide: "puff",
		width: winWidth,
		height: winHeight
	});

	$("#help").dialog({
		autoOpen: false,
		show: "puff",
		hide: "puff",
		width: (winWidth),
		height: (winHeight)
	});
});

function about() {
	if ($("#help").dialog("isOpen")){$("#help").dialog("close");}
    $("#about").dialog("open");
}

function pageHelp() {
	if ($("#about").dialog("isOpen")){$("#about").dialog("close");}
	$("#help").dialog("open");
}
