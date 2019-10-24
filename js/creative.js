jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('#love_counter').offset().top,
        hH = jQuery('#love_counter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.love_count').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
$(window).scroll(function(){
	$('.container p').each(function(){
    	var scrollTop     = $(window).scrollTop(),
        	elementOffset = $(this).offset().top,
       		distance      = (elementOffset - scrollTop),
			    windowHeight  = $(window).height(),
			    breakPoint    = windowHeight*0.9;

			if(distance > breakPoint) {
				$(this).addClass("more-padding");
			}  if(distance < breakPoint) {
				$(this).removeClass("more-padding");
			}
	});
});



$(document).ready(function() {
  var par = $('#year1i');
  $(par).hide();

  $('#year1').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});
$(document).ready(function() {
  var par = $('#year2i');
  $(par).hide();

  $('#year2').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});
$(document).ready(function() {
  var par = $('#year3i');
  $(par).hide();

  $('#year3').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});
$(document).ready(function() {
  var par = $('#year4i');
  $(par).hide();

  $('#year4').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});
$(document).ready(function() {
  var par = $('#year5i');
  $(par).hide();

  $('#year5').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});
$(document).ready(function() {
  var par = $('#year6i');
  $(par).hide();

  $('#year6').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});
$(document).ready(function() {
  var par = $('#year7i');
  $(par).hide();

  $('#year7').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});
$(document).ready(function() {
  var par = $('#year8i');
  $(par).hide();

  $('#year8').click(function(e) {
    $(par).slideToggle('slow');
    e.preventDefault();
});
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

var myVar;
$(document).ready(function () {

  $("#imgAnimate").click(function () {


    $(this).attr("src", "img/departments/logo_burst_FINAL.gif");
    myVar = setTimeout(after2sec, 2000);


    });
});
var image1 ="img/departments/logo_burst.png";
function after2sec() {
  document.getElementById("imgAnimate").src = image1;
}


$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    }
    else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});


(function(){
  // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
		this.images = this.element.getElementsByClassName("cd-timeline__img");
		this.contents = this.element.getElementsByClassName("cd-timeline__content");
		this.offset = 0.8;
		this.hideBlocks();
	};

	VerticalTimeline.prototype.hideBlocks = function() {
		if ( !"classList" in document.documentElement ) {
			return; // no animation on older browsers
		}
		//hide timeline blocks which are outside the viewport
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("cd-timeline__img--hidden");
					self.contents[i].classList.add("cd-timeline__content--hidden");
				}
			})(i);
		}
	};

	VerticalTimeline.prototype.showBlocks = function() {
		if ( ! "classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.images[i].classList.add("cd-timeline__img--bounce-in");
					self.contents[i].classList.add("cd-timeline__content--bounce-in");
					self.images[i].classList.remove("cd-timeline__img--hidden");
					self.contents[i].classList.remove("cd-timeline__content--hidden");
				}
			})(i);
		}
	};

	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		verticalTimelinesArray = [],
		scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( var i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	};
})();


var names = ["Dr. Gautam Biswas", "Dr. Newasds Name1", "Dr. Newasdf Name2","Dr. Newasdf Name2"]
var n=1;
var contents=[
  " Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set. ",
  "On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida. Its mission was to go where no human being had gone before—the moon! The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin. The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day. On July 21, 1969, at precisely 10:56 EDT, Commander ",
  "It was July 21, 1969, and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon. The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk. Upon Neil’s "
]
var articles = [
  " Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set. ",
  "On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida. Its mission was to go where no human being had gone before—the moon! The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin. The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day. On July 21, 1969, at precisely 10:56 EDT, ",
  "It was July 21, 1969, and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon. The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk. Upon Neil’s"
]

