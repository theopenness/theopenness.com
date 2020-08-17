$(document).ready(function(){
    $('.musicreleases').slick({
        variableWidth: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,	
        centerMode: false,
        arrows: true,
        dots: false,
        speed: 275,
        waitForAnimate: false
    });
    $('.videoreleases').slick({
        variableWidth: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,	
        centerMode: true,
        arrows: true,
        dots: true,
        speed: 275,
        waitForAnimate: false,
        centerPadding: 10
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }