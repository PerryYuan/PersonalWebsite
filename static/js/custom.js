// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
	setInterval(function () {
		var img = $('.deleteable').attr('src').split('.')[0];
		var num = parseInt(img.charAt(img.length - 1));
		var next = num + 1;
		if(next > 3){
			next = 1;
		}
		$('.showimg').css('opacity',0);
		$('.showimg').attr('src',$('.showimg').attr('src').replace(''+num,next));
		var op = 100;
		var timer = setInterval(function () {

			if(op > 0){
				op -= 10;
				$('.deleteable').css('opacity',op/100);
			}else{
				clearInterval(timer);
				$('.deleteable').css('opacity',0);
			}
		},150);
		var op = 0;
		var timer1 = setInterval(function () {
			if(op < 100){
				op += 10;
				$('.showimg').css('opacity',op/100);
			}else{
				clearInterval(timer1);
				$('.deleteable').attr('src',$('.deleteable').attr('src').replace(''+num,next));
				$('.deleteable').css('opacity',1);
			}
		},150);
	},10000)
});