/**
 * Steward core class
 */
var Steward = {
	version: '0.1',
	data: null,

	load: function( data ){
		Steward.data = data;
	},

	add_class: function ( el, className ) {

		if ( el.classList ){
			el.classList.add( className );
		} else {
			el.className += ' ' + className;
		}
	},

	has_class: function( el, className ) {
		if ( el.classList ) {
			return el.classList.contains( className );
		} else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test( el.className );	
		}
	},

	remove_class: function( el, className ){
		if (el.classList) {
			el.classList.remove(className);
		 } else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	},

	toggle_class: function ( el, className ){

		if ( el.classList ) {
			el.classList.toggle( className );
		} else {
			var classes = el.className.split( ' ' );
			var existingIndex = classes.indexOf( className );

			if ( existingIndex >= 0 ){
				classes.splice( existingIndex, 1 );
			} else {
				classes.push( className );
			}

			el.className = classes.join( ' ' );
		}
	}
};


