$(document).ready(function() {


function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

	$('#dangerButton').on("click", function() {
		console.log("Howdy Max!");

		$('.text-vertical-center').css('background', randomColor());
	});
});