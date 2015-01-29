'use strict';
// detect mobile device
// window.mobilecheck = function() {
//   var check = false;
//   (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
//   console.log("check" + check);
//   return check;
// }
var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}else{
  isMobile = false;
}

var isSafari = true;
function checkIfIsSafari() {
  if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) 
  {
    isSafari = true;
  }
 else{
    isSafari = false;
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
        var html_code = '<div id="cookies-message" style="padding: 10px 0px; font-size: 14px; line-height: 30px; text-align: center; position: fixed; bottom: 0px; border-top: 1px solid #ff5335; background-color: #1d181f; width: 100%; z-index: 9999;">Ta strona używa ciasteczek (cookies), dzięki którym może działać lepiej. <a href="http://wszystkoociasteczkach.pl" style="text-decoration: underline" target="_blank">Dowiedz się więcej</a><a href="javascript:WHCloseCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #04c461; padding: 5px 10px; color: #FFF; border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; display: inline-block; margin-left: 10px; text-decoration: none; cursor: pointer;">Rozumiem</a></div>';
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
// function checkForActive(listID, activeClass) {
//   var items = $('#'+ listID).find($('.' + activeClass));
//   if (!items){
//     return null;
//   }else{
//     return true;
//   }
// }
function mLine(listID, activeClass) {
  var mainNav = document.getElementById(listID);
  var span = document.createElement('span');
  var magicLine = document.getElementById('magic-line');

  // make magic line
  if(!magicLine){
    span.setAttribute('id', 'magic-line');
    mainNav.appendChild(span);
  }
  var $magicLine = $('#magic-line');

  // get menu li's objects
  var $menuElements = $('#' + listID + ' > li' );
  // get index of active li
  var $activeIndex = $menuElements.index($('.' + activeClass));
  // cache array of li positions
  var $positionElements = $menuElements.map( function (){
   return $( this ).position().left;
  });
  // cache array of li widths
  var $widthElements = $menuElements.map( function (){
    return $( this ).width();
  });
 
  // magic line starting dimensions
  function startLine() {
      if ($activeIndex === -1) {
        $magicLine.width('0px');
        $magicLine.css('left', '0px');
      }else{
      $magicLine.width($widthElements[$activeIndex]);
      $magicLine.css('left', $positionElements[$activeIndex]);
     }
  }
  startLine();
  
  $menuElements.hover(function(){
    $magicLine.width($widthElements[$(this).index()]);
    $magicLine.css('left', $positionElements[$(this).index()]);
  }, 
  function(){
    startLine();
  }
  );

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
function svGrund(elementId) {
  
  // This can be reversed using window.atob('base64')
  var bgSvg = document.getElementById(elementId);
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

  }
 
}

// Parallax effect
if( !isMobile ){
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
        requestAnimationFrame(loop);
        render();
  })();

})(jQuery);
}
//info box
// function clickOrHover(){
//       var $front = $('div.inner.front');
      
//       $front.hover(function(){
//         $(this).addClass('active');
//         $(this).parent().find('.click-or-hover').addClass('hidden');
//       },function(){
//         $(this).removeClass('active');
//          $(this).parent().find('.click-or-hover').removeClass('hidden');
//       });

//       $front.click(
//         function(){
//           if($(this).hasClass('active') === true){
//             $(this).removeClass('active');
//              $(this).parent().find('.click-or-hover').removeClass('hidden');
//           }else{
//             $(this).addClass('active');
//             $(this).parent().find('.click-or-hover').addClass('hidden');
//           }
//         });
//     }
function clickOrHover(){
      var $front = $('div.inner.front');
      var visable = false;
      $front.css({'opacity':'0', 'z-index':'0'});
      if ( !isMobile ) {
      $front.hover(function(){
        $(this).fadeTo('fast', 0.9);
        $(this).parent().find('.click-or-hover').fadeTo('fast', 0.1);
        visable = true;
      },function(){
        $(this).fadeTo('fast', 0);
         $(this).parent().find('.click-or-hover').fadeTo('fast', 0.9);
         visable = false;
      });
      }
      $front.click(
        function(){
          if(visable) {
            $(this).fadeTo('fast', 0);
            $(this).parent().find('.click-or-hover').fadeTo('fast', 0.9);
            visable = false;  
          } else {
            $(this).fadeTo('fast', 0.9);
            $(this).parent().find('.click-or-hover').fadeTo('fast', 0.1);
            visable = true;
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
  checkIfIsSafari();
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
              svGrund('bgsvgportfolio');
            }
              );

        return false;
  });

  if ( !isSafari ) {
     //nicescroll
    $('html').niceScroll();
    $('.scrollable').niceScroll();
  }

  if ( !isMobile ) {
  mLine('menu', 'active');
  svGrund('bgsvg');
  svGrund('bgsvgnx');
  }
  if ( isMobile ) {
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
  if ( !isMobile ) {
  mLine('menu', 'active');
  }
}); 

