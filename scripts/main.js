

var scene1=document.getElementById('scene1');
	var parallax = new Parallax(scene1);

	//set up variables
	var winH = $(window).height();
		console.log(winH);
		winW = $(window).width();
		$scene = $('.scene');
		$slide = $('.slide');
		$sceneImg = $('#scene > li > img');
		$aircraft = $('#aircraftImg');
		$sky = $('#skyImg');
		$deck = $('#deck');
		$info = $('#info');
		$main = $('main');
	//store number of sections present
	var slides = $('.slide').length;
	//account for scrollbars in everything but tablets
	function checkScrollbar (winH) {
		if (winW > 800) {
		winH = winH - $.scrollbarWidth();
		console.log('window height over 1280, adjusted to: ' + winH);
		}
		return winH
	}
	
		
$(document).ready(function() {

//scrollbarWidth by Ben Alman http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};

	function resize () {
		winW = $(window).width();
		winH = $(window).height();
		//resize entire area to the correct number of screens
		$main.width(slides * winW);
		//account for scrollbars; since they're only on desktops only do if not tablet/phone
		if (winW>800) {
			winH = (winH - $.scrollbarWidth());
			console.log(winH);
		}
		//resize each slide and scene to current window size
		$scene.width(winW);
		$slide.width(winW);
		$slide.height(winH);
	}
	
	$aircraft.click(function(){
		$info.show();
	});
	
	resize();
	var winH2 = window.innerHeight;
	console.log(winH2);
});

$(window).resize(function(){
		
		$window = $(window);
		winH = $window.height();
		winW = $window.width();
		$('.scene').height(winH).width(winW);
});