$.vtype = function(word, callback, args) {
	var curr = '';
	word = word.toLowerCase();

	$('body').keydown(function(e) {
		if(!args) args=[]; // IE barks when args is null
		var code = (e.keyCode ? e.keyCode : e.which);
		var character = String.fromCharCode(code).toLowerCase();

		if(character == word.charAt(curr.length)){
			curr += character;
		}else{
			if(character == word.charAt(0)){
				curr = character;
			}else{
				curr = '';
			}
		}

		if(curr.length == word.length){
			curr = '';
			callback();
		}

		return true;
	});
};