var titles = [
  "Current Director,2013-Present",
  "Past Director,19XX-19XX",
  "Past Director,19XX-19XX"
]
$(document).ready(function () {
  $("#button1").click(function () {

    if(n==0){
      $('#name_m').html(names[0]);
      $('#name_m_modal').html(names[0]);
      $('#title_m').html(titles[0]);
      document.getElementById('profile_m').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKHH1aR2AcZWCk1HGrmmqfiqmVOA1QGNb3dvPP_3oPDxZd3EX';
      $('#content_m').html(contents[0]);
      
      n= n+1;
    }
    else if(n==1){
      $('#name_m').html(names[1]);
      $('#name_m_modal').html(names[1]);
      $('#title_m').html(titles[1]);
      document.getElementById('profile_m').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8m5Risv6ogVRorbFxPHqofEAdiLzT3kKu3a7UNSEFTC9GbuHr8Q';
      $('#content_m').html(contents[1]);
      n = n + 1;
    }
    else{
      $('#name_m').html(names[2]);
      $('#name_m_modal').html(names[2]);
      $('#title_m').html(titles[2]);
      document.getElementById('profile_m').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFFCjSP1Nb1Ky5UrUBOieCfQy-IgmFUqnKQiy2V7f8OwFNQta';
      $('#content_m').html(contents[2]);
      n = 0;
    }
     });
});

var m_section = document.getElementById("message_group");
var btns = m_section.getElementsByClassName("btn-message");
$(document).ready(function () {
  $("#btn1").click(function () {
    var current = document.getElementsByClassName("active-message");
    current[0].className = current[0].className.replace(" active-message", "");
    this.className += " active-message";
    $('#name_m').html(names[0]);
    $('#name_m_modal').html(names[0]);
    $('#title_m').html(titles[0]);
    document.getElementById('profile_m').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKHH1aR2AcZWCk1HGrmmqfiqmVOA1QGNb3dvPP_3oPDxZd3EX';
    $('#content_m').html(contents[0]);
  });
});
$(document).ready(function () {
  $("#btn2").click(function () {
    var current = document.getElementsByClassName("active-message");
    current[0].className = current[0].className.replace(" active-message", "");
    this.className += " active-message";
    $('#name_m').html(names[1]);
    $('#name_m_modal').html(names[1]);
    $('#title_m').html(titles[1]);
    document.getElementById('profile_m').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8m5Risv6ogVRorbFxPHqofEAdiLzT3kKu3a7UNSEFTC9GbuHr8Q';
    $('#content_m').html(contents[1]);
  });
});
$(document).ready(function () {
  $("#btn3").click(function () {
    var current = document.getElementsByClassName("active-message");
    current[0].className = current[0].className.replace(" active-message", "");
    this.className += " active-message";
    $('#name_m').html(names[2]);
    $('#name_m_modal').html(names[2]);
    $('#title_m').html(titles[2]);
    document.getElementById('profile_m').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFFCjSP1Nb1Ky5UrUBOieCfQy-IgmFUqnKQiy2V7f8OwFNQta';
    $('#content_m').html(contents[2]);
  });
});
$(document).ready(function () {
  $("#btn4").click(function () {
    var current = document.getElementsByClassName("active-message");
    current[0].className = current[0].className.replace(" active-message", "");
    this.className += " active-message";
  });
});

var m=0;
$(document).ready(function () {
  $("#button2").click(function () {
    
    if(m==0){
      $('#article_m').html(articles[0]);
      m = 1;
    }
    else if(m==1){
      $('#article_m').html(articles[1]);
      m = 2;
    }
    else{
      $('#article_m').html(articles[2]);
      m = 0;
    }
  });
});


$(window).resize(function() {
	var path = $(this);
	var contW = path.width();
	if(contW >= 751){
		document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
	}else{
		document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
	}
});
$(document).ready(function() {
	$('.dropdown').on('show.bs.dropdown', function(e){
	    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		var elem = document.getElementById("sidebar-wrapper");
		left = window.getComputedStyle(elem,null).getPropertyValue("left");
		if(left == "200px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
		}
		else if(left == "-200px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
		}
	});
});


$(document).ready(function () {
  $("#btn_dep").click(function () {
    document.getElementById('myImaged').style.display = "block";
    document.getElementById('myImagec').style.display = "none";
  });
});
$(document).ready(function () {
  $("#btn_cen").click(function () {
    document.getElementById('myImagec').style.display = "block";
    document.getElementById('myImaged').style.display = "none";
  });
});


