$(document).ready(function(){

	var cityName = '';
	var urlWeather;

	$('#search').click(function(){
		cityName = $('.city').val();
		addCity(cityName)
		ajaxFanc();
	});

	$('select[name="city"]').click(function(){
		text = $('select[name="city"] option:selected').text();
		$('.city').val(text);
	});

	function ajaxFanc(){
		$.simpleWeather({
			location: cityName,
			unit: 'c',
			//url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=862dc7cbbdc5915f4aa2bdec7b31dbdd",
			success:function(result){
				console.log(result);
				$('#weather .cityName').html(result.city);
				$('#weather .temp').html('<img src="src/image/temperature.png" class="img-circle">' + result.temp + '&deg;C');
				$('#weather .sky').html(result.currently);
				$('#weather .image').html('<img src="' + result.image + '" />');
				$('#weather .wind').html('<img src="src/image/wind.png" class="img-circle">' + result.wind.speed + ' km/h');
			},
			error:function(error){
				console.log(error);
			}
			
		});
	}


	$('#del').click(function(){
		delCity();
	});

	function addCity(cityName) {
		var text = $('select[name="city"] option').text();
		var count = text.indexOf(cityName);
		if(count == -1){
			$('select[name="city"]').append('<option>' + cityName + '</option>');
		}
		// $(text).each(function() {
		// 	if(text != cityName){
		// 		
		// 	}
		// });
	}


	function delCity() {
		$('select[name="city"] option:selected').remove();
	}

});