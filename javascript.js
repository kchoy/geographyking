// JavaScript Document

$(document).ready(function()
{

	$("#left").hide();
	$("#about").hide();
	$("#left, #right, #arrow, #play").animate({opacity:".6"});


		$("#left, #right, #arrow, #play").mouseover(function(){
			$(this).animate({opacity:"1.0"});
			});

		$("#left, #right, #arrow, #play").mouseleave(function(){
			$(this).animate({opacity:"0.5"});
			});


	$("#right").click(function(){
		//$("#play, #arrow, #logo").animate({opacity: "0.0"}, 500);
		$("#play, #arrow, #logo").hide(500);
		$("#about, #left").show(500);
		$('#right').hide(500);

	}
	);

	$("#left").click(function(){
		$("#logo, #play, #arrow").show(500);		
		//$("#play, #arrow").animate({opacity: "0.5"}, 500);
		$("#left, #about").hide(500);
		$("#right").show(500);
	});

});