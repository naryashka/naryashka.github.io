

function StartPage() {
var firstname = document.getElementById("first_name");
  var lastname = document.getElementById("last_name");
  var phone = document.getElementById("phone");
  var inputs = document.getElementsByName("gender");
  var age = document.getElementById("age");
  var forma = document.getElementById("data");
  var errors = null;
  var selectedValue;

  firstname.onblur = function() {
    if (firstname.value != "") { 
      document.getElementById("first-name_block").className = 'has-success has-feedback';
      document.getElementById("first-name_span").className = 'glyphicon glyphicon-ok form-control-feedback';
    }
    else {
      document.getElementById("first-name_block").className = 'has-warning has-feedback';
      document.getElementById("first-name_span").className = 'glyphicon glyphicon-warning-sign form-control-feedback';
    }
  }
  lastname.onblur = function() {
    if (lastname.value != "") { 
      document.getElementById("last-name_block").className = 'has-success has-feedback';
      document.getElementById("last-name_span").className = 'glyphicon glyphicon-ok form-control-feedback';
    }
    else {
      document.getElementById("last-name_block").className = 'has-warning has-feedback';
      document.getElementById("last-name_span").className = 'glyphicon glyphicon-warning-sign form-control-feedback';
    }
  }
  phone.onblur = function() {
    if (phone.value != "") { 
      document.getElementById("phone_block").className = 'has-success has-feedback';
      document.getElementById("phone_span").className = 'glyphicon glyphicon-ok form-control-feedback';
    }
    else {
      document.getElementById("phone_block").className = 'has-warning has-feedback';
      document.getElementById("phone_span").className = 'glyphicon glyphicon-warning-sign form-control-feedback';
    }
  }
  age.onblur = function() {
    if (age.value != "") { 
      document.getElementById("age_block").className = 'has-success has-feedback';
      document.getElementById("age_span").className = 'glyphicon glyphicon-ok form-control-feedback';
    }
    else {
      document.getElementById("age_block").className = 'has-warning has-feedback';
      document.getElementById("age_span").className = 'glyphicon glyphicon-warning-sign form-control-feedback';
    }
  }

window.addNewRecord = function(form) {

  
  if(firstname.value == "") {
    document.getElementById("first-name_block").className = 'has-error has-feedback';
    document.getElementById("first-name_span").className = 'glyphicon glyphicon-remove form-control-feedback';
  	errors = true;
  }
  if(lastname.value == "") {
 		document.getElementById("last-name_block").className = 'has-error has-feedback';
    document.getElementById("last-name_span").className = 'glyphicon glyphicon-remove form-control-feedback';
    errors = true;
  }
  if(phone.value == "") {
    document.getElementById("phone_block").className = 'has-error has-feedback';
    document.getElementById("phone_span").className = 'glyphicon glyphicon-remove form-control-feedback';
    errors = true;
  }
  if(age.value == "") {
    document.getElementById("age_block").className = 'has-error has-feedback';
    document.getElementById("age_span").className = 'glyphicon glyphicon-remove form-control-feedback';
    errors = true;
  }

  function valButton(btn) {
    var cnt = -1;
    for (var i=btn.length-1; i > -1; i--) {
        if (btn[i].checked) {cnt = i; i = -1;}
    }
    if (cnt > -1) return btn[cnt].value;
    else return null;
  }
                  
  var btn = valButton(form.gender);
  if (btn == null) {
    errors = true;
    document.getElementById("gender_block").className = 'has-error has-feedback';
    document.getElementById("sex").className = 'wrong';
  }
  else {
    errors = false;
    selectedValue = btn;
    document.getElementById("gender_block").className = 'has-success has-feedback';
    document.getElementById("sex").className = 'write';
  };

  
  if(errors) {  
    console.log('its work');
    return false;
  }
  
  var table = document.getElementById("records2");
 	var firstnameColumn = '<td>'+firstname.value+'</td>';
 	var lastnameColumn = '<td>'+lastname.value+'</td>';
  var phoneColumn = '<td>'+phone.value+'</td>';
  var genderColumn = '<td>'+ selectedValue +'</td>';
  var ageColumn = '<td>'+ age.value +'</td>';
  var actionColumn = '<td><a onclick="this.parentElement.parentElement.remove()" href="#">[x]</a></td>';

  
  newLine = '<tr>' + firstnameColumn + lastnameColumn + phoneColumn + genderColumn + ageColumn + actionColumn +'</tr>'; 
  table.innerHTML += newLine;
  
  firstname.value = '';
  lastname.value = '';
  phone.value = '';
  age.value = '';
   
   var grid = document.getElementById('records');

    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      // Если TH -- сортируем
      sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
    };

    function sortGrid(colNum, type) {
      var tbody = grid.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);
      console.log(rowsArray);

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }

      // сортировать
      rowsArray.sort(compare);
console.log(rowsArray);
      // Убрать tbody из большого DOM документа для лучшей производительности
      grid.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length-1; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      grid.appendChild(tbody);

    }




  return;
}









}