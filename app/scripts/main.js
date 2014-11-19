// Menu animation
function mLine() {
   var mainNav = document.getElementById("menu");
   var span = document.createElement("span");
   var active = $('#menu li');

   span.setAttribute("id", "magic-line");
   mainNav.appendChild(span);

   var $magicLine = $("#magic-line");

   if(active.hasClass("active") === true){
      $magicLine.width($(".active").width())
      .css("left", $(".active").position().left);


      var OldLeftPos = $('#menu').find('li.active').find('a').position().left;
      var OldWidth = $('#menu').find('li.active').width();
      var curItem = $('#menu > li.active > a');
      curItem.addClass("current");

    $("#menu > li > a").hover(function() {
            el = $(this);
            
            leftPos = el.position().left;
            newWidth = el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            }, "linear");
            // el.addClass("current");
            if(curItem.hasClass("current") === true){
              curItem.removeClass("current");
            }else{
              curItem.addClass("current");
            }
        }, function() {
              $magicLine.stop().animate({
                left: OldLeftPos,
                width: OldWidth
            }, "linear");
              // el.removeClass("current");
              if(curItem.hasClass("current") === true){
              curItem.removeClass("current");
            }else{
              curItem.addClass("current");
            }
        });  
  }else{
    $("#menu > li > a").hover(function() {
            el = $(this);
            
            leftPos = el.position().left;
            newWidth = el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth,
                opacity: 1.0
            }, "linear");
        }, function() {
              $magicLine.stop().animate({
                opacity: 0.0
            }, "linear");
              
        });
  }
      
}

function svGrund() {
  // Short script to encode our SVG in base64
  // This can be reversed using window.atob('base64')
  var bgSvg = document.getElementById('bgsvg');
  var svg = document.getElementsByTagName('svg')[0];

  // Convert the SVG node to HTML
  var div = document.createElement('div');
  div.appendChild(svg.cloneNode(true));

  // Encode the SVG as base64
  var b64 = 'data:image/svg+xml;base64,'+window.btoa(div.innerHTML);
  var url = 'url("' + b64 + '")';

  bgSvg.style.backgroundImage = url;
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

  // cache initial offsets
  // var offsets = [];
  // $divs.each(function(i) {
  //   offsets[i] = $(this).offset();
  // });

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

        // div.style.marginTop = scroll;

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

$(document).ready(function () {
  mLine();
  svGrund();
});

