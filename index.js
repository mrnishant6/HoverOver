$(document).on('mousemove', function(e){
	$('.light').css({
		left: e.pageX - 300,
		top: e.pageY - 300

	});
});
