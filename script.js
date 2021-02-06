// dynamic coding

$(document).ready(function () {
	$(".nav-icon").click(function () {
		$("#mobile-menu").collapse('toggle');
		$("#mobile-menu").addClass("animated zoomIn");
	});

	$("#search-icon").click(function () {
		$("#search-box").collapse('toggle');
		$("#search-box").addClass("animated slideInRight");

	});

	$("#search-box").on('show.bs.collapse', function () {
		$("#header h1").css({ marginTop: '50px' });
	});

	$("#search-box").on('hidden.bs.collapse', function () {
		$("#header h1").css({ marginTop: '0' });
	});


	//client slider

	$("#next-client").click(function () {
		$("#client-slider").carousel('next');
	});

	$("#prev-client").click(function () {
		$("#client-slider").carousel('prev');
	})


});

//typeing  animation

$(document).ready(function () {
	var string = "BE STYLISH";
	var i = 0;
	if (i < string.length) {
		setInterval(function () {
			document.querySelector(".add-header").innerHTML += string.charAt(i);
			i++;
		}, 150);
	}
})


//num animate
$(window).scroll(function(){
	if(sessionStorage.getItem('use-scroll') == null)
	{

	var value=$("#people-say").attr('class');
	if(value.indexOf("animated") != -1)
	{
		animation();
		sessionStorage.setItem('use-scroll','yes');
	}
}
})

function animation() {

	$(document).ready(function () {

		var num = 0;
		var r = setInterval(function () {
			num += 1;
			$("#num-1").html(num + "+");
			if (num == 565) {
				clearInterval(r);
			}
		}, 30);
	})

	$(document).ready(function () {

		var num = 0;
		var r = setInterval(function () {
			num += 1;
			$("#num-2").html(num + "+");
			if (num == 236) {
				clearInterval(r);
			}
		}, 80);
	})

	$(document).ready(function () {

		var num = 0;
		var r = setInterval(function () {
			num += 1;
			$("#num-3").html(num + "+");
			if (num == 169) {
				clearInterval(r);
			}
		}, 100);
	})

	$(document).ready(function () {

		var num = 0;
		var r = setInterval(function () {
			num += 1;
			$("#num-4").html(num + "+");
			if (num == 100) {
				clearInterval(r);
			}
		}, 120);
	});

}