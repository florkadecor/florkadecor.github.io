/* Open */
function openNav() {
  document.getElementById('myNav').style.height = '99.5%';
}

/* Close */
function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}
jQuery(function ($) {
  /* Shapes */
  const svgContainer = document.getElementById('svgContainer');
  const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    autoplay: false,
    path: '/assets/scripts/markom/lifestyle/preload_bca.json'
  });
  var Percentage;
  function LoadingStart() {
    var val = 0;
    Percentage = setInterval(function () {
      if (val < 80) {
        val += 1;
        $('#loader-wrapper .percentage span').text(val);
      }
    }, 50);
  }
  setTimeout(function () {
    LoadingStart();
    animItem.play();
    $('#loader-wrapper').addClass('anim-start');
    setTimeout(function () {
      $('#loader-wrapper .percentage span').text(100);
    }, 5000);
    setTimeout(function () {
      clearInterval(Percentage);
      $('#loader-wrapper').fadeOut(1000);
    }, 6000);
  }, 2000);
  $(window).on('load', function () {});
  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $('.wrapper-box').toggleClass('d-none');
    $('.layer').toggleClass('d-none');
  });
  $('.slider-column').on('init', function (event, slick) {
    $(this).append('<div class="slider-count"><p><span id="current">1</span> of <span id="total">' + slick.slideCount + '</span></p></div>');
  });
  $('.slider-column').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-count #current').html(currentSlide + 1);
    if (currentSlide + 1 === 2) {
      $('.arrows').addClass('bg-pesawat');
      $('.arrows').removeClass('bg-kreta');
      $('.arrows').removeClass('bg-hotel');
      $('.arrows').removeClass('bg-voucher');
      $('.arrows').removeClass('bg-first');
    } else if (currentSlide + 1 === 3) {
      $('.arrows').addClass('bg-kreta');
      $('.arrows').removeClass('bg-hotel');
      $('.arrows').removeClass('bg-voucher');
      $('.arrows').removeClass('bg-first');
      $('.arrows').removeClass('bg-pesawat');
    } else if (currentSlide + 1 === 4) {
      $('.arrows').addClass('bg-hotel');
      $('.arrows').removeClass('bg-kreta');
      $('.arrows').removeClass('bg-voucher');
      $('.arrows').removeClass('bg-first');
      $('.arrows').removeClass('bg-pesawat');
    } else if (currentSlide + 1 === 5) {
      $('.arrows').addClass('bg-voucher');
      $('.arrows').removeClass('bg-kreta');
      $('.arrows').removeClass('bg-hotel');
      $('.arrows').removeClass('bg-first');
      $('.arrows').removeClass('bg-pesawat');
    } else {
      $('.arrows').addClass('bg-first');
      $('.arrows').removeClass('bg-kreta');
      $('.arrows').removeClass('bg-hotel');
      $('.arrows').removeClass('bg-voucher');
      $('.arrows').removeClass('bg-pesawat');
    }
  });
  $('.slider-column').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: true,
    speed: 1000,
    useTransform: true,
    draggable: false,
    prevArrow: $('.btn-prev'),
    nextArrow: $('.btn-next')
  });
  $('.slider-fitur-lifestyle').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: true,
    speed: 1000,
    draggable: false,
    arrows: true,
    dots: false,
    nextArrow: '<button type=\'button\' class=\'.btn-next-fitur slick-next pull-right\'><i class=\'fa fa-angle-right\' aria-hidden=\'true\'></i></button>'
  });
  $('.slider-column').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.column-txt').removeClass('animated fadeInLeft').hide();
    $('.sliding-mobile').removeClass('animated fadeInLeft').hide();
    setTimeout(() => {
      $('.column-txt').addClass('animated fadeInLeft').show();
      $('.sliding-mobile').addClass('animated fadeInLeft').show();
    }, 1000);
    $('.slidermenus .menux').removeClass('active');
    if (nextSlide > 0) {
      $('.slidermenus .menux').eq(nextSlide - 1).addClass('active');
    }
  });
  if ($('.slick-slide').hasClass('slick-active')) {
    $('.column-txt').addClass('animated fadeInLeft');
  } else {
    $('.column-txt').removeClass('animated fadeInLeft');
  }
  var SinglePhone = $('.single-phone');
  SinglePhone.slick({
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ],

    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: true,
    speed: 300,
    prevArrow: '<button type=\'button\' class=\'slick-prev \'><i class=\'fa fa-angle-left\' aria-hidden=\'true\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'slick-next\'><i class=\'fa fa-angle-right\' aria-hidden=\'true\'></i></button>'
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    event.stopImmediatePropagation();
    var activeModal = $('.modal-page.show');
    var firstSlides = activeModal.find('[id^="pills-home"] li').length / 2;
    var seconsSlides = activeModal.find('[id^="pills-profile"] li').length / 2;
    if (nextSlide < firstSlides) {
      activeModal.find('.navtabs li:first-child a').tab('show');
    } else if (nextSlide > firstSlides - 1 && nextSlide < firstSlides + seconsSlides) {
      activeModal.find('.navtabs li:nth-child(2) a').tab('show');
    } else {
      activeModal.find('.navtabs li:nth-child(3) a').tab('show');
    }
    setTimeout(function () {
      var tabActive = $('.modal-page.show .tab-pane.active');
      var firstActiveElement = parseInt($('#' + tabActive.attr('id') + ' > ol > li').first().attr('data-attr'));
      // var indexTab = tabActive.index();
      var tabMobile = $('.modal-page.show .tab-mobile .tab-pane.active');
      var firstMobileElement = parseInt($('#' + tabMobile.attr('id') + ' > ol > li').first().attr('data-attr'));
      // var indexTabMobile = tabMobile.index();
      tabActive.find('li').removeClass('active').eq(Math.floor(nextSlide - firstActiveElement)).addClass('active');
      tabMobile.find('li').removeClass('active').eq(Math.floor(nextSlide - firstMobileElement)).addClass('active');
    }, 200);
  });
  $('.modal').on('shown.bs.modal', function (e) {
    $('.single-phone').slick('setPosition');
    var tabActive = $('.modal-page.show .tab-pane.active');
    tabActive.find('li:first-child').addClass('active');
  });
  $('a.menu-tab').on('shown.bs.tab', function (e) {
    var tabActive = $('.modal-page.show .tab-pane.active');
    tabActive.find('li').removeClass('active');
  });
  $('.logoSlide a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-column').slick('slickGoTo', slideno - 1);
  });
  $('.menux[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-column').slick('slickGoTo', slideno - 1);
  });
  $('.menu-tab').on('click', function (e) {
    var slideno = $(this).data('slide');
    $('.modal-page.show .single-phone').slick('slickGoTo', slideno);
  });
  $('.slick-go-to').on('click', function () {
    $('.slick-go-to.active').removeClass('active');
    $(this).addClass('active');
    var slideno = $(this).attr('data-attr');
    $('.modal-page.show .single-phone').slick('slickGoTo', slideno);
  });
  $('.step-wrapper .tab-content li a').click(function () {
    var goTo = $(this).attr('slick-go-to');
    SinglePhone.slick('slickGoTo', goTo);
  });
  $('.modal-page').on('hidden.bs.modal', function () {
    // $('.modal-page iframe').attr('src', $('.modal-page iframe').attr('src'));
    var src = $(this).find('iframe').attr('src');
    $(this).find('iframe').attr('src', '');
    $(this).find('iframe').attr('src', src);
  });
  $('.slidermenus li[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-column').slick('slickGoTo', slideno - 1);
  });
  $('.column-txt a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-column').slick('slickGoTo', slideno - 1);
  });
  $('.slidermenus').on('click', 'li', function () {
    $('.slidermenus li.active').removeClass('active');
    $(this).addClass('active');
  });
  $('.arrows').on('click', '.btn-arrow', function () {
    $('.arrows .btn-arrow.active').removeClass('active');
    $(this).addClass('active');
  });
  $('.dropdown-toggle').dropdown();
  const buttons = document.getElementsByClassName('menux');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      var layerClass = '.' + 'left' + '-layer';
      var layers = document.querySelectorAll(layerClass);
      for (const layer of layers) {
        layer.classList.toggle('active');
      }
    });
  }

  // accordion
  $('.collapse.show').each(function () {
    $(this).prev('.card-header').find('.svg-inline--fa').addClass('fa-minus').removeClass('fa-plus');
  });

  // Toggle plus minus icon on show hide of collapse element
  $('.collapse').on('show.bs.collapse', function () {
    $(this).prev('.card-header').find('.svg-inline--fa').removeClass('fa-plus').addClass('fa-minus');
  }).on('hide.bs.collapse', function () {
    $(this).prev('.card-header').find('.svg-inline--fa').removeClass('fa-minus').addClass('fa-plus');
  });
  $('.dropdown-menu li a').click(function () {
    $('.menuwrap:first-child').html($(this).html());
  });
});