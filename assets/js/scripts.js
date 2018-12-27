$(document).ready(function() {
  $('a.menu').click(function() {
    $('.site-header nav').slideToggle(100);
    return false;
  });

  $(window).resize(function(){
    var w = $(window).width();
    var menu = $('.site-header nav');
    if(w > 680 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });


  $('article.post iframe').wrap('<div class="video-container" />');

});

$(document).ready(function() {
    var vpH = $(window).height();
    var vH = vpH - 350;
    $('.overlay').css("height", vH);
    $('.featured-image').css("height", vH);
});

// Header/hero scrolling swap
$(window).scroll(function() {
  var logo = $("#swap-logo");
  var color_logo = $("#change-color-logo");
  var header = $("#mono-header");
  var color_header = $("#color-header");
  var white_logo_src = "/images/simple_title_white.png";
  var dark_logo_src = "/images/simple_title.png";

  if (this.scrollY < 400) {
    logo.addClass("hide-header-logo");
    header.removeClass("header-scrolled");
    color_header.removeClass("header-scrolled");
    color_header.removeClass("darken");
    color_logo.src = "/images/simple_title_white.png";
    $(color_logo).attr("src", white_logo_src);
  } else {
    logo.removeClass("hide-header-logo");
    header.addClass("header-scrolled");
    color_header.addClass("header-scrolled");
    color_header.addClass("darken");
    $(color_logo).attr("src", dark_logo_src);
  }
});


$(function(){
  $('<img>').attr('src',function(){
      var imgUrl = $('div.featured-image').css('background-image');
      if (!imgUrl) {
        return;
      }
      var urlre = /url\([\"\']?(.*?)[\"\']?\)/;
      imgUrl = imgUrl.match(urlre);
      if($.isArray(imgUrl)) {
        imgUrl = imgUrl[1]; // Captured subexpression.
      }
      return imgUrl;
  }).load(function(){
    $('img.loading').fadeOut(500);
    $('div.overlay').fadeTo("slow", 0.6);
  });
});

$(function(){
    $('.post-list li').each(function(i){
        var t = $(this);
        setTimeout(function(){ t.addClass('slider'); }, (i+1) * 330);
    });
});
