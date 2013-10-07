// JavaScript Document
$(document).ready(function()
{
	//when loaded, hide everything except home page
	$('div').hide();
	$('nav').hide();
	$('#Home').fadeIn(500); //home page loading
	
	//underline each menu options
	$('#menu ul li').hover(function(){
		$(this).css("text-decoration", "underline");
		$(this).css("text-decoration-color", "red");
	});
	
	//take out underline on each menu options on mouse leave
	$('#menu ul li').mouseleave(function(){
		$(this).css("text-decoration", "none");
	});

	//BOX COLORS
	$('#Home tr td:nth-child(1)').mouseenter(function(){
		$(this).stop(true,true).animate({ backgroundColor: "#FC5D5D"},500);
	});	
	$('#Home tr td:nth-child(2)').mouseenter(function(){
		$(this).stop(true, true).animate({ backgroundColor: "#91ED9D"},500);
	});
	$('#Home tr td:nth-child(3)').mouseenter(function(){
		$(this).stop(true, true).animate({ backgroundColor: "#96BFFF"},500);
	});
	$('#Home tr td:nth-child(4)').mouseenter(function(){
		$(this).stop(true, true).animate({ backgroundColor: "#F5FF9C"},500);
	});
	
	//BOX OUTLINE
	$('#Home tr td').mouseenter(function(){
		$(this).css("border-style","dotted");
	});
	$('#Home tr td').mouseleave(function(){
		$('#main td').css("border-style","solid");
	});
	
	//RETURN TO NO COLORS
	$('#Home tr td').mouseleave(function(){
		$(this).stop(true, true).css("background-color","transparent");
	});
	
	$('mail').click(function(){
		
	});
	
	
});

//-----------------------------------------------------------------------------
//HOME PAGE CLICKS
$(function(){
	
	//Click Resume from HOME
	$('#Home tr td:nth-child(1)').click(function(){
		$('nav').animate({width:'toggle'},500);
		$('div').fadeOut(500);
		$('#Resume').fadeIn(500);
		$('#menu ul li:nth-child(2)').css("background-color", "#FFE8E8");
	});	
	
	//Click Music Lessons from HOME
	$('#Home tr td:nth-child(2)').click(function(){
		$('nav').animate({width:'toggle'},500);
		$('div').fadeOut(500);
		$('#Music_Lessons').fadeIn(500);
		$('#Music_Lessons2').fadeIn(500);
		$('#menu ul li:nth-child(3)').css("background-color", "#E1F7E1");
	});	
	
	//Click Photography from HOME
	$('#Home tr td:nth-child(3)').click(function(){
		$('nav').animate({width:'toggle'},500);
		$('div').fadeOut(500);
		$('#Photography').fadeIn(500);
		$('#menu ul li:nth-child(4)').css("background-color", "#EBF3FF");
	});	
	
	//Click Photography from HOME
	$('#Home tr td:nth-child(4)').click(function(){
		$('nav').animate({width:'toggle'},500);
		$('div').fadeOut(500);
		$('#Contact_Me').fadeIn(500);
		$('#menu ul li:nth-child(5)').css("background-color", "#FFFFD8");
	});	
	
});

//-----------------------------------------------------------------------------
//MENU ITEM CLICKS
$(function(){
	
	//FIRST = HOME so take out menu bar again
	$('#menu ul li:nth-child(1)').click(function(){	
		$('div').fadeOut(500);
		$('nav').animate({width:'toggle'},500);
		$('ul li').css("background-color", "transparent");
		$('#Home').fadeIn(500);
	});
	
	//Resume
	$('#menu ul li:nth-child(2)').click(function(){
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		$('#Resume').fadeIn(500);
		$(this).css("background-color", "#FFE8E8");
	});
	
	//Music Lessons
	$('#menu ul li:nth-child(3)').click(function(){
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		$('#Music_Lessons').fadeIn(500);
		$('#Music_Lessons2').fadeIn(500);
		$(this).css("background-color", "#E1F7E1");
	});
	
	//Photography
	$('#menu ul li:nth-child(4)').click(function(){
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		$('#Photography').fadeIn(500);
		$(this).css("background-color", "#EBF3FF");
	});
	
	//Contact Me
	$('#menu ul li:nth-child(5)').click(function(){
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		$('#Contact_Me').fadeIn(500);
		$(this).css("background-color", "#FFFFD8");
		});
});
//----------------------------------------------------------------------------


	
	
	