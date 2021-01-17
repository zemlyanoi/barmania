// var header = new Headhesive('.nav-site');

$(document).ready(function(){
$('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
});





// --------------------------- Плавное затухание 

    $(document).ready(function() {
        $("body").css("display", "none");
    });



    $(document).ready(function() {
            $("body").css("display", "none");
            $("body").fadeIn(500);
    });




$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(500);

    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});


