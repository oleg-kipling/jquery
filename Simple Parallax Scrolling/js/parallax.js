$(function(){
	$(window).bind('scroll', function(e){
		parallax();
	});
});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#grid').css('top', (0 - (scrollPosition * .2))+'px');

	// content & backgroud moving as same speed
	//$('#grid').css('top', (0 - scrollPosition)+'px');
}