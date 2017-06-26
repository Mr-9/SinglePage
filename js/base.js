$(function(){
$(".ycjf_banner_slide").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click"
});
$(".ycjf_course_slide").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click"
});
$(".picMarqueeLeft").slide({
    mainCell: ".bd ul",
    effect: "leftMarquee",
    vis: 5,
    interTime: 30,
    autoPlay: true,
    trigger: "click"
});
$(".caseMarqueenScroll").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "left",
    delayTime: 500,
    vis: 2,
    scroll: 2,
    autoPlay: true,
    autoPage: true,
    pnLoop: false,
    easing: 'easeOutCubic',
    trigger: "click"
});
$('.txtScroll_top').slide({
    titCell: ".hd li",
    mainCell: ".bd ul",
    effect: "topLoop",
    autoPlay: true,
    scroll: 1,
    vis: 1,
    easing: "swing",
    delayTime: 500,
    pnLoop: true
})
	$('.wordUlbox li').on('mouseover',function(){
		 $(this).addClass('word_hover');
	}).on('mouseout',function(){
		$(this).removeClass('word_hover');
	});
	$(document).on('scroll',function(){
		var scroll=$(document).scrollTop();
		var coopoffset=$('.ycjf_coop').offset().top-400;
		if(scroll > coopoffset){
			$('.ycjf_coop').addClass('coop_hover');
		}
	});
    $('#submit_quick').click(function(){
        $('.quick_popue').toggleClass('quick_popue_hover');
    });
    $('.quickUl li').click(function(){
        data_title=$(this).data('title');
        $('#textarea_tent').val(data_title);
        $('.quick_popue').toggleClass('quick_popue_hover');
    });

});
