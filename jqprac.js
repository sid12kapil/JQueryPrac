$(document).ready(function(){
	$('#btn0').on('click', function(){
   $('.mypara').append(' It is my jQuery Practice.')
   $('#para').appendTo('.mypara');
   $('*').unbind();
   });
});

$(document).ready(function(){
	$('#btn').on('click', function(){
		$('.mypara').fadeOut(4000).fadeIn(4000).html('My fadeout and fadein is working!!!');
	});
});

$(document).ready(function(){
	$('.prase').add('<span>hide and show</span>');
});

$(document).ready(function(){
	$('#btn1').on('click', function(){
		$('.prase1').hide(3000).show(3000);
	});
	$('#btn2').on('mouseover', function(){
		$('.prase2').slideUp(3000).slideDown(3000);
	});
	$('#btn3').on('mousedown', function(){
		$('.prase3').css("background-color",'#00ff00');
	});
	$('#btn3').on('mouseup', function(){
		$('.prase3').css("background-color",'yellow');
	});
	$('#btn4').on('click', function(){
		$('.prase4').toggle(3000);
	});
});

$(document).ready(function(){
	$("#btn").hide(4000).show(4000);
	$("#btn0").hide(4000).show(4000);
	$("#btn1").hide(4000).show(4000);
	$("#btn2").hide(4000).show(4000);
	$("#btn3").hide(4000).show(4000);
	$("#btn4").hide(4000).show(4000);
});

$(document).ready(function(){
	$('#btn00').on('click', function(){
		$('*').toggle(5000);
	});
});

/*$(document).ready(function(){
	$('#cls').addClass('.cls');
});
*/
$(document).ready(function(){
	$('#btn5').on('click', function(){
	$('#cls').animate({
		'font-size':'40px',
		//'left':'+=100',
		'opacity':'0.25'
	}, 2000, function(){});
	
});
});

$(document).ready(function(){
	$('#btn6').on('click', function(){
		$('h1:even').css(
			"background-color","red"
			)
	});
});

$(document).ready(function(){
	$('#btn7').on('click', function(){
		$('div>h1:first-child').css(
			"background-color","yellow"
			)
	});
});

$(document).ready(function(){
	$('#btn7').on('click', function(){
		$('div>h1:first-child').css(
			"background-color","yellow"
			)
	});
});
/*
var a;
function sum(){
	a=setInterval(sid, 1000);
}
function sid(){
	var aa = document.getElementById('container');
	aa.style.color = aa.style.color=="red"?'blue':'red';
}*/

//$('#para').add('<a href="file:///C:/Users/SID/Documents/My%20Project/colorprac-1.html" target="_blank">Next Page</a>').appendTo("div");
//Above is the way to add p tag/<p> or div or span. 
//$('#para').add().attr("src","Images/Bird.jpg"').appendTo(document.body);