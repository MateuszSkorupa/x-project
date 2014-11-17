//górne menu animacja
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
      var curItem = $('#menu').find('li.active').find('a');
      curItem.addClass("current");

    $("#menu li a").hover(function() {
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
              curItem.addClass("current")
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
              curItem.addClass("current")
            }
        });  
  }else{
    $("#menu li a").hover(function() {
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


$(document).ready(function () {
  mLine();
});
