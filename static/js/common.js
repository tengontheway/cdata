$(function() {
	var imEle = document.getElementById("udesk-im-7");
    imEle.onclick = function(){
        window.open("http://tongdun.udesk.cn/im_client?cur_url="+escape(location.href)+"&pre_url="+escape(document.referrer),"udesk_im","width=780,height=560,top=200,left=350,resizable=yes");};
	var btt = $('#btt');
	//点击回到顶部按钮
	btt.on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});
	$(window).scroll(function() {
		// 回到顶部按钮隐藏出现 .
		var scrollTop = $(document).scrollTop();
		scrollTop > 600 ? btt.fadeIn(300) : btt.fadeOut(300);
	});
});