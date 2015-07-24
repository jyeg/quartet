'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsQuestionnaireActionCreators = require('../actions/QuestionnaireActionCreators');

var _actionsQuestionnaireActionCreators2 = _interopRequireDefault(_actionsQuestionnaireActionCreators);

var _reactBootstrapLibButton = require('react-bootstrap/lib/Button');

var _reactBootstrapLibButton2 = _interopRequireDefault(_reactBootstrapLibButton);

var _reactBootstrapLibInput = require('react-bootstrap/lib/Input');

var _reactBootstrapLibInput2 = _interopRequireDefault(_reactBootstrapLibInput);

exports['default'] = _react2['default'].createClass({
	displayName: 'Results',

	getInitialState: function getInitialState() {
		return {
			therapist: ['Dr. Finkelstein', 'Dr. Who'],
			thanksVisible: false
		};
	},
	toggleThanks: function toggleThanks() {
		this.setState({ thanksVisible: true });
	},

	render: function render() {
		var _state = this.state;
		var thanksVisible = _state.thanksVisible;
		var therapist = _state.therapist;

		return _react2['default'].createElement(
			'form',
			null,
			_react2['default'].createElement(
				'h4',
				null,
				'Here are some specialist whom may help.'
			),
			therapist.map(function (doc) {
				_react2['default'].createElement(_reactBootstrapLibInput2['default'], { type: 'checkbox', ref: 'checkbox', label: doc });
			}),
			this.state.thanksVisible ? _react2['default'].createElement(
				'div',
				null,
				'Thank you!'
			) : null,
			_react2['default'].createElement(_reactBootstrapLibButton2['default'], { onClick: this.toggleThanks })
		);
	}
});
module.exports = exports['default'];

//# sourceMappingURL=Results-compiled.js.map