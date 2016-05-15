function Calendar(id, year, month) {

var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    days=["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

if (DNfirst != 0) {

  for (var  i = 1; i < DNfirst; i++) calendar += '<td>';
} else {
  for (var  i = 0; i < 6; i++) calendar += '<td>';
}
for (var  i = 1; i <= Dlast; i++) {

  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;

  } else if (i == 7 && D.getFullYear() == 2016 && D.getMonth() == 4) {
    calendar += '<td class="new">' + i + '<p>Напиться!</p><p class = "light">Витя Костин, Петр Михайлов</p>'; }

    else if (i == 20 && D.getFullYear() == 2016 && D.getMonth() == 4) {
    calendar += '<td class="new">' + i + '<p>ДР!</p><p class = "light">Дима Молодцов</p>'; }

  else {
    calendar += '<td>' +i;
  }

  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
    for (var i = DNfirst+1; i < 8-DNlast; i++) {
      calendar += '<td>';   
    };


document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#month').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();

document.querySelector('#button-left').onclick = function() {
  Calendar("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}

}

document.querySelector('#refresh').onclick = function() {
  location.reload();
}
Calendar("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#button-left').onclick = function() {
  Calendar("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#button-right').onclick = function() {
  Calendar("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}

document.querySelector('#today_btn').onclick = function() {
  location.reload();
}
