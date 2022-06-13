// sets the basic elements elements for display
function update() {
	// start the force layout
	force
		.nodes(nodes)
		.links(links)
		.start();

	// **********************************************
	// Take the link target IDs (integers) and turn them into their respective nodes (objects)
	link = svg.selectAll(".link")
		.data(links, function(d) { return d.target.id; });

	// As new links are added, create the SVG lines and set the class
	link.enter().insert("svg:line", ".node")
		.attr("class", "link");

	// Exit any old links/lines
	link.exit().remove();
	// **********************************************

	// **********************************************
	// Update the nodes...
	node = svg.selectAll(".node")
		.data(nodes, function(d) { return d.id; });

	node.transition()
		.attr("r", function(d) { return d.children ? 4.5 : Math.sqrt(d.size) / 10; });

	// Enter any new nodes.
	var dragHandler = d3.behavior.drag()
		.on("dragstart", dragstart)
		.on("drag", dragmove)
		.on("dragend", dragend);

	var nodeEnter = node.enter().append("g")
		.attr("class", "node")
//		.on("click", click)
		.on("mouseup", click)
		.on("touchEnd", click)
		.call(dragHandler);
		
	nodeEnter.append("circle")
		.attr("r", function(d) { return d.size;})
		.attr("filter", "url(#dropShadow)")
		.attr("fill", function (d) { return getColor(d.colorid);})
		.attr("id", function (d) { return d.id;})
		.attr("class", "svgNode")
		.on("mouseover", function(d) {
			tooltipDiv.transition()
				.duration(200)
				.style("opacity", .9);
			
			var htmlContent = "<div id='tooltipTitle'>" + d.label + "</div>";
			htmlContent += d.detail;
			
			if (d.reference != null && d.reference != ""){
				htmlContent += ".<br />(" + d.reference + ")";
				htmlContent += "<br /><br />Parashah " + d.parashah;
				htmlContent += "<br />" + d.direction + " commandment";
				
				if (d.id > 174){
					htmlContent += "<br />&nbsp;<br />"
						+ "<a href='http://www.the613commandments.net/commandments/" 
						+ (d.id-174) + ".html' target='_blank'>View the commandment details</a>";
				}
			}
			
			if (d.id == rootNodeId){
				htmlContent +="<br />&nbsp; <br />" + (nodes.length-1) + " linked items.";
			}
			
			tooltipDiv .html(htmlContent)
				.style("left", (d3.event.pageX + 10) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
				
			Logos.ReferenceTagging.tag();
		})
        .on("mouseout", hideToolTip);
	  
	nodeEnter.append("text")
		.attr("dy", ".35em")
		.text(function(d) { return d.label })
		.attr("class", function (d) { return d.type;});

	node.exit().remove();
	
	// **********************************************
}

function tick() {
	link.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

	node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

// restart the show with a new root element
function click(d) {
	if (d.id == rootNodeId && d.id > 174){
		window.open("http://www.the613commandments.net/commandments/" + (d.id-174) + ".html", "_blank");
	}
	
	force.stop();
	rootNodeHistory.push(rootNodeId);
	rootNodeId = d.id;
	
	if (rootNodeHistory.length > 0){$("#backSection").fadeIn("slow", function(){});}
	setNodesAndLinks(d.id);
	update();
}

function backwards() {
	force.stop();
	rootNodeId = rootNodeHistory[rootNodeHistory.length-1];
	rootNodeHistory.pop();
	
	if (rootNodeHistory.length < 1){$("#backSection").fadeOut("slow", function(){});}
	setNodesAndLinks(rootNodeId);
	update();
}

function reset() {
	force.stop();
	rootNodeId = rootNodeHistory[0];
	rootNodeHistory.length = 0;
	
	$("#backSection").fadeOut("slow", function(){});
	setNodesAndLinks(rootNodeId);
	update();
}

function setNodesAndLinks(selectedNodeID) {
	var k = 0;
	var displayNodeArray = [];
	var displayLinkArray = [];
	
	displayNodeArray = displayArray[selectedNodeID][0];
	displayLinkArray = displayArray[selectedNodeID][1];
	
	// reset the nodes and links arrays
	nodes.length = 0;
	links.length = 0;
	
	// **********************************************
	// add the related nodes specified in the displayArray for the selected node
	for(var i=0; i < displayNodeArray.length; i++) {
		var node = Object.create(nodesArray[displayNodeArray[i]]);
		
		if (i==0){
			node.fixed = true;
			node.x = w / 2;
			node.y = h / 2 - 80;
		}
		
		nodes.push(node);
	}

	// **********************************************
	// add the related links specified in the displayArray for the selected node
	for(var j=0; j < displayLinkArray.length; j++) {
		var link = Object.create(linksArray[displayLinkArray[j]]);

		link.weight = 1;
		
		// change the source IDs to the node array index instead of the node ID
		for (var i=0; i < nodes.length; i++) {
			if (link.source == nodes[i].id){ 
				link.source = i; 
				i=nodes.length; // end the loop
			}
		}

		// change the target IDs to the node array index instead of the node ID
		for (var i=0; i < nodes.length; i++) {
			if (link.target == nodes[i].id){ 
				link.target = i;
				i=nodes.length; // end the loop
			}
		}
		
		// add the target IDs to the children attribute
		if (null == nodes[link.source].children){
			nodes[link.source].children = [];
			nodes[link.source].children.push(link.target);
		}
		
		// re-order the source and targets so the source IDs are lower than the target IDs
		if (link.source > link.target){
			var tempTarget;
			
			tempTarget = link.target;
			link.target = link.source;
			link.source = tempTarget;
		}

		links.push(link);
	}
}

function getColor(id){
	switch(id)
	{
		case 0:
			return "url(#gradLaw)";
			break;
		case 1:
			return "url(#gradTwo)";
			break;
		case 2:
			return "url(#gradTen)";
			break;
		case 3:
			return "url(#gradCat)";
			break;
		case 4:
			return "url(#gradCPos)";
			break;
		case 5:
			return "url(#gradCNeg)";
			break;
		case 6:
			return "url(#gradBbook)";
			break;
		case 7:
			return "url(#gradParsh)";
			break;
		case 8:
			return "url(#gradMTbook)";
			break;
		case 9:
			return "url(#gradMTcat)";
			break;
		default:
			return "#990000";
	}
}

function getQueryStringParam(lookup){
	var qStringVars = [], hash;
	var q = document.URL.split('?')[1];
	
	if(q != undefined){
		q = q.split('&');
		
		for(var i = 0; i < q.length; i++){
			hash = q[i].split('=');
			qStringVars.push(hash[1]);
			qStringVars[hash[0]] = hash[1];
		}
	}
	
	return qStringVars[lookup];
}

$(window).resize(function(){
	w = $("#d3viz").width();
	h = $("#d3viz").height();
	
	force.size([w, h - 160])
	setNodesAndLinks(rootNodeId);
	update();
});

function buildRightRail(){
	var currentType;
	var htmlOutput;
	
	currentType = nodesArray[0].type;
	htmlOutput  = "<div class='rrSectionHeader'>" + currentType + "</div>";
	htmlOutput += "<ul class='rrSection'>";
	
	for (var i=0; i < nodesArray.length;i++){
		if (nodesArray[i].type != currentType){
			currentType = nodesArray[i].type;
			
			htmlOutput += "</ul>";
			htmlOutput += "<div class='rrSectionHeader'>" + currentType + "</div>";
			htmlOutput += "<ul class='rrSection'>";
		}
		
		htmlOutput += "<li class='rrItem' " 
		+ "onclick='railClick(" + nodesArray[i].id + ")' "
		+ "onmouseover='railOver(" + nodesArray[i].id + ")' "
		+ "onmouseout='railOut(" + nodesArray[i].id + ")' "
		+ ">"
		+ nodesArray[i].label + "</li>";
	}
	
	htmlOutput += "</ul>";

	$("#rightRail").html(htmlOutput);
}

function railClick(d) {
	force.stop();
	rootNodeHistory.push(rootNodeId);
	rootNodeId = d;
	
	if (rootNodeHistory.length > 0){$("#backSection").fadeIn("slow", function(){});}
	setNodesAndLinks(d);
	update();
}

function railOver(d){
	var svgStuff = $("circle");
	
	for (i=0;i< svgStuff.length;i++){
		if (svgStuff[i].id == d){
			d3.select(svgStuff[i]).attr("fill", "#ff0000");
			i = svgStuff.length;
		}
	}
}

function railOut(d){
	var svgStuff = $("circle");
	
	for (i=0;i< svgStuff.length;i++){
		if (svgStuff[i].id == d){
			d3.select(svgStuff[i]).attr("fill", getColor(nodesArray[d].colorid));
			i = svgStuff.length;
		}
	}
}

function dragstart(d, i) {
	force.stop() // stops the force auto positioning before you start dragging
}

function dragmove(d, i) {
	d.px += d3.event.dx;
	d.py += d3.event.dy;
	d.x += d3.event.dx;
	d.y += d3.event.dy; 
	tick(); // this is the key to make it work together with updating both px,py,x,y on d !
}

function dragend(d, i) {
//	d.fixed = true; // of course set the node to fixed so the force doesn't include the node in its auto positioning stuff
	tick();
	force.resume();
}

function hideToolTip(){
	// fade out
	tooltipDiv.transition()
		.duration(500)
		.style("opacity", 0);
	
	// move it out of the way
	tooltipDiv.transition()
		.delay(500)
		.style("left", "-500px");
}