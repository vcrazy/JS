/*  @author:  Vihren 'vcrazy' Ganev <vcrazy@abv.bg>, <http://ganev.bg>, <https://github.com/vcrazy>
 *  
 *  @example:
 *	$.vincircle($('#numbers1 span'), $('#clock'));
 *	
 * Means that we should get the html of all span elements inside #numbers1,
 * put them in circle or oval (depends on #clock1)
 * and then append them in #clock1
 */

$.vincircle = function(elements, parent){
	var height = parent.height();
	var width = parent.width();
	var centerx = width / 2; // remove 5px padding

	var radiusx = width / 2;
	var radiusy = height / 2 - $(parent).css('font-size').split('px')[0]*1 + 7; // ..

	var total = elements.length; // number of elements

	var ph = $(elements).first().parent().css('display') === 'none';

	if(ph){
		$(elements).first().parent().show();
	}

	$.each(elements, function(key, value){
		var displ = key / total * 360; // degrees
		var sin = Math.sin(displ / 180 * Math.PI);
		var s1 = radiusx * radiusy * sin / 2;
		var s2 = 2 * s1;
		var sin2 = Math.sin(displ / 2 / 180 * Math.PI);
		var longk = s2 / ((2 * radiusy) * sin2 / 2) || 0;
		var smalk = s2 / (longk / 2) || 0;
		var x = (smalk * longk) / (2 * radiusy);
		var y = smalk * x / longk || 0;

		x += centerx;

		if((key % (total / 2)) === 0){ // top or bottom
			x -= $(this).width() / 2;
		}else if(x > width / 2){
			x -= $(this).width();
		}

		x = Math.round(x);
		y = Math.round(y);

		parent.append('<div style="position: absolute; margin-top: ' + y + 'px; margin-left: ' + x + 'px;">' + $(value).html() + '</div>');
	});

	if(ph){
		$(elements).first().parent().hide();
	}
};
