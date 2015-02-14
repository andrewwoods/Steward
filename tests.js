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



