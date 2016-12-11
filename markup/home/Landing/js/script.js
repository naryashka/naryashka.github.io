var date = new Date();
var current = (date.getDate());
var day = [14,15,16,17,18,19,20,21,22,23,24,25];
var day1 = 14;
var day2 = 15;
var day3 = 16;
var day4 = 17;
var day5 = 18;
var day6 = 19;
var day7 = 20;
var day8 = 21;
var day9 = 22;
var day10 = 23;
var day11 = 24;
var day12 = 25;
console.log(day);

for (var i = 0; i < day.length; i++) {
	if (day[i] < current) {

	}
		
}


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
