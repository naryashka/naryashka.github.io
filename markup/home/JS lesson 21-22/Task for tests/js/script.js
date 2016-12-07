
// функция для определения четности возводимого в степень числа
var app = {
	number: function() {
		prompt('Enter the number');
	},
	exponent: function() {
		prompt('Enter the exponent');
	},
	isEven: function(someNumber) {
	return (someNumber % 2 == 0) ? true : false;
	},
	pow: function(number,exponent) {
		var result = 1;
	if (exponent > 0) {
		for (var i = 0; i < exponent; i++) {
			result = result * number;
		}
	}
		else  
			if (exponent < 0) {
				for (var i = 0; i < Math.abs(exponent); i++) {
				result = result * number;
				}
			result = 1 / result;
		}
		else {
			result = 'The exponent can`t be "0" ';
		}
	
	if (number < 0 && isEven(number) == false) {
	console.log('Your result is -', result);
	}
	else {
		console.log('Your result is ', result);
	}
	},
	calculationResult: function() {
		var calculationResult = pow (number, exponent);
	}
};
// функция возведения числа в степень


module.exports = app;
