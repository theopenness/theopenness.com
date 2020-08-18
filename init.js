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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById('bontent');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
