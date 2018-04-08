$(function() {
	$('.toggle_btn').click(function() {
		if ($(this).hasClass('add')) {
			$(this).removeClass('add');
			$(this).find('img').attr("src",'img/up.png');
			$('.expert_list').show();
		 } else {
			$(this).addClass('add');
			$(this).find('img').attr("src",'img/down.png');
			$('.expert_list').hide();
		}
	})
	$('.listen').click(function() {
		location.href = "watch.html";	
	})
	mui.init({
		swipeBack: true //启用右滑关闭功能
	});
	var btnArray = ['取消', '确定'];
	$('#confirmBtn').click(function() {
		mui.confirm('下载artapp，新用户注册成功即可免费请教！', 'artapp提示', btnArray, function(e) {
			if (e.index == 1) {
				console.log('点击了确定')
				location.href = "http://dwz.cn/2M5IJ4";
			} else {
				console.log('点击了取消')
			}
		},'div')
	})
})