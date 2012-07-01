// works with single keys and char codes

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
