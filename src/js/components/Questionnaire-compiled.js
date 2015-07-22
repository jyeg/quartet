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

var _reactBootstrapLibAlert = require('react-bootstrap/lib/Alert');

var _reactBootstrapLibAlert2 = _interopRequireDefault(_reactBootstrapLibAlert);

exports['default'] = _react2['default'].createClass({
  displayName: 'Questionnaire',

  getDefaultProps: function getDefaultProps() {
    return {
      questions: []
    };
  },

  render: function render() {
    var questions = this.props.questions;

    console.log('in questionaire', questions);
    if (questions.length === 0) {
      return _react2['default'].createElement(
        _reactBootstrapLibAlert2['default'],
        { bsStyle: 'warning' },
        _react2['default'].createElement(
          'strong',
          null,
          'You have no tasks'
        ),
        ' Create some using the Add New button below.'
      );
    }

    return _react2['default'].createElement(
      'form',
      null,
      _react2['default'].createElement(
        _reactBootstrapLibListGroup2['default'],
        null,
        questions.map(function (question) {
          return _react2['default'].createElement(_QuestionJsx2['default'], { question: question, key: question.id });
        })
      )
    );
  }
});
module.exports = exports['default'];

//# sourceMappingURL=Questionnaire-compiled.js.map