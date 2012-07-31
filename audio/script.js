$(document).ready(function(){
	function music(key){
		var source = context.createBufferSource();
		source.buffer = BUFFERS[key];
		source.connect(context.destination);
		source.noteOn(0);
	}

	$(document).keydown(function(e){
		var k = e.keyCode;
		if(k >= 65 && k <= 91){
			music(String.fromCharCode(e.keyCode).toLowerCase());
		}
	});

	$('span').click(function(){
		music($(this).html().toLowerCase());
	});
});
