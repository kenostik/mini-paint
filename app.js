$(document).ready(function() {
	console.log("Working?");
	$('.box').on('click', function() {
		$(this).addClass(color);
		console.log("WHAT?")
	})

  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
   		console.log("Undooo")
  })
  $('#reset').on('click', function() {
  	$('.box').removeClass(colors)
  	console.log("RESET")
  })

	var color = 'white'
	var colors = 'white green red blue yellow';

	$('#red').on('click', function() {
		color = 'red';
	})
	$('#blue').on('click', function () {
		color = 'blue';
	})
	$('#green').on('click', function() {
		color = 'green';
	})
	$('#yellow').on('click', function() {
		color = 'yellow';
	})
	$('#white').on('click', function() {
		color = 'white';
	})

})

