jQuery(document).ready(function ($) {
  slickReview($);
  selectActivate($);
  removeItem($);
  slideTheCart($);
  categorySlider($);
  slickWithThumba($);
  slickWithThumb($);
  removeActiveFilter($);
  slideUpandDownFilter($);
  slickItems($);
  likeTheProduct($);
  slickSames($);
  fancyBoxAdd($);
  toggleFilter($);
  popUpModal($);
  toggleSubmenuCategory($);
});

function popUpModal($) {
  if ($(".open_appointment").length > 0) {
    // Toggle the active class on pop_appointment when open_appointment is clicked
    $(".open_appointment").on("click", function () {
      $(".pop_appointment").toggleClass("active");
      $(document.body).toggleClass("no-scroll");
    });

    // Close pop_appointment if the user clicks outside of appointment_container
    $(".popup_appointment_overlay, .appointment_header .close").on(
      "click",
      function () {
        $(".pop_appointment").removeClass("active");
        $(document.body).removeClass("no-scroll");
      }
    );
  }
}

function fancyBoxAdd($) {
  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {});
  }
}

function slickSames($) {
  if ($(".slider_samenstellen").length > 0) {
    $(".slider_samenstellen").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      autoplay: false,
      fade: true,
      prevArrow: '<button class="prev_btn slick-arrow _reposition"></button>',
      nextArrow: '<button class="next_btn slick-arrow _reposition"></button>',
    });
  }
}

function likeTheProduct($) {
  if ($(".like").length > 0) {
    $(".like").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("no")) {
        $(this).removeClass("no");
        $(this).addClass("yes");
      } else {
        $(this).removeClass("yes");
        $(this).addClass("no");
      }

      // add the ajax ....
    });
  }
}

function slideUpandDownFilter($) {
  $(".slide_the_list").click(function () {
    $(this).next(".check_list").slideToggle(); // Slide up or down the next sibling with class .check_list
    $(this).toggleClass("open");
  });
}

function removeActiveFilter($) {
  // if the X button clicked, it'll remove the current active filter
  if ($(".active_filters").length > 0) {
    $(".filter_content").on("click", ".remove", function () {
      $(this).parent("p").remove();
    });

    // remove all active filter
    $(".remove_all_active_filter").on("click", function () {
      $(".filter_content").find("p").remove();
    });
  }
}

function slickWithThumb($) {
  $(document).ready(function () {
    var currentSlideIndex = 0;

    // Initially show the first slide and highlight the first thumbnail
    $(".slide").hide().eq(currentSlideIndex).show().addClass("active");
    $(".thumb").eq(currentSlideIndex).addClass("active");

    // Handle thumbnail click event
    $(".thumb").on("click", function () {
      currentSlideIndex = $(this).data("index");

      // Hide all slides, then show the selected one
      $(".slide").hide().removeClass("active");
      $(".slide").eq(currentSlideIndex).fadeIn().addClass("active");

      // Update thumbnail active state
      $(".thumb").removeClass("active");
      $(this).addClass("active");
    });

    // Handle pop-up gallery display
    $(".slide img").on("click", function () {
      var src = $(this).attr("src");
      $(".popup-gallery img").attr("src", src);
      $(".popup-gallery").fadeIn();
    });

    $(".close-btn").on("click", function () {
      $(".popup-gallery").fadeOut();
    });
  });
}

function slickWithThumba($) {
  if ($(".product__slider-main").length) {
    var $slider = $(".product__slider-main")
      .on("init", function (slick) {
        $(".product__slider-main").fadeIn(1000);
      })
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        lazyLoad: "ondemand",
        autoplaySpeed: 3000,
        asNavFor: ".product__slider-thmb",
      });

    var $slider2 = $(".product__slider-thmb")
      .on("init", function (slick) {
        $(".product__slider-thmb").fadeIn(1000);
      })
      .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        asNavFor: ".product__slider-main",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
      });

    //remove active class from all thumbnail slides
    $(".product__slider-thmb .slick-slide").removeClass("slick-active");

    //set active class to first thumbnail slides
    $(".product__slider-thmb .slick-slide").eq(0).addClass("slick-active");

    // On before slide change match active thumbnail to current slide
    $(".product__slider-main").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $(".product__slider-thmb .slick-slide").removeClass("slick-active");
        $(".product__slider-thmb .slick-slide")
          .eq(mySlideNumber)
          .addClass("slick-active");
      }
    );

    // init slider
    require(["js-sliderWithProgressbar"], function (slider) {
      $(".product__slider-main").each(function () {
        me.slider = new slider(
          $(this),
          options,
          sliderOptions,
          previewSliderOptions
        );

        // stop slider
        //me.slider.stop();

        // start slider
        //me.slider.start(index);

        // get reference to slick slider
        //me.slider.getSlick();
      });
    });
    var options = {
      progressbarSelector: ".bJS_progressbar",
      slideSelector: ".bJS_slider",
      previewSlideSelector: ".bJS_previewSlider",
      progressInterval: "",
      // add your own progressbar animation function to sync it i.e. with a video
      // function will be called if the current preview slider item (".b_previewItem") has the data-customprogressbar="true" property set
      onCustomProgressbar: function ($slide, $progressbar) {},
    };

    // slick slider options
    // see: https://kenwheeler.github.io/slick/
    var sliderOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
    };

    // slick slider options
    // see: https://kenwheeler.github.io/slick/
    var previewSliderOptions = {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: true,
      centerMode: true,
    };
  }
}

