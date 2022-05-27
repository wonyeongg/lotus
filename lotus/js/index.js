$(document).ready(function(){
	
	//메뉴 호버
	$("#left li> a").on("mouseenter click", function(){
		$("#left li> nav").stop().slideUp();
		$(this).next().stop().slideDown();
	});
	
	$("#left> nav").mouseleave(function(){
		$("#left li> nav").stop().slideUp();
	});	
	
	$(".last").blur(function(){
		$("#left li> nav").stop().slideUp();
	});
	
	//슬라이드
	const fade=setInterval(fading,2800);
	let i =3;
	function fading(){
		i--;
		if(i==0){
			$("#slide a").fadeIn();
			i=3;
		} else {
			$("#slide a").eq(i).fadeOut();
		}
	}
	
	//팝업 열림	
	$(".pop").click(function(){
		$("#popup").fadeIn();	
		$("#popup button").focus();
	});
	
	//팝업 닫힘
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
});
