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
$(function(){

  var $container = $('.plx-w');
  var $divs = $container.find('.plx-item');
  var thingBeingScrolled = document.body;

  var plxWindowHeight = $divs.eq(0).closest('.plx-w').height();
  var diffHeight = $divs.eq(0).height() - plxWindowHeight;

  var i,len,div,plxWindow,offset,scroll,top;

   var render = function(){

      // thing were scrolling
      top = thingBeingScrolled.scrollTop;

      // loop through divs

      for(i=0, len=$divs.length; i<len; i++){

        // get one div
        div = $divs[i];

        // get the parent parallax window
        plxWindow = div.parentNode;

        // calculate the offsetTOP of the div
        offset = $(div).offset().top;

        // calculate the amount to scroll
        scroll = Math.round(((top - offset) / plxWindowHeight) * diffHeight);

        // apply the scroll amount
        div.style.webkitTransform = "translate3d(0px,"+(scroll*1.5)+"px,0px)";
      }
   };


   $(function loop(){
      requestAnimationFrame(loop);
      render();
   }); 
}); 




$(document).ready(function () {
  mLine();
  svGrund();
});


