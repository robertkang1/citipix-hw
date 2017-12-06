$(document).ready(function() {
	$('#submit-btn').click(function(){
		event.preventDefault();

		var city = $('#city-type').val();
		$('#city-type').val('');
		city = city.toLowerCase(); //lowercase inputted terms
		// if the user inputs new york related terms
		if(city == 'new york' || city == 'new york city' || city == 'nyc') {
			$('body').attr('img','nyc');
		}
		// if the user inputs sf related terms
		else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
			$('body').attr('img','sf');
		}
		// if the user inputs la related terms
		else if (city == 'los angeles' || city == 'la' || city == 'lax') {
			$('body').attr('img','la');
		}
		// if the user inputs austin related terms
		else if (city == 'austin' || city == 'atx') {
			$('body').attr('img','austin')
		}
		// if the user inputs sydney related terms
		else if (city == 'sydney' || city == 'syd') {
			$('body').attr('img','sydney');
		}
	});
})