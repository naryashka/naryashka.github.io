var date = new Date();

var current = (date.getDate());
console.log(current);


if (current == 7) {
$("#number1").click(function(){
	 $("#img_link1").removeClass("img_link");
  $("#img_link1").addClass("numbers_active");

}); }

else if (current == 13) {
$("#number2").click(function(){
	 $("#img_link2").removeClass("img_link");
  $("#img_link2").addClass("numbers_active");

}); }
