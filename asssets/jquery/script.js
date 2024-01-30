jQuery(document).ready(function () {
    // alert('hdasd');
    jQuery('.search-cros-btn').click(function () {
        jQuery('.rout-search-wrape').removeClass('rout-search-wrape-active');
    });
    jQuery('.rout-search-btn').click(function () {
        jQuery('.rout-search-wrape').addClass('rout-search-wrape-active');
    });
    jQuery('.p1').fadeOut();
    jQuery('.p2').fadeOut();
    jQuery('.p3').fadeOut();
    jQuery('.label1').click(function () {
        jQuery('.p1').fadeIn();
        jQuery('.p2').fadeOut();
        jQuery('.p3').fadeOut();
    });
    jQuery('.label2').click(function () {
        jQuery('.p2').fadeIn();
        jQuery('.p1').fadeOut();
        jQuery('.p3').fadeOut();
    });
    jQuery('.label3').click(function () {
        jQuery('.p3').fadeIn();
        jQuery('.p1').fadeOut();
        jQuery('.p2').fadeOut();
    });
    jQuery('.filter-btn').click(function () {
                   
        jQuery('.p3').fadeOut();
        jQuery('.p1').fadeOut();
        jQuery('.p2').fadeOut();
    });


    jQuery('.responsive').slick({
        dots: false,
        arrows:true,
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    jQuery('.rout-testimonial-card-head').slick({
      dots: false,
      arrows:true,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
           
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  jQuery('.hamburger').click(function () {
    jQuery('.hame-wrape').addClass('hame-wrape-active');
  });
  jQuery('.ham-btn').click(function () {
    jQuery('.hame-wrape').removeClass('hame-wrape-active');
  });
})