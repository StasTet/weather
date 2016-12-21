$(document).ready(function(){

	var cityName = '';
	var urlWeather;

	$('#search').click(function(){
		cityName = $('.city').val();
		addCity(cityName)
		ajaxFanc(cityName);
	});

	$('select[name="city"]').click(function(){
		text = $('select[name="city"] option:selected').text();
		$('.city').val(text);
	});

	$('#del').click(function(){
		delCity();
	});

});

function ajaxFanc(cityName){
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=862dc7cbbdc5915f4aa2bdec7b31dbdd",
		success:function(result){
			console.log(result);
			$('#weather .cityName').html(result.name);
			$('#weather .country').html(result.sys.country);
			$('#weather .temp').html('<img src="src/image/temperature.png" class="img-circle">' + result.main.temp + '&deg;');
			$('#weather .sky').html(result.weather[0].main);
			$('#weather .wind').html(result.wind.speed + ' km/h');
			$('#weather .wind').html('<img src="src/image/wind.png" class="img-circle">' + result.wind.speed + ' km/h');
		},
		error:function(error){
			console.log(error);
		}
		
	});
}

function addCity(cityName) {
	var text = $('select[name="city"] option').text();
	var count = text.indexOf(cityName);
	if(count == -1){
		$('select[name="city"]').append('<option>' + cityName + '</option>');
	}
}

function delCity() {
	$('select[name="city"] option:selected').remove();
}