QUnit.test( "Version Check", function( assert ) {
	  assert.ok( Steward.version == "0.1", "Passed!" );
});


QUnit.test( "load - check first item", function( assert ) {
	var test_data = [
		{title: 'Home', url: '/', type: 'page'},
		{title: 'About', url: '/about-us', type: 'page'},
		{title: 'Contact', url: '/contact', type: 'page'},
		{title: 'Journal', url: '/sections/journal', type: 'category'},
		{title: 'Articles', url: '/sections/articles', type: 'category'},
		{title: 'Projects', url: '/sections/articles', type: 'category'},
	];

	Steward.load( test_data );
	assert.ok( Steward.data[0].title == "Home", "Passed!" );
	assert.ok( Steward.data[0].url == "/", "Passed!" );
	assert.ok( Steward.data[0].url == "/", "page" );
});

QUnit.test( "Change class", function( assert ) {
	var test_class = 'test-class';
	var div = document.createElement( 'div' );


	assert.ok( Steward.has_class( div, test_class )  === false, "Has class!" );

	Steward.add_class( div, test_class );
	assert.ok( Steward.has_class( div, test_class )  === true, "Class Added!" );

	Steward.toggle_class( div, test_class );
	assert.ok( Steward.has_class( div, test_class )  === false, "Class Toggled (Off)!" );

	Steward.toggle_class( div, test_class );
	assert.ok( Steward.has_class( div, test_class )  === true, "Class Toggled (On)!" );

	Steward.remove_class( div, test_class );
	assert.ok( Steward.has_class( div, test_class )  === false, "Class Removed!" );

});


