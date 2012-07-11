$.vincircle = function(elements, parent){
	var height = parent.css('height').split('px')[0]*1;
	var width = parent.css('width').split('px')[0]*1;
	var centerx = width / 2 - 5; // add 10px padding

	var radiusx = width / 2 - 20;
	var radiusy = height / 2 - 20;

	var total = elements.length; // number of elements

	$.each(elements, function(key, value){
		var displ = key / total * 360; // degrees
		var sin = Math.sin(displ / 180 * Math.PI);
		var s1 = radiusx*radiusy*sin / 2;
		var s2 = 2 * s1;
		var sin2 = Math.sin(displ / 2 / 180 * Math.PI);
		var longk = s2 / ((2*radiusy) * sin2 / 2) || 0;
		var smalk = s2 / (longk / 2) || 0;
		var x = (smalk * longk) / (2*radiusy);
		var y = smalk * x / longk || 0;

		x += centerx;
		y += 10; // add 10px padding

		x = Math.round(x);
		y = Math.round(y);

		parent.append('<div style="position: absolute; margin-top: ' + y + 'px; margin-left: ' + x + 'px;">' + $(value).html() + '</div>');
	});
};
