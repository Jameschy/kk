	//			最新公告滚动
var mun = 0;
var scroll1 = null;

function scroll() {
	scroll1 = setInterval(function() {
		mun--;
		$('.notice_list').eq(0).css('margin-top', mun + 'px');
		if(mun == -200) {
			$('.notice_list').eq(0).appendTo('#artList');
			$('.notice_list').css('margin-top', '0')
			setTimeout(function() {
				mun = 0;
				clearInterval(scroll1);
				scroll()
			}, 75)
		}
	}, 80)
}
scroll();
$('.notice_list').mouseover(function() {
	clearInterval(scroll1);
})
$('.notice_list').mouseout(function() {
	scroll()
})
