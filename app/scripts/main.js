'use strict';
// detect mobile device
function isMobile() { 
 if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i) 
  || navigator.userAgent.match(/iPad/i) 
  || navigator.userAgent.match(/iPod/i) 
  || navigator.userAgent.match(/BlackBerry/i) 
  || navigator.userAgent.match(/Windows Phone/i))
 {
    return true;
  }
 else{
    return false;
  }
}

function isSafari() {
  if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) 
  {
    return true;
  }
 else{
    return false;
  }
}
// Cookies policy
function WHCreateCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = '; expires=' + date.toGMTString();
  document.cookie = name+'='+value+expires+'; path=/';
}
function WHReadCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

window.onload = WHCheckCookies;

function WHCheckCookies() {
    if(WHReadCookie('cookies_accepted') != 'T') {
        var message_container = document.createElement('div');
        message_container.id = 'cookies-message-container';
        var html_code = '<div id="cookies-message" style="padding: 10px 0px; font-size: 14px; line-height: 30px; text-align: center; position: fixed; bottom: 0px; border-top: 1px solid #ff5335; background-color: #3a424c; width: 100%; z-index: 9999;">Ta strona używa ciasteczek (cookies), dzięki którym może działać lepiej. <a href="http://wszystkoociasteczkach.pl" style="text-decoration: underline" target="_blank">Dowiedz się więcej</a><a href="javascript:WHCloseCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #04c461; padding: 5px 10px; color: #FFF; border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; display: inline-block; margin-left: 10px; text-decoration: none; cursor: pointer;">Rozumiem</a></div>';
        message_container.innerHTML = html_code;
        document.body.appendChild(message_container);
    }
}

function WHCloseCookiesWindow() {
    WHCreateCookie('cookies_accepted', 'T', 365);
    document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
}
// end Cookies policy
function removeScrollMe() {
  var $container = $('body');
  var $divs = $container.find('.scrollme');
  $divs.removeClass('scrollme');   
}

// Menu animation
function disableLink(element){
  $(element).click(function(e){
  e.preventDefault();
  }); 
}
function checkForActive(elementId, activeClass) {
  var items = $('#'+ elementId).find($('.' + activeClass));
  if (items !== null){
    return true;
  }else{
    return false;
  }
}
function mLine(listID, activeClass) {
  var mainNav = document.getElementById(listID);
  var span = document.createElement('span');
  var magicLine = document.getElementById('magic-line');

  if(!magicLine){
    span.setAttribute('id', 'magic-line');
    mainNav.appendChild(span);
  }
  var $magicLine = $('#magic-line');
  // get menu li's objects
  var $menuElements = $('#' + listID + ' > li' );
  var $activeIndex = $menuElements.index($('.' + activeClass));

  var $positionElements = $menuElements.map( function (){
   return $( this ).position().left;
  });

  var $widthElements = $menuElements.map( function (){
    return $( this ).width();
  });

  if (checkForActive(listID, activeClass) === true) {
    $magicLine.width($widthElements[$activeIndex]);
    $magicLine.css('left', $positionElements[$activeIndex]);
  }

  $menuElements.hover(function(){
    $magicLine.width($widthElements[$(this).index()]);
    $magicLine.css('left', $positionElements[$(this).index()]);
  }, 
  function(){
    $magicLine.width($widthElements[$activeIndex]);
    $magicLine.css('left', $positionElements[$activeIndex]);
  });

  $menuElements.click(function(){
    $menuElements.each( function(){
      $menuElements.removeClass(activeClass);
    });
    $( this ).addClass(activeClass);
    $activeIndex = $menuElements.index($('.' + activeClass));
  });

}

