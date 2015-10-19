var imgArr = [
	'loading.gif',
	'page1_icon.png',
	'logo.png',
	'down.png',
	'page1_bj.jpg',
	'page1_logo.png',
	'wf1.png',
	'wf2.png',
	'wf3.png',
	'wf4.png',
	'wf4.png',
	'page2_bj.jpg',
	'page2_1.png',
	'page2_2.png',
	'page2_3.png',
	'page2_4.png',
	'page2_mb.png',
	'page2_1.jpg',
	'page3_bj.jpg',
	'page3_con.png',
	'qian.png',
	'page3_icon.png',
	'page3_cost.png',
	'page3_ff.png',
	'page3_left1.png',
	'page3_right1.png',
	'page4_bj.jpg',
	'page4_con.png',
	'page4_cost.png',
	'page4_icon.png',
	'mike1.png',
	'mike2.png',
	'mike3.png',
	'page5_scro1.jpg',
	'page5_scro2.jpg',
	'page5_scro3.jpg',
	'page6_bj.jpg',
	'page6_img1.png',
	'page6_img2.png',
	'page7_bj.jpg',
	'page7_paiming.png',
];

var isTouch = "ontouchend" in document ? true : false,
    evStart = isTouch ? 'touchstart' : 'mousedown',
    evMove = isTouch ? 'touchmove' : 'mousemove',
    evEnd = isTouch ? 'touchend' : 'mouseup';
// var bg = document.createElement('audio');
// bg.src = 'images/2.mp3';
// bg.loop = true;
// bg.autoplay = false;
// bg.play();

// bg.addEventListener('ended', function(){
// 	bg.play();
// }, false);

loadImg(0);

function loadImg(n){
	if(n==imgArr.length){
		// bg.play();
		$('.loading').fadeOut(1000, function(){
			// box1Ani();
		});
	} else {
		$('<img src="images/'+imgArr[n]+'" alt="" />').load(function(){
			var tranX = n/imgArr.length*100 | 0;
			console.log(tranX);
			$('.loading_text').html(tranX+'%');
			loadImg(n+1);
		});
	}
}
