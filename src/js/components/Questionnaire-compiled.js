'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QuestionJsx = require('./Question.jsx');

var _QuestionJsx2 = _interopRequireDefault(_QuestionJsx);

var _reactBootstrapLibListGroup = require('react-bootstrap/lib/ListGroup');

var _reactBootstrapLibListGroup2 = _interopRequireDefault(_reactBootstrapLibListGroup);

exports['default'] = _react2['default'].createClass({
  displayName: 'Questionnaire',

  getDefaultProps: function getDefaultProps() {
    return {
      questions: [],
      total: 0
    };
  },

  render: function render() {
    var questions = this.props.questions;

    return _react2['default'].createElement(
      'form',
      null,
      _react2['default'].createElement(
        _reactBootstrapLibListGroup2['default'],
        null,
        questions.map(function (question) {
          return _react2['default'].createElement(_QuestionJsx2['default'], { question: question, key: question.id });
        })
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'p',
          null,
          'Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.'
        )
      )
    );
  }
});
module.exports = exports['default'];

//# sourceMappingURL=Questionnaire-compiled.js.map