function categorySlider($) {
  $(".category_btn").on("click", function () {
    $("#wrap_slider").addClass("active");
    $(".backdrop").addClass("active");
    $(".slider_categories").addClass("active");
    $("body").addClass("no-scroll");
  });

  // Hide the wrap_slider when close button or backdrop is clicked
  $(".close-call, .backdrop").on("click", function () {
    $("#wrap_slider").removeClass("active");
    $(".slider_categories").removeClass("active");
    $(".backdrop").removeClass("active");
  });

  // Show the sub-menu when arrow_btn is clicked
  $(".arrow_btn button").on("click", function () {
    $(this).closest("li").find(".sub-menu").addClass("shown");
    // $(this).closest('li').find('.sub-menu').show().animate({
    //     left: '0'
    // }, 500); // Slide in the popup
  });

  // Hide the sub-menu when close button or back to main category link is clicked
  $(".close-call, .close_sub_menu").on("click", function () {
    $(this).closest(".sub-menu").removeClass("active");
    $("body").removeClass("no-scroll");
  });

  $(".close_sub_menu").on("click", function () {
    // $(this).closest('li').find('.sub-menu').animate({
    //     right: '-400px'
    // }, 500, function () {
    //     $(this).css('left', 'unset');
    //     $(this).hide(); // Hide after animation completes
    // });
    $(this).closest("li").find(".sub-menu").removeClass("shown");
  });
}

function slideTheCart($) {
  if ($(".pop_up_cart").length > 0) {
    $(".with_chart .icon_container").click(function () {
      $("body").addClass("no-scroll");
      $(".pop_up_cart").show().addClass("show");
      $(".backdrop").show().addClass("show");
      $("#wrap_popup").show().addClass("show");

      $("#wrap_popup").show().animate(
        {
          right: "0",
        },
        500
      ); // Slide in the popup
    });

    $(".close-call, .backdrop").click(function () {
      $("body").removeClass("no-scroll");
      $("#wrap_popup").animate(
        {
          right: "-400px",
        },
        500,
        function () {
          $("#wrap_popup").hide(); // Hide after animation completes
        }
      );
      $(".backdrop").fadeTo(500, 0, function () {
        $(".pop_up_cart").hide(); // Hide the container after fade-out
      });

      $(".backdrop").hide();
    });
  }
}

function removeItem($) {
  $(".items_cart_popup").on("click", ".remove_this_item", function (event) {
    event.preventDefault();
    $(this).closest(".item_cart").remove();
  });
}

function selectActivate($) {
  if ($(".select2").length > 0) {
    $(".select2").select2({
      minimumResultsForSearch: -1,
    });
  }
}

function slickReview($) {
  if ($(".slider_reviews").length > 0) {
    $(".slider_reviews").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button class="prev_btn slick-arrow"></button>',
      nextArrow: '<button class="next_btn slick-arrow"></button>',
    });
  }
}

function slickItems($) {
  if ($(".items_slider").length > 0) {
    $(".items_slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: '<button class="prev_btn slick-arrow"></button>',
      nextArrow: '<button class="next_btn slick-arrow"></button>',
    });
  }
}

function toggleFilter($) {
  $(".filter_toggle").on("click", function () {
    $(".filter_section").toggleClass("active");
    $(".filter_overlay").toggleClass("active");
    $(document.body).toggleClass("no-scroll");
  });

  $(".filter_close, .filter_overlay").on("click", function () {
    closeFilter($);
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      closeFilter($);
    }
  });
}

function closeFilter($) {
  $(".filter_section").removeClass("active");
  $(".filter_overlay").removeClass("active");
  $(document.body).removeClass("no-scroll");
}

function toggleSubmenuCategory($) {
  var loadMoreButtons = $(".arrow_more");
  if (loadMoreButtons.length === 0) {
    return;
  }

  loadMoreButtons.each(function () {
    $(this).on("click", function () {
      $(this).closest(".sub_category").toggleClass("active");
    });
  });
}
