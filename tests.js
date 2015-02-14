QUnit.test( "Version Check", function( assert ) {
	  assert.ok( Steward.version == "0.1", "Passed!" );
});


QUnit.test( "load - check first item", function( assert ) {
	var test_data = {
		menu: [
			{title: 'Home', url: '/'},
			{title: 'About', url: '/about-us'},
			{title: 'Contact', url: '/contact'},
		]
	};

	Steward.load( test_data );
	assert.ok( Steward.data.menu[0].title == "Home", "Passed!" );
	assert.ok( Steward.data.menu[0].url == "/", "Passed!" );
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


