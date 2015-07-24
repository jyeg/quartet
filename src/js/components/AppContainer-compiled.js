'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesQuestionStore = require('../stores/QuestionStore');

var _storesQuestionStore2 = _interopRequireDefault(_storesQuestionStore);

var _storesAnswerStoreJs = require('../stores/AnswerStore.js');

var _storesAnswerStoreJs2 = _interopRequireDefault(_storesAnswerStoreJs);

var _actionsQuestionnaireActionCreators = require('../actions/QuestionnaireActionCreators');

var _actionsQuestionnaireActionCreators2 = _interopRequireDefault(_actionsQuestionnaireActionCreators);

var _AppJsx = require('./App.jsx');

var _AppJsx2 = _interopRequireDefault(_AppJsx);

var _Result = require('./Result');

var _Result2 = _interopRequireDefault(_Result);

exports['default'] = _react2['default'].createClass({
	displayName: 'AppContainer',

	//propTypes: {
	//	// You can also specify a custom validator. It should return an Error
	//	// object if the validation fails. Don't `console.warn` or throw, as this
	//	// won't work inside `oneOfType`.
	//	scores: function(props, propName, componentName) {
	//		var keys = Object.keys(props[scores]);
	//		if(keys.length === 9){
	//		//if (!/matchme/.test(props[propName])) {
	//			return new Error('Validation failed!');
	//		}
	//	}
	//},

	_onChange: function _onChange() {
		this.setState(_storesQuestionStore2['default'].getAll());
		this.setState({ scores: _storesAnswerStoreJs2['default'].getAll() });
	},

	getInitialState: function getInitialState() {
		return {
			questions: _actionsQuestionnaireActionCreators2['default'].getQuestionsFromServer(),
			//score: 0,
			scores: {},
			alertVisible: false,
			resultVisible: false
		};
	},

	componentDidMount: function componentDidMount() {
		_storesQuestionStore2['default'].addChangeListener(this._onChange);
		_storesAnswerStoreJs2['default'].addChangeListener(this._onChange);
	},

	componentWillUnmount: function componentWillUnmount() {
		_storesQuestionStore2['default'].removeChangeListener(this._onChange);
		_storesAnswerStoreJs2['default'].removeChangeListener(this._onChange);
	},

	//handleAddTask(e) {
	//  let title = prompt('Enter task title:');
	//  if (title) {
	//    ActionCreator.addItem(title);
	//  }
	//},

	handleTally: function handleTally() {
		//var scores = AnswerStore.getAll();
		var keys = Object.keys(this.state.scores.scores);
		var allScores = this.state.scores.scores;
		console.log('keys', allScores);
		if (keys.length === 9) {
			// calculates score.
			var score = keys.reduce(function (sum, key) {
				sum += allScores[key];
				return sum;
			}, 0);
			if (score > 10) {
				this.setState({ resultVisible: true });
			}
			//ActionCreator.tally(score);
		} else {
			this.setState({ alertVisible: true });
		}
	},

	render: function render() {
		var _state = this.state;
		var questions = _state.questions;
		var alertVisible = _state.alertVisible;
		var resultVisible = _state.resultVisible;

		return _react2['default'].createElement(_AppJsx2['default'], {
			onTally: this.handleTally,
			questions: questions,
			onAlert: alertVisible,
			onResult: resultVisible,
			onHandleAlertDismiss: this.handleAlertDismiss,
			onHandleAlertShow: this.handleAlertShow
		});
	}
});
module.exports = exports['default'];

//# sourceMappingURL=AppContainer-compiled.js.map