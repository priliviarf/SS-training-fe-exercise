$(document).ready(function(){
  // ------------------- CountUp.js ------------------------//
  var scValue = document.getElementById("sc").innerHTML;
  var fpValue = document.getElementById("fp").innerHTML;
  var hwValue = document.getElementById("hw").innerHTML;
  var waValue = document.getElementById("wa").innerHTML;
  var sc = new CountUp("sc",0,scValue);
  var fp = new CountUp("fp",0,fpValue);
  var hw = new CountUp("hw",0,hwValue);
  var wa = new CountUp("wa",0,waValue);
  $(document).on("scroll", function(){
    if($(window).scrollTop() > 0){
      $("#mainHead").addClass('fixed-top')
    } else{
      $("#mainHead").removeClass('fixed-top')
    }
    if($(window).scrollTop() > $(window).height()/2) {
      sc.start();
      fp.start();
      hw.start();
      wa.start();
    }
  })

  // ------------------- owlCarousel ------------------------//
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    loop: true
  });

  // ------------------- scroll to id ------------------------//
  $(document).on('click','a[href^="#"]', function(e){
    var id = $(this).attr('href');
    // console.log(id);
    // var $id = $(id);
    // console.log($id);
    // if ($id.length === 0){
    //   return;
    // }
    // e.preventDefault();
    var pos = $(id).offset().top;
    $('body,html').animate({scrollTop: pos},1000);
  });

  // ------------------- isotope ------------------------//
  $(".d-grid").isotope({
    itemSelector: '.d-grid-item',
    layoutMode: 'masonry'
  });
  $(".d-grid-menu li").click(function(){
    $(".d-grid-menu li").removeClass('active');
    $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $(".d-grid").isotope({
      filter: selector
    });
    return false;
  })

  // ------------------- lightcase ------------------------//
  $('a[data-rel^=lightcase]').lightcase();

  // ------------------- jqueryFormValidation ------------------------//
  $("#confirmMessageForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 6
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    }
  });
});
