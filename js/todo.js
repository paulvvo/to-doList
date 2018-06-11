//strike out items that are done
//the second arg says only on li inside the ul will work
//this was added so that future li added will work
//this works because the ul existed already when the page loaded
$("ul").on("click","li", function(){
  $(this).toggleClass("completed");

  // if($(this).css("color") === "rgb(128, 128, 128)"){
  //   $(this).css({
  //     color: "black",
  //     textDecoration: ""
  //   });
  // }else{
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // }
});

//delete todo when click on x
$("ul").on("click","span", function(event){
  $(this).parent().fadeOut(2000, function(){
    $(this).remove();
  });
  event.stopPropagation();
});


//listen for enter key in input
$("input[type=text]").on("keypress", function(event){
  if(event.which ===13){
    var newTodoItem = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fas fa-trash\"></span></i> "+ newTodoItem + "</li>" );
  }
});

$(".fa-angle-double-up").on("click", function(){
  // $("input").css("display", "none");
  //$("input").toggleClass("hide");
  $("input").fadeToggle();
});
