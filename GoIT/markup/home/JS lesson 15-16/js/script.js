//task 1

function GoogleCallback (func, data) {
		window[func](data);
};
	
var $searcher = $('.searcher');
	
$(function() {
	
	var $wrapper = $('.wrapper');
	var $button = $('#search')	
	
	$button.on('click', function(e) {
	
	    var $text = $('#entering').val();
	
	    e.preventDefault(); 
	      
	    $.ajax({
	        
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ $text +'&rsz=8&callback=GoogleCallback&context=?',
            dataType: "jsonp",
            success: function (data) {
            	$result = $('.result');
                $result.remove();
	                
                var ul = document.createElement('ul');
                $.each(data.results, function(i, val) {
	      
                    var li = document.createElement('li');
                    li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
                    ul.appendChild(li);
                });
	      
	            // console.log(data.results);
	            // console.log(ul);
	      
            var $result = document.createElement('div');
            $result.classList.add('result');
            $result.appendChild(ul);
            $wrapper.append($result);
	
            }
	    });
	})
});

//task 2

var human = {
	name: 'Human',
	age: 10,
	sex: 'male',
	height: '160',
	weight: 60
};

var worker = {
	workPlace: 'Watsons',
	salary: 5000,
	work: function() {
	    alert('I`m working!');
	}
};
	
var student = {
	studyPlace: 'NUFT',
	scholarship: 700,
	watchTvSeries: function() {
	    alert('I`m studying!');
	}
};

worker.__proto__ = human;
student.__proto__ = human;

var Ivanov = Object.create(student);
	Ivanov.name = 'Ivan';
	Ivanov.age = 18;
	Ivanov.weight = 70;

var Petrov = Object.create(worker);
	Petrov.name = 'Petya';
	Petrov.age = 28;
	Petrov.height = 170;

console.log('human', human);
console.log('student ', student);
console.log('worker ', worker);
console.log(Ivanov.name + ' is a student of ' + Ivanov.studyPlace + '. His scholarship is ' + Ivanov.scholarship + ' UAH, his age ' + Ivanov.age + ' and his height is ' + Ivanov.height);
console.log(Petrov.name + ' works in ' + Petrov.workPlace + '. His salary is ' + Petrov.salary + ' UAH, his age ' + Petrov.age + ' and his weight is ' + Petrov.weight);	