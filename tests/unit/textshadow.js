module("textShadow");

test("textShadow", 2, function() {
    equals( jQuery("#test").css("textShadow"), "rgb(0, 0, 0) 1px 1px 1px", "returns values: color, x offset, y offset, blur" );
    equals( jQuery("#test").css("textShadow", "#fff 1px 2px 3px").css("textShadow"), "rgb(255, 255, 255) 1px 2px 3px", "sets the value properly" );
});

test("textShadowColor", 3, function() {
    equals( jQuery("#test").css("textShadowColor"), "rgb(0, 0, 0)", "returns just the color" );
    equals( jQuery("#test").css("textShadowColor", "rgb(100, 150, 200)").css("textShadowColor"), "rgb(100, 150, 200)", "sets the color properly" );
	stop();
    jQuery("#test").animate({ textShadowColor: 'rgb(255, 255, 255)' }, 100, function() {
        equals( jQuery("#test").css("textShadowColor"), "rgb(255, 255, 255)", "animates the color properly" );
        start();
    });
});

test("textShadowX", 3, function() {
	equals( jQuery("#test").css("textShadowX"), "1px", "returns just the X offset" );
	equals( jQuery("#test").css("textShadowX", "23px").css("textShadowX"), "23px", "sets the X offset properly" );
	stop();
    jQuery("#test").animate({ textShadowX: 88 }, 100, function() {
        equals( jQuery("#test").css("textShadowX"), "88px", "animates the X offset properly" );
        start();
    });
});

test("textShadowY", 3, function() {
	equals( jQuery("#test").css("textShadowY"), "1px", "returns just the Y offset" );
	equals( jQuery("#test").css("textShadowY", "23px").css("textShadowY"), "23px", "sets the Y offset properly" );
	stop();
    jQuery("#test").animate({ textShadowY: 88 }, 100, function() {
        equals( jQuery("#test").css("textShadowY"), "88px", "animates the Y offset properly" );
        start();
    });
});

test("textShadowBlur", 3, function() {
    equals( jQuery("#test").css("textShadowBlur"), "1px", "returns just the blur" );
    equals( jQuery("#test").css("textShadowBlur", "23px").css("textShadowBlur"), "23px", "sets the blur properly" );
	stop();
    jQuery("#test").animate({ textShadowBlur: 88 }, 100, function() {
        equals( jQuery("#test").css("textShadowBlur"), "88px", "animates the blur properly" );
        start();
    });
});