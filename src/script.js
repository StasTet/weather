$(document).ready(function(){

	var cityName = '';
	var urlWeather;


	// cityName = $('.city').val($('select[name="city"] option:selected').text());
	// $('#searchOne').click(function(){
	// 	cityName = $('.city').val();
	// 	if(cityName.length!=''){
	// 		addCity();
	// 	}
	// 	ajaxFanc();
	// });

	// $('#searchTwo').click(function(){
	// 	cityName = $('select[name="city"] option:selected').text();
	// 	ajaxFanc();
	// });

	$('#search').click(function(){
		cityName = $('.city').val();
		addCity()
		ajaxFanc();
	});

	$('select[name="city"]').click(function(){
		text = $('select[name="city"] option:selected').text();
		$('.city').val(text);
	});

	function ajaxFanc(){
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=862dc7cbbdc5915f4aa2bdec7b31dbdd",
			success:function(result){
				console.log(result);
				//<hr class="featurette-divider">
				$('#weather .cityName').html(result.name);
				$('#weather .temp').html('<img src="src/image/temperature.png" class="img-circle">' + result.main.temp + '&deg;');
				$('#weather .sky').html(result.weather[0].main);
				$('#weather .wind').html(result.wind.speed + ' km/h');
			},
			error:function(){
				alert('City "' + cityName + '" does not exist');
			}
			
		});
	}


	$('#del').click(function(){
		delCity();
	});

	function addCity() {
		var text = $('.city').val();
		$('select[name="city"]').append('<option>' + text + '</option>');
	}

	function delCity() {
		$('select[name="city"] option:selected').remove();
	}

	



});



// function initMap() {
// 	var myLatLng = {lat: -25.363, lng: 131.044};

// 	// Create a map object and specify the DOM element for display.
// 	var map = new google.maps.Map($('#map'), {
// 	  center: myLatLng,
// 	  scrollwheel: false,
// 	  zoom: 4
// 	});

// 	// Create a marker and set its position.
// 	var marker = new google.maps.Marker({
// 	  map: map,
// 	  position: myLatLng,
// 	  title: 'Hello World!'
// 	});
// }

