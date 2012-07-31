// Keep track of all playing sources
var SOURCES = [];
// Keep track of all loaded buffers.
var BUFFERS = {};
// Page-wide audio context.
var context = null;

// An object to track the buffers to load {name: path}
var BUFFERS_TO_LOAD = {
  q: 'music/BeatA162-01.mp3',
  w: 'music/BeatA162-02.mp3',
  e: 'music/BeatA162-03.mp3',
  r: 'music/BeatA162-04.mp3',
  t: 'music/BeatA162-05.mp3',
  y: 'music/BeatA162-05.mp3',
  a: 'music/BeatC120-01.mp3',
  s: 'music/BeatC120-02.mp3',
  d: 'music/BeatC120-03.mp3',
  f: 'music/BeatC120-04.mp3',
  g: 'music/BeatC120-05.mp3',
  h: 'music/BeatC120-06.mp3',
  z: 'music/DHitA-Hat01.mp3',
  x: 'music/DHitA-Hat02.mp3',
  c: 'music/DHitA-Hat03.mp3',
  v: 'music/DHitA-Kick01.mp3',
  b: 'music/DHitA-Kick02.mp3',
  o: 'music/DHitA-Snare01.mp3',
  p: 'music/DHitA-Snare02.mp3',
  l: 'music/DHitA-Snare03.mp3',
  u: 'music/LeadA162A-01.mp3',
  i: 'music/LeadA162A-02.mp3',
  j: 'music/LeadA162A-03.mp3',
  k: 'music/LeadA162A-04.mp3',
  n: 'music/LeadA162A-05.mp3',
  m: 'music/LeadA162A-06.mp3'
};

// Stops all playing sources
function stopSources() {
  for (var i = 0; i < SOURCES.length; i++) {
    var source = SOURCES[i];
    source.noteOff(0);
  }
  SOURCES = [];
}

var names = [];
var paths = [];

// Loads all sound samples into the buffers object.
function loadBuffers() {
  // Array-ify
  for (var name in BUFFERS_TO_LOAD) {
    var path = BUFFERS_TO_LOAD[name];
    names.push(name);
    paths.push(path);
  }
  var bufferLoader = new BufferLoader(context, paths, function(bufferList) {
   for (var i = 0; i < bufferList.length; i++) {
      var buffer = bufferList[i];
      var name = names[i];
      BUFFERS[name] = buffer;
    }
  });
  bufferLoader.load();

	function check_ready(){
		var cnt = bufferLoader.loadCount;
		var len = names.length;

		$('progress').val(Math.round((cnt/len) * 100));

		if(cnt == len){
			ready();
		}else{
			setTimeout(check_ready, 100);
		}
	}

	function ready(){
		$('form').fadeOut(1000);
		setTimeout(function(){$('#kbd').fadeIn(1000);}, 1000);
	}
	
  setTimeout(check_ready, 100);
}

document.addEventListener('DOMContentLoaded', function() {
  try {
    context = new webkitAudioContext();
  }
  catch(e) {
    alert("Web Audio API is not supported in this browser");
  }
  loadBuffers();
});
