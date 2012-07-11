var hasLS = typeof(localStorage) !== 'undefined';

$.vsave = function(key, html){
	if(hasLS){
		window.localStorage.setItem(key, html);
	}
};

$.vload = function(key){
	return hasLS ? window.localStorage.getItem(key) : false;
};

$.vclear = function(key){
	if(hasLS){
		window.localStorage.removeItem(key);
	}
};
