'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsQuestionnaireActionCreators = require('../actions/QuestionnaireActionCreators');

var _actionsQuestionnaireActionCreators2 = _interopRequireDefault(_actionsQuestionnaireActionCreators);

var _reactBootstrapLibAlert = require('react-bootstrap/lib/Alert');

var _reactBootstrapLibAlert2 = _interopRequireDefault(_reactBootstrapLibAlert);

exports['default'] = _react2['default'].createClass({
  displayName: 'Alert',

  getDefaultProps: function getDefaultProps() {
    return {
      question: {
        id: 0,
        question: ''
      }
    };
  },

  render: function render() {
    var onDismiss = this.props.onDismiss;

    return _react2['default'].createElement(
      _reactBootstrapLibAlert2['default'],
      { bsStyle: 'warning', onDismiss: onDismiss },
      _react2['default'].createElement(
        'strong',
        null,
        'Please answer all questions. '
      )
    );
  }
});
module.exports = exports['default'];

//# sourceMappingURL=Alert-compiled.js.map