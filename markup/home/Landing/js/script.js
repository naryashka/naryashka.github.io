var xxx;

function GetTodayDate() {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth(); //yields month
   var yyyy = tdate.getFullYear(); //yields year
   xxx = dd + "-" +( MM+1) + "-" + yyyy;

   return xxx;
}; 

console.log(GetTodayDate());

if (xxx=='6-12-2016') {

	$('#number_1').click(function(){
	$("#number_1").removeClass();
});

}





