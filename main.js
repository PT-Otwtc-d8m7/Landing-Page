const boxA = document.getElementById('card-A');

boxA.addEventListener('click', function() {
    this.classList.toggle('hovered');
});

const boxB = document.getElementById('card-B');

boxB.addEventListener('click', function() {
    this.classList.toggle('hovered');
});

const boxC = document.getElementById('card-C');

boxC.addEventListener('click', function() {
    this.classList.toggle('hovered');
});

const boxD = document.getElementById('card-D');

boxD.addEventListener('click', function() {
    this.classList.toggle('hovered');
});


var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();


window.addEventListener('scroll', function() {
    var headerA = document.getElementById('headerA');
    var containerA = document.getElementById('containerA');
    // var ListA = document.getElementById('ListA')
    var scrolled = window.scrollY > 50;
    
    if (scrolled) {
      headerA.classList.add('scrolled');
    } else {
      containerA.classList.remove('scrolled');
    }
  });

  