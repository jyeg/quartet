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

var _reactBootstrapLibListGroupJs = require('react-bootstrap/lib/ListGroup.js');

var _reactBootstrapLibListGroupJs2 = _interopRequireDefault(_reactBootstrapLibListGroupJs);

var _reactBootstrapLibListGroupItemJs = require('react-bootstrap/lib/ListGroupItem.js');

var _reactBootstrapLibListGroupItemJs2 = _interopRequireDefault(_reactBootstrapLibListGroupItemJs);

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
	gaugeSeverity: function gaugeSeverity(score) {
		var severity = 'none';
		if (5 <= score && score <= 9) severity = 'mild';
		if (10 <= score && score <= 14) severity = 'moderate';
		if (15 <= score && score <= 19) severity = 'moderately severe';
		if (20 <= score && score <= 27) severity = 'severe';

		return severity;
	},

	render: function render() {
		var _state = this.state;
		var thanksVisible = _state.thanksVisible;
		var therapist = _state.therapist;
		var score = this.props.score;

		var severity = this.gaugeSeverity(score);
		var output;
		if (score > 10) {
			return _react2['default'].createElement(
				'div',
				{ className: 'container' },
				_react2['default'].createElement(
					'form',
					null,
					_react2['default'].createElement(
						'h4',
						null,
						'You scored a ',
						score,
						' out of 27'
					),
					_react2['default'].createElement(
						'h4',
						null,
						'Your Depression Severity is: ',
						severity
					),
					_react2['default'].createElement(
						'h5',
						null,
						'Here are some specialist whom may help.'
					),
					_react2['default'].createElement(
						_reactBootstrapLibListGroupJs2['default'],
						null,
						_react2['default'].createElement(
							_reactBootstrapLibListGroupItemJs2['default'],
							null,
							_react2['default'].createElement(_reactBootstrapLibInput2['default'], { type: 'checkbox', ref: 'checkbox', label: 'Dr. Who' })
						),
						_react2['default'].createElement(
							_reactBootstrapLibListGroupItemJs2['default'],
							null,
							_react2['default'].createElement(_reactBootstrapLibInput2['default'], { type: 'checkbox', ref: 'checkbox', label: 'Dr. Holmes' })
						)
					),
					this.state.thanksVisible ? _react2['default'].createElement(
						'div',
						null,
						'Thank you!'
					) : null,
					_react2['default'].createElement(
						_reactBootstrapLibButton2['default'],
						{ onClick: this.toggleThanks },
						'Book an appointment'
					)
				)
			);
		}

		return _react2['default'].createElement(
			'div',
			{ className: 'container' },
			_react2['default'].createElement(
				'form',
				null,
				_react2['default'].createElement(
					'h4',
					null,
					'You scored a ',
					score,
					' out of 27'
				),
				_react2['default'].createElement(
					'h4',
					null,
					'Your Depression Severity is: ',
					severity
				),
				_react2['default'].createElement(
					'p',
					null,
					'Thank you for participating!'
				)
			)
		);
	}
});
module.exports = exports['default'];

//# sourceMappingURL=Results-compiled.js.map