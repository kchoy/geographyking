$(document).ready(function()
{

	$("#map").hide();

});

function main()
{

	var difficulty = validation();

	$('.form').hide(500);
	$('#map').show(500);

}









function validation()
{
	var difficulty = '';

	if (document.getElementById("Easy").checked){
		difficulty = 'Easy';
	}

	else if (document.getElementById("Medium").checked){
		difficulty = 'Medium';
	}

	else{
		difficulty = 'Hard'
	}

	return difficulty;
}