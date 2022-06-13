var svgDefs;

var gradient0,
	gradient1,
	gradient2,
	gradient3,
	gradient4,
	gradient5,
	gradient6,
	gradient7,
	gradient8,
	gradient9;

var dropShadow;

function setupGradients(){
	svgDefs = svg.append("svg:defs");
	
	gradient0 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradLaw")
		.attr("spreadMethod", "pad");

	gradient0.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#00ABFF; stop-opacity:1");

	gradient0.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#0072E5; stop-opacity:1");
		
	gradient0.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#004C99;stop-opacity:1");

	// *******************************************************
	gradient1 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradTwo")
		.attr("spreadMethod", "pad");

	gradient1.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#FFBF26; stop-opacity:1");

	gradient1.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#FF7F19; stop-opacity:1");
		
	gradient1.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#FF5511;stop-opacity:1");
		
	// *******************************************************
	gradient2 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradTen")
		.attr("spreadMethod", "pad");

	gradient2.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#00FFAB; stop-opacity:1");

	gradient2.append("svg:stop")
		.attr("offset", "0.25")
		.attr("style", "stop-color:#00E572; stop-opacity:1");
		
	gradient2.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#00994C;stop-opacity:1");
		
	// *******************************************************
	gradient3 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradCat")
		.attr("spreadMethod", "pad");

	gradient3.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#FFFFE5; stop-opacity:1");

	gradient3.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#FFFF99; stop-opacity:1");
		
	gradient3.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#FFCC66;stop-opacity:1");
		
	// *******************************************************
	gradient4 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradCPos")
		.attr("spreadMethod", "pad");

	gradient4.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#FFFFFF; stop-opacity:1");

	gradient4.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#00FF00; stop-opacity:1");
		
	gradient4.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#00DD00;stop-opacity:1");

	// *******************************************************
	gradient5 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradCNeg")
		.attr("spreadMethod", "pad");

	gradient5.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#FFFFFF; stop-opacity:1");

	gradient5.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#FF0000; stop-opacity:1");
		
	gradient5.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#DD0000;stop-opacity:1");
		
	// *******************************************************
	gradient6 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradBbook")
		.attr("spreadMethod", "pad");

	gradient6.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#FF724C; stop-opacity:1");

	gradient6.append("svg:stop")
		.attr("offset", "0.3")
		.attr("style", "stop-color:#E54C33; stop-opacity:1");
		
	gradient6.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#993322;stop-opacity:1");
		
	// *******************************************************
	gradient7 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradParsh")
		.attr("spreadMethod", "pad");

	gradient7.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#FFFFBF; stop-opacity:1");

	gradient7.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#FFB27F; stop-opacity:1");
		
	gradient7.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#EE7755;stop-opacity:1");
		
	// *******************************************************
	gradient8 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradMTbook")
		.attr("spreadMethod", "pad");

	gradient8.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#ABABAB; stop-opacity:1");

	gradient8.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#727272; stop-opacity:1");
		
	gradient8.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#4C4C4C;stop-opacity:1");
		
	// *******************************************************
	gradient9 = svgDefs.append("svg:linearGradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%")
		.attr("id", "gradMTcat")
		.attr("spreadMethod", "pad");

	gradient9.append("svg:stop")
		.attr("offset", "0")
		.attr("style", "stop-color:#FFFFFF; stop-opacity:1");

	gradient9.append("svg:stop")
		.attr("offset", "0.5")
		.attr("style", "stop-color:#E5E5E5; stop-opacity:1");
		
	gradient9.append("svg:stop")
		.attr("offset", "1")
		.attr("style", "stop-color:#999999;stop-opacity:1");
}

function setupShadow(){
	dropShadow = svgDefs.append("svg:filter")
		.attr("id", "dropShadow")
		.attr("x", "-10%")
		.attr("y", "-10%")
		.attr("width", "200%")
		.attr("height", "200%");
			
	dropShadow.append("svg:feGaussianBlur")
		.attr("in", "SourceAlpha")
		.attr("stdDeviation", "3");

	dropShadow.append("svg:feOffset")
		.attr("dx", "2")
		.attr("dy", "4");
			
	var dropShadowMerge = dropShadow.append("svg:feMerge");
	
	dropShadowMerge.append("svg:feMergeNode");
	dropShadowMerge.append("svg:feMergeNode")
			.attr("in", "SourceGraphic");
}
