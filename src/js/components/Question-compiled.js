'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsQuestionnaireActionCreators = require('../actions/QuestionnaireActionCreators');

var _actionsQuestionnaireActionCreators2 = _interopRequireDefault(_actionsQuestionnaireActionCreators);

var _reactBootstrapLibListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var _reactBootstrapLibListGroupItem2 = _interopRequireDefault(_reactBootstrapLibListGroupItem);

var _reactBootstrapLibInput = require('react-bootstrap/lib/Input');

var _reactBootstrapLibInput2 = _interopRequireDefault(_reactBootstrapLibInput);

var _AnswerJsx = require('./Answer.jsx');

var _AnswerJsx2 = _interopRequireDefault(_AnswerJsx);

exports['default'] = _react2['default'].createClass({
  displayName: 'Question',

  getDefaultProps: function getDefaultProps() {
    return {
      question: {
        number: 0,
        text: ''
      }
    };
  },

  handleToggle: function handleToggle(question) {},

  render: function render() {
    var question = this.props.question;

    return _react2['default'].createElement(
      _reactBootstrapLibListGroupItem2['default'],
      null,
      _react2['default'].createElement(
        'label',
        null,
        question.text
      ),
      _react2['default'].createElement(_AnswerJsx2['default'], { number: question.number })
    );
  }
});
module.exports = exports['default'];

//if (this.refs.checkbox.getChecked()) {
//  ActionCreator.getQuestionsFromServer();
//}

//# sourceMappingURL=Question-compiled.js.map