// mobile menu
function mMenu(){
  $('.hover-menu').parent().click(function(){
    $('.hover-menu').toggleClass('open');
  });

  $('.menu-trigger').click(function(){
    $(this).toggleClass('open');
    $('.navigation').toggleClass('open');
  });
}
function blogyFilters(){
  $('#filter-trigger').click(function(){
    $(this).toggleClass('active');
    $('.filters-container').toggleClass('open');
  });
}
// Short script to encode our SVG in base64
function svGrund() {
  
  // This can be reversed using window.atob('base64')
  var bgSvg = document.getElementById('bgsvg');
  var bgSvgnx = document.getElementById('bgsvgnx');
  
  var svg = document.getElementsByTagName('svg')[0];

  if(!svg){ 
    return null; 
  }else{
    // Convert the SVG node to HTML
    var div = document.createElement('div');
    div.appendChild(svg.cloneNode(true));

    // Encode the SVG as base64
    var b64 = 'data:image/svg+xml;base64,'+window.btoa(div.innerHTML);
    var url = 'url("' + b64 + '")';

    if(bgSvg === null){
      return null;
    }else{
      bgSvg.style.backgroundImage = url;
    }

    if(bgSvgnx === null){
      return null;
    }else{
      bgSvgnx.style.backgroundImage = url;
    }
  }
 
}
function svGrundPortfolio() {
  
  // This can be reversed using window.atob('base64')
  var bgSvgPortfolio = document.getElementById('bgsvgportfolio');
  
  var svg = document.getElementsByTagName('svg')[0];

  if(!svg){ 
    return null; 
  }else{
    // Convert the SVG node to HTML
    var div = document.createElement('div');
    div.appendChild(svg.cloneNode(true));

    // Encode the SVG as base64
    var b64 = 'data:image/svg+xml;base64,'+window.btoa(div.innerHTML);
    var url = 'url("' + b64 + '")';

    if(bgSvgPortfolio === null){
      return null;
    }else{
      bgSvgPortfolio.style.backgroundImage = url;
    }
  }
 
}

// Parallax effect
(function($) {

    (function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
  })();

  var $container = $('body');
  var $divs = $container.find('.plx-item');
  var thingBeingScrolled = $(window);
  var plxWindowHeight = $divs.eq(0).closest('.plx-w').height();
  var diffHeight = $divs.eq(0).height() - plxWindowHeight;
  var len = $divs.length;
  
  var i,div,offset,scroll,top,transform;

  var offsets = $divs.get().map(function(div,d) {
    return $(div).offset();
  });

  var render = function() {

      top = thingBeingScrolled.scrollTop();

      for(i=0;i<len;i++) {

        // get the DOM object
        div = $divs[i];

        // our offset
        offset = top - offsets[i].top;

        // our transform string
        scroll = ~~(offset / plxWindowHeight * diffHeight);
        transform = 'translate3d(0px, ' + scroll + 'px, 0px)';

        // apply
        div.style.webkitTransform = transform;
        div.style.MozTransform = transform;
        div.style.msTransform = transform;
        div.style.OTransform = transform;
        div.style.transform = transform;

      }
  };

  (function loop(){  
      if(isMobile() === false && isSafari() === false){
        requestAnimationFrame(loop);
        render();
      }
  })();

})(jQuery);

//info box
function clickOrHover(){
      var $front = $('div.inner.front');
      
      $front.hover(function(){
        $(this).addClass('active');
        $(this).parent().find('.click-or-hover').addClass('hidden');
      },function(){
        $(this).removeClass('active');
         $(this).parent().find('.click-or-hover').removeClass('hidden');
      });

      $front.click(
        function(){
          if($(this).hasClass('active') === true){
            $(this).removeClass('active');
             $(this).parent().find('.click-or-hover').removeClass('hidden');
          }else{
            $(this).addClass('active');
            $(this).parent().find('.click-or-hover').addClass('hidden');
          }
        });
    }

