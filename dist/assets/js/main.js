$(document).ready(function() {



	$('.keyGen').click(function(){

		$('.results').removeClass('invis').addClass('active');

		setTimeout(function(){
			$.getJSON('assets/js/keys.json', function(data) {
				var key = Math.floor(Math.random()*data.keys.length);
				$('.keyRes').html(data.keys[key].id);
				$('.nameRes').html(data.keys[key].name);
				$('.surnameRes').html(data.keys[key].surname);
				// $('.emailRes').html(data.keys[key].email);
				$('.phoneRes').html('+375' + data.keys[key].phone);
				// $('.sexRes').html(data.keys[key].sex);
			});
			$('.results').removeClass('active');
		},1000);
		

		return false;
	});
});