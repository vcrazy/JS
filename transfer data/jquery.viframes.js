/*  @author:  Vihren 'vcrazy' Ganev <vcrazy@abv.bg>, <http://ganev.bg>, <https://github.com/vcrazy>
 *  
 *  @example:
 *	$.viset('key', 'value');
 *	var test = $.viget('key'); // gives 'value'
 *	
 * Use $.viset to data you want to keep for later usage
 * Use $.viget to get the data
 * Use $.visetjson if you want to save some kind of special data, ex. html
 * Use $.viget or $.vigetjson to get the special data
 * Use $.viclear to delete some data
 * If the browser doesn't support localStorage (IE..) data can't be set neither get
 */

var hasLS = typeof(localStorage) !== 'undefined';

$.viget = function(key){
	return hasLS ? window.localStorage.getItem(key) : false;
};

$.vigetjson = $.viget;

$.viset = function(key, value){
	if(hasLS){
		window.localStorage.setItem(key, value);
	}
}

$.visetjson = function(key, value){
	$.viset(key, JSON.stringify(value));
}

$.viclear = function(key){
	if(hasLS){
		window.localStorage.removeItem(key);
	}
};