// sprite photo
var first = true;
function spritePhoto(){
  var me = document.getElementById('me');
  var bgPos, newXpos;

  if(me === null){
    return null;
  }else{
    // first loop
    if(first){
      bgPos = '0px 0px';
      first = false;
    }else{
      bgPos = me.style.backgroundPosition;
    }

    var xy = bgPos.split(' ');
    var x = xy[0].split(' px');
    
    // loop from start when achive -1500
    if(parseInt(x) == '-1500'){
      newXpos = 0; 
    }else{  
      newXpos = parseInt(x) - 250;
    }
    
    var newbgPos = newXpos + 'px' + ' ' + xy[1];

    me.style.backgroundPosition = newbgPos;
  }
}

// mouseover, mouseout sptite photo
function startPhoto(){
  var me = document.getElementById('me');
  var initSprite = setInterval(spritePhoto, 250);
  if(me === null){
    return null;
  }else{
    me.onmouseover = function(){
    clearInterval(initSprite);
    };

    me.onmouseout = function(){
    initSprite = setInterval(spritePhoto, 250);
    };
  }
}

// game over button
function gameOver(){
  var $gObutton = $('.game-over .baton');

  $gObutton.hover(function(){
    $('.navigation').addClass('activeted');
    $('.menu-trigger').addClass('activeted');
    },function(){
      $('.navigation').removeClass('activeted');
      $('.menu-trigger').removeClass('activeted');
  });
}

// register events
$(document).on('click', '#switch', function() {
    $('#single-portfolio-landing').html('');
});

$(document).on('click','#gostart', function(e) {
      e.preventDefault();
      $('.scrollable').animate(
        {scrollTop:0}, {
                    duration: 4000,
                    easing: 'easeOutBounce'
          });
      });

// trigger functions
$(document).ready(function () {
  isMobile();
  // AJAX
  $.ajaxSetup({cache:false});
        $('.portfolio-link').click(function(){
            var portfolioLink = $(this).attr('href');
 
            $('#single-portfolio-landing').html(
              '<div class="ajaxload">Ładuje zawartość...' +
              '<div class="box3d">' +
                '<div class="p1"></div>' +
                '<div class="p2"></div>' +
                '<div class="p3"></div>' +
                '<div class="p4"></div>' +
                '<div class="p5"></div>' +
                '<div class="p6"></div>' +
              '</div></div>');
            $('#single-portfolio-landing').load(portfolioLink, function() {
              svGrundPortfolio();
            }
              );

        return false;
  });

  if(isSafari() === false){
     //nicescroll
    $('html').niceScroll();
    $('.scrollable').niceScroll();
  }

  if(isMobile() === false){
  mLine('menu', 'active');
  svGrund();
  }
  if(isMobile() === true){
    removeScrollMe();
  }
  disableLink('#menu > li:first-child > a');
  clickOrHover();
  gameOver();
  startPhoto();
  mMenu();
  blogyFilters();

  $('#scene').parallax({
     invertX: false,
      invertY: false
  });

  // scroll to action
    $('.scroll').click(function(e){
      e.preventDefault();
      $('html,body').animate(
        {scrollTop:$(this.hash).offset().top - 90}, {
                    duration: 4000,
                    easing: 'easeOutBounce'
          });
      });

  // portfolio filters and sort -MixItUp2
  if($('#mix-container').length) {
    $('#mix-container').mixItUp();
  }
  // execute only on home page
   if($('body').hasClass('home') === true){
     // scroll animation trigger
    $(window).scroll(function() {
      var box = $('.direction');
      
      var y = box.offset().top;
      var x = $(this).scrollTop();

      // height from box to window top 
      var z = y - x;

      if(z <= 400 ){
          $('.direction').addClass('deactivate');
        }else{
          $('.direction').removeClass('deactivate');
        }
    });

    $(window).scroll(function() {
      var box = $('.lightup');
      
      var y = box.offset().top;
      var x = $(this).scrollTop();

      // height from box to window top 
      var z = y - x;

      if(z <= 700 ){
          $('.lightup').removeClass('deactivate');
        }else{
          $('.lightup').addClass('deactivate');
        }
    });
  }    
});
$(window).resize(function(){
  if(isMobile() === false){
  mLine('menu', 'active');
  }
}); 

