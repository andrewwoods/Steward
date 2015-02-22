/**
 * Steward core class
 */
var Steward = {
	version: '0.1',
	data: null,
	input_id: 'search_input',
	q: '',

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
	},

	parse_input: function( event ){

		Steward.q += String.fromCharCode( event.keyCode );
		console.log( Steward.q );

		var results_html = '<ul>';
		var item = null;
		for ( i = 0; i < Steward.data.length; i++ ) {
			item = Steward.data[ i ];
			var meta = '';

			console.log( item.title );
			if ( item.title.toLowerCase().indexOf( Steward.q.toLowerCase() ) !== -1 ) {
				results_html += '<li>';
				results_html += '<a>' + item.title + '</a>';
				if ( item.type == 'page' ) {
					meta = item.url;
				} else {
					meta = item.type;
				}

				results_html += '<span class="meta">' + meta + '</span>';
				results_html += '</li>';
			}

		}
		results_html += '</ul>';

		var results_el = document.getElementById( 'steward_results' );
		results_el.innerHTML = results_html;
		Steward.remove_class( results_el,  'is_hidden' );
	}

};

