var audio1 = new Audio('Blop-Mark_DiAngelo.mp3');

function clickMenu() {

audio1.play('Blop-Mark_DiAngelo.mp3');

}

$(document).ready(function(){
    $(".navbar a, footer a[href='#myPage'], .home-header a, .navbar-brand").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
        });
      } 
    });
  })