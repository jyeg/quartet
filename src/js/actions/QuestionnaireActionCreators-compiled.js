'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Dispatcher = require('../Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Constants = require('../Constants');

var _Constants2 = _interopRequireDefault(_Constants);

exports['default'] = {
	setQuestions: function setQuestions(guides) {
		_Dispatcher2['default'].handleViewAction({
			type: _Constants2['default'].ActionTypes.SET_QUESTIONS,
			data: guides
		});
	},

	/*
  * using json-server to simulate a api which would be used to pull n number of questionnaires from DB.
  */
	getQuestionsFromServer: function getQuestionsFromServer() {
		var _this = this;

		var self = this;
		var destination = 'http://localhost:3000/questionnaires';
		// request from json service.response.json()
		fetch(destination).then(function (response) {
			return response.json();
		}).then(function (data) {
			_this.setQuestions(data[0].questions);
		})['catch'](function (e) {
			return console.log('Error', e);
		});
	},

	/*
  *  action to hold new answer in the store.
  */
	answer: function answer(number, choice) {
		_Dispatcher2['default'].handleViewAction({
			type: _Constants2['default'].ActionTypes.ANSWERED,
			answer: [number, choice]
		});
	}

	/*
  * Would be used to handle business logic, instead just wrote on client side.
  */
	//tally(score) {
	//	if(score >= 10){
	//
	//	}
	//	Dispatcher.handleViewAction({
	//		type: Constants.ActionTypes.TALLY,
	//		text: score
	//	});
	//},

};
module.exports = exports['default'];

//# sourceMappingURL=QuestionnaireActionCreators-compiled.js.map