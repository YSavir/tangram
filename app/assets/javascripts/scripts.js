var closeParent = function closeParent(object){
  $instructions = object.parent()
  $instructions.fadeOut(500, "linear");
  setTimeout(function(){
    $instructions.empty();
  }, 500)
}

$(function(){
  $(".windowCloser").on("click", function(){
    closeParent($(this));
  });
});