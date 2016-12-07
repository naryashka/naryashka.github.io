'use strict';

$(function () {

	var questions = [{
		question: 'Question number 1',
		answers: [{
			text: 'Answer right',
			correct: true
		}, {
			text: 'Answer wrong',
			correct: false
		}, {
			text: 'Answer wrong',
			correct: false
		}]
	}, {
		question: 'Question number 2',
		answers: [{
			text: 'Answer right',
			correct: true
		}, {
			text: 'Answer wrong',
			correct: false
		}, {
			text: 'Answer wrong',
			correct: false
		}]
	}, {
		question: 'Question number 3',
		answers: [{
			text: 'Answer right',
			correct: true
		}, {
			text: 'Answer wrong',
			correct: false
		}, {
			text: 'Answer wrong',
			correct: false
		}]
	}];

	//to localStorage
	var sendData = JSON.stringify(questions);
	var localData = localStorage.setItem("questions", sendData);

	//from localStorage
	var getData = localStorage.getItem("questions");
	var Data = JSON.parse(getData);

	var $html = $('#template').html();
	var tmpl = _.template($html);

	var content = tmpl({
		data: Data
	});

	// inserting template into DOM

	var $form = $('#test');
	$form.prepend(content);

	var rightAnswersArr = [];
	var givenAnswers = [];
	var finish = void 0;
	var checkResults = function checkResults(e) {
		e.preventDefault();

		//create array with right answers from our object

		$(function () {
			for (var i = 0; i < Data.length; i++) {
				var questionsAnswers = Data[i].answers;
				for (var j = 0; j < questionsAnswers.length; j++) {
					var actualAnswer = Data[i].answers[j].correct;
					rightAnswersArr.push(actualAnswer);
				};
			};
			console.log(rightAnswersArr);
		});

		//create array with given answers from user
		var $inputs = $('input:checkbox');

		var getGivenAnswers = function getGivenAnswers() {

			$inputs.each(function () {

				if ($(this).prop('checked')) {

					givenAnswers.push(true);
				} else {

					givenAnswers.push(false);
				};
			});
		};

		var answered = 0;

		// count correct answers
		var check = function check() {

			for (var i = 0; i < rightAnswersArr.length; i++) {

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

		var modal = void 0;
		var $body = $('body');

		if (finish) {
			modal = '<div class="mymodal"><div class="mymodal-inner correct"><h1 class="text-center">Congratulation</h1><h1 class="text-center">You given ' + answered + ' correct answers out of ' + Data.length + '</h1><a class="center-block btn btn-warning" id="exit">Exit</a></div></div>';
		} else {
			modal = '<div class="mymodal"><div class="mymodal-inner mistake"><h1 class="text-center">You have 0 correct answer</h1><h1 class="text-center"></h1><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>';
		}

		$body.append(modal);

		var $exit = $('#exit');

		var reset = function reset() {
			$('input:checkbox').prop('checked', false).prop('disabled', false);
			var $modal = $('.mymodal');
			$modal.remove();
			return false;
		};

		$exit.on('click', reset);
		givenAnswers = [];
	};

	//call function
	var $checkResults = $('#check-results');
	$checkResults.on('click', checkResults);
});
