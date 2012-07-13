/*  @author:  Vihren 'vcrazy' Ganev <vcrazy@abv.bg>, <http://ganev.bg>, <https://github.com/vcrazy>
 *  
 *  Type word to do something.
 *  
 *  @example:
 *	$.vhotword('save', function(){alert("Saved!");}); // When you type 'save' you will get alert.
 *	$.vhotword('probook', function(){document.location.href = 'http://probook.bg/';}); // when you type 'probook' you will be redirected
 */

$.vhotword = function(word, callback, args) {
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
