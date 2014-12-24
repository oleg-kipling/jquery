$(function(){
	var n = '#nav', no = 'nav-open';
	$('#nav-menu').click(function(){
		if ($(n).hasClass(no)) {
			//$(n).removeClass(no);
			$(n).animate({height:0},300);
			setTimeout(function(){
			$(n).removeClass(no).removeAttr('style');
		},320);
		}
		else {
		var newH = $(n).css('height', 'auto').height();
		$(n).height(0).animate({height:newH}, 300);
		setTimeout(function(){
			$(n).addClass(no).removeAttr('style');
		},320);
		}
	});
});



// Simple Toggle btn

// $(document).ready(function() {
// 	var n = '#nav'
// 	$('#nav-menu').click(function() {
// 		if ($(n).hasClass('nav-open')) {
// 			$(n).removeClass('nav-open');
// 		}
// 		else {
// 			$(n).addClass('nav-open');
// 		}
// 	});
// });

// Minified .slideToggle() code

// $(function(){
//  $('#nav-menu').click(function(){
//     $('#navopen').slideToggle();
//   });
// });