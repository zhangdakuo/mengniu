$(function () {
	

	$('#nav .icon').toggle(function() {
		$('#nav .icon').stop().addClass('icons')
		$('#nav1').stop().show().animate({height:'68px'})
	},function () {
		$('#nav .icon').stop().removeClass('icons')
		$('#nav1').stop().animate({height:'0'}).hide(100)
	})
})