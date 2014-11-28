// Menu animation
function mLine() {
   var mainNav = document.getElementById('menu');
   var span = document.createElement('span');
   var active = $('#menu li');

   span.setAttribute('id', 'magic-line');
   mainNav.appendChild(span);

   var $magicLine = $('#magic-line');
   var el,leftPos,newWidth;

   if(active.hasClass('active') === true){
      $magicLine.width($('.active').width())
      .css('left', ($('.active').position()).left);


      var OldLeftPos = $('#menu').find('li.active').find('a').position().left;
      var OldWidth = $('#menu').find('li.active').width();
      var curItem = $('#menu > li.active > a');
      curItem.addClass('current');

    $('#menu > li > a').hover(function() {
            el = $(this);
            
            leftPos = el.position().left;
            newWidth = el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            }, 'linear');
           
            if(curItem.hasClass('current') === true){
              curItem.removeClass('current');
            }else{
              curItem.addClass('current');
            }
        }, function() {
              $magicLine.stop().animate({
                left: OldLeftPos,
                width: OldWidth
            }, 'linear');
             
              if(curItem.hasClass('current') === true){
              curItem.removeClass('current');
            }else{
              curItem.addClass('current');
            }
        });  
  }else{
    $('#menu > li > a').hover(function() {
            el = $(this);
            
            leftPos = el.position().left;
            newWidth = el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth,
                opacity: 1.0
            }, 'linear');
        }, function() {
              $magicLine.stop().animate({
                opacity: 0.0
            }, 'linear');
              
        });
  }
      
}

// Short script to encode our SVG in base64
function svGrund() {
  
  // This can be reversed using window.atob('base64')
  var bgSvg = document.getElementById('bgsvg');
  var bgSvgnx = document.getElementById('bgsvgnx');
  var svg = document.getElementsByTagName('svg')[0];

  // Convert the SVG node to HTML
  var div = document.createElement('div');
  div.appendChild(svg.cloneNode(true));

  // Encode the SVG as base64
  var b64 = 'data:image/svg+xml;base64,'+window.btoa(div.innerHTML);
  var url = 'url("' + b64 + '")';

  bgSvg.style.backgroundImage = url;
  bgSvgnx.style.backgroundImage = url;
}

// Parallax effect
(function($) {

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

})(jQuery);



// mouse wheel easing
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
 
function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
 
    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}
 
function handle(delta) {
    var time = 500; // delay time
    var distance = 120; // delta point 
    // Dom where it will apply 
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

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
// trigger functions
$(document).ready(function () {
  mLine();
  svGrund();
  clickOrHover();

  $('#scene').parallax({
     invertX: false,
      invertY: false
  });

  // scroll to point animation trigger
  $(window).scroll(function() {
  var box = $('.direction');
  var y = box.offset().top;
  var x = $(this).scrollTop();

  // height from box to window top 
  var z = y - x;

  if (z <= 400 ) {
      $('.direction').addClass('deactivate');
    }else{
      $('.direction').removeClass('deactivate');
    }
  });

});
 



