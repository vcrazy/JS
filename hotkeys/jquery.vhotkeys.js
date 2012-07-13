/*  @author:  Vihren 'vcrazy' Ganev <vcrazy@abv.bg>, <http://ganev.bg>, <https://github.com/vcrazy>
 *  
 *  Works with single keys and char codes!
 *  
 *  @example:
 *	$.vhotkey('a', function(){alert("a pressed!");});
 *	$.vhotkey(18, function(){alert('alt pressed!');});
 */

$.vhotkey = function(key, callback, args) {
	if(typeof key === 'string'){
		key = key.toLowerCase();
	}

	$('body').keydown(function(e) {
		if(!args) args=[]; // IE barks when args is null
		var code = (e.keyCode ? e.keyCode : e.which);
		var character;

		if(typeof key === 'string'){
			character = String.fromCharCode(code).toLowerCase();
		}else{
			character = code;
		}

		if(character === key){
			callback();
		}

		return true;
	});
};
