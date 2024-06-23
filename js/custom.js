$(document).ready(function(){

    $(window).scroll(function() {
          stickyHeader();
      });
      function stickyHeader() {
         if ($(this).scrollTop() > 110){
                 $('body').addClass("sticky"); 
         } else { 
             $('body').removeClass("sticky"); 
         } 
    }



    // var counted = 0;
    //   $(window).scroll(function() {

    //     var oTop = $('#counter').offset().top - window.innerHeight;
    //     if (counted == 0 && $(window).scrollTop() > oTop) {
    //       $('.count').each(function() {
    //         var $this = $(this),
    //           countTo = $this.attr('data-count');
    //         $({
    //           countNum: $this.text()
    //         }).animate({
    //             countNum: countTo
    //           },

    //           {

    //             duration: 2000,
    //             easing: 'swing',
    //             step: function() {
    //               $this.text(Math.floor(this.countNum));
    //             },
    //             complete: function() {
    //               $this.text(this.countNum);
    //               //alert('finished');
    //             }

    //           });
    //       });
    //       counted = 1;
    //     }

    //   });


    //------ wow ------//
    
     new WOW().init();

     //partnerSlider
     var owl = $('.caseslider');
      owl.owlCarousel({
        margin: 10, 
        autoplay: false,
        autoplayTimeout:3500,
        autoplayHoverPause:false,
        smartSpeed:2000,
        dots: true,
        nav:false,   
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })


 

  //menu
    $(".menubtn").click(function(e) {
      e.preventDefault();
       $('.menuholder').addClass("menuholderadd");
  });
  $(".cross").click(function() {
       $('.menuholder').removeClass("menuholderadd");
       $(".subcross").parents('.hashchild').children('.submenu').removeClass('submenu1');
  });

     $(".hashchild .newadd").click(function() {
       $(this).parents('.hashchild').children('.submenu').addClass('submenu1');
  });
  $(".subcross").click(function() {
       $(this).parents('.hashchild').children('.submenu').removeClass('submenu1');
  });

    //counter
    //number count for stats, using jQuery animate



  $('.test-slider').slick({

  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:"<button type='button' class='slick-next pull-right'><img src='images/arrow-next.png' alt='' /></button>",
  prevArrow:"<button type='button' class='slick-prev pull-left'><img src='images/arrow-prev.png' alt='' /></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



  //counter-slider

  $('.counter-slider').slick({

  infinite: true,
  speed: 300,
  slidesToShow:3,
  slidesToScroll: 1,
  nextArrow:"<button type='button' class='slick-next pull-right'><img src='images/arrow-next.png' alt='' /></button>",
  prevArrow:"<button type='button' class='slick-prev pull-left'><img src='images/arrow-prev.png' alt='' /></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  //certifications slider

  $('.cert-slider').slick({

  infinite: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0,
  speed: 20000,
  pauseOnHover: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow:"<button type='button' class='slick-next pull-right'><img src='images/arrow-next.png' alt='' /></button>",
  prevArrow:"<button type='button' class='slick-prev pull-left'><img src='images/arrow-prev.png' alt='' /></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // dots: true
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 4000,
        cssEase: 'ease',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 4000,
        cssEase: 'ease',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



    //certifications slider

  $('.quote-slider').slick({

  infinite: true,
  // cssEase: 'linear',
  dots: true,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 2000,
  pauseOnHover: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:"<button type='button' class='slick-next pull-right'><img src='images/arrow-next-green.png' alt='' /></button>",
  prevArrow:"<button type='button' class='slick-prev pull-left'><img src='images/arrow-prev-green.png' alt='' /></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // dots: true
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


      //in-view-js

var $animation_elements = $('.animation-element');

var $window = $(window);



function check_if_in_view() {

  var window_height = $window.height();

  var window_top_position = $window.scrollTop();

  var window_bottom_position = (window_top_position + window_height);

 

      $.each($animation_elements, function() {

        var $element = $(this);

        var element_height = $element.outerHeight();

        var element_top_position = $element.offset().top;

        var element_bottom_position = (element_top_position + element_height);

     

        if ((element_bottom_position >= window_top_position) &&

            (element_top_position <= window_bottom_position)) {

          $('div').removeClass('in-view');
          
          $element.addClass('in-view');

        } else {

          $element.removeClass('in-view');

        }

      });

    }



    //Accordion 


    $(document).ready(function() {

      $('.acc-head').on('click', function() {
          if($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp(500);
            $(this).removeClass('active');
          }
          else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $(this).siblings('.acc-content').slideDown(500);
            $(this).addClass('active');
          }
      });     
    });


    





    $window.on('scroll resize', check_if_in_view);

    $window.trigger('scroll');



    const elemInView = $('.service-menulist li a');

    $window.on('scroll' , function() {
        
        elemInView.each(function(index) {
            if(this.hash !== '') {
              const hash = this.hash;
              const target = $(hash);
              
              if(target.hasClass('in-view') ){
                  $(this).addClass('active');

              }else {
                $(this).removeClass('active');
              }
            }

        })
      
    })

    // console.log($('.service-single.animation-element'))

    function stickyList() {
        const section = $('.inner-service-sec');
        const scrollPos = section.offset().top + section.height() - $window.height();
        // console.log(scrollPos);

        $window.on('scroll' , ()=> {
          const scroll = $(window).scrollTop();
          // console.log(scroll);
          if(scroll > scrollPos){
            section.addClass('sticky');
          }else{
            section.removeClass('sticky');
          }
        })
    }

    stickyList();


    

})
 




