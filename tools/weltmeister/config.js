ig.module(
	'weltmeister.config'
)
.defines(function(){

wm.config = {
	project: {
		'modulePath': 'js/lib/',
		'entityFiles': 'js/game/entities/*.js',
		'levelPath': 'js/game/levels/',
		'outputFormat': 'module', // 'module' or 'json'
		'prettyPrint': false
	},
	
	'layerDefaults': {
		'width': 30,
		'height': 20,
		'tilesize': 8
	},
	
	'askBeforeClose': true,
	'loadLastLevel': true,
	
	'entityGrid': 4,
	'undoLevels': 50,
	
	'binds': {
		'MOUSE1': 'draw',
		'MOUSE2': 'drag',
		'SHIFT': 'select',
		'CTRL': 'drag',
		'SPACE': 'menu',
		'DELETE': 'delete',
		'BACKSPACE': 'delete',
		'G': 'grid',
		'C': 'clone',
		'Z': 'undo',
		'Y': 'redo'
	},
	
	'view': {
		'zoom': 2,
		'grid': false
	},
	
	'labels': {
		'draw': true,
		'step': 32,
		'font': '10px Bitstream Vera Sans Mono, Monaco, sans-serif'
	},
	
	'colors': {
		'clear': '#000000',
		'highlight': '#ceff36',
		'primary': '#ffffff',
		'secondary': '#555555',
		'selection': '#ff9933'
	},
	
	'collisionTiles': {
		'path': 'weltmeister/collisiontiles-64.png',
		'tilesize': 64
	},
	
	'api': {
		'save': 'weltmeister/api/save.php',
		'browse': 'weltmeister/api/browse.php',
		'glob': 'weltmeister/api/glob.php'
	}
};

});