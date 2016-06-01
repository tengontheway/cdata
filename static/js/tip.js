$(function(){
	var notnow = $('nav .notnow');
	var tipimg = $('#notnow');
	notnow.eq(0).on('mouseenter',function(){
		tipimg.css({'left':302,'top':28}).fadeIn(200);
	});
	notnow.eq(0).on('mouseleave',function(){
		tipimg.stop().hide();
	});
	var f_notnow = $('#footer .notnow');
	f_notnow.on('hover',function(){
		$(this).text('敬请期待');
	});
	f_notnow.eq(0).on('mouseleave',function(){
		$(this).text('同盾博客');
	});
})