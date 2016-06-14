$(function(){

let questions = [
	{
		question: 'Question number 1',
		answers: [
			{
				text: 'Answer right',
				correct: true
			},
			{
				text: 'Answer wrong',
				correct: false
			},
			{
				text: 'Answer wrong',
				correct: false
			},
		]
	},
	{
		question: 'Question number 2',
		answers: [
			{
				text: 'Answer right',
				correct: true
			},
			{
				text: 'Answer wrong',
				correct: false
			},
			{
				text: 'Answer wrong',
				correct: false
			},
		]
	},
	{
		question: 'Question number 3',
		answers: [
			{
				text: 'Answer right',
				correct: true
			},
			{
				text: 'Answer wrong',
				correct: false
			},
			{
				text: 'Answer wrong',
				correct: false
			},
		]
	}
]

//to localStorage
let sendData = JSON.stringify(questions);
let localData = localStorage.setItem("questions", sendData);

//from localStorage
let getData = localStorage.getItem("questions");
let Data = JSON.parse(getData);

let $html = $('#template').html();
let tmpl = _.template($html);

let content = tmpl({
  data: Data
});

// inserting template into DOM

let $form = $('#test');
$form.prepend(content);



let rightAnswersArr = [];
let givenAnswers = [];
let finish;
let checkResults = function(e) {
  e.preventDefault();

//create array with right answers from our object
	
	$(function() {
		for (let i = 0; i < Data.length; i++) {
			let questionsAnswers = Data[i].answers;
			for (let j = 0; j < questionsAnswers.length; j++) {
				let actualAnswer = Data[i].answers[j].correct;
				rightAnswersArr.push(actualAnswer);
			};
		};
		console.log(rightAnswersArr);
	} );

//create array with given answers from user
let $inputs = $('input:checkbox');	

let getGivenAnswers = function() {
    
$inputs.each(function () {
    
	if ( $(this).prop('checked') ) {
    
    	givenAnswers.push(true);
    
      } else {
    
      	givenAnswers.push(false);
    	};
  	});
}

	
let answered = 0;

	// count correct answers
let check = function () {

for (let i = 0; i < rightAnswersArr.length; i++) {

	if (rightAnswersArr[i] == true) {

        if (rightAnswersArr[i] == givenAnswers[i]) {
          answered++;
        }

      }
    }
   
};
  	

getGivenAnswers();
console.log('given', givenAnswers);
check();
console.log('correct', answered);
  	
if (answered > 0) {
   	finish = true;
};

	//modal window

let modal;
let $body = $('body');

if (finish) {
    modal = ('<div class="mymodal"><div class="mymodal-inner correct"><h1 class="text-center">Congratulation</h1><h1 class="text-center">You given '+
    answered +' correct answers out of ' + Data.length + '</h1><a class="center-block btn btn-warning" id="exit">Exit</a></div></div>')
	} 
	else {
    modal = ('<div class="mymodal"><div class="mymodal-inner mistake"><h1 class="text-center">You have 0 correct answer</h1><h1 class="text-center"></h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');
  	}


$body.append(modal);

let $exit = $('#exit');

let reset = function() {
    $('input:checkbox').prop('checked', false).prop('disabled', false);
    let $modal = $('.mymodal');
    $modal.remove();
    return false;
};

$exit.on('click', reset);
givenAnswers = [];

};


	//call function
let $checkResults = $('#check-results');
$checkResults.on('click', checkResults);

});
