$(document).ready(function(){

	var cityName;
	var urlWeather;

	$('#search').click(function(){
		$('#error').html('');
		cityName = $('.city').val();
		
		if(cityName.length == ''){
			$('#error').html('Enter a city');
		}
		ajaxFanc(cityName);
	});

});


function yaMap(x,y){
	var myMap = new ymaps.Map("myMap", {
	    center: [x, y],
	    zoom: 10
	}),
	myGeoObject = new ymaps.GeoObject({
	    geometry: {
	        type: "Point",
	        coordinates: [x, y]
	   }
	});
	myMap.geoObjects.add(myGeoObject);
}

function clearMap(){
	$('#myMap').html('');
}

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

			clearMap();
			yaMap(result.coord.lat, result.coord.lon);
		},
		error:function(error){
			console.log(error);
		}
		
	});

}