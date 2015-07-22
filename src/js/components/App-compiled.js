'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibButton = require('react-bootstrap/lib/Button');

var _reactBootstrapLibButton2 = _interopRequireDefault(_reactBootstrapLibButton);

var _reactBootstrapLibJumbotron = require('react-bootstrap/lib/Jumbotron');

var _reactBootstrapLibJumbotron2 = _interopRequireDefault(_reactBootstrapLibJumbotron);

var _QuestionnaireJsx = require('./Questionnaire.jsx');

var _QuestionnaireJsx2 = _interopRequireDefault(_QuestionnaireJsx);

exports['default'] = _react2['default'].createClass({
  displayName: 'App',

  propTypes: {
    questions: _react.PropTypes.array.isRequired,
    onTally: _react.PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      questions: []
    };
  },

  render: function render() {
    var _props = this.props;
    var onTally = _props.onTally;
    var questions = _props.questions;

    return _react2['default'].createElement(
      'div',
      { className: 'container' },
      _react2['default'].createElement(
        _reactBootstrapLibJumbotron2['default'],
        null,
        _react2['default'].createElement(
          'h1',
          null,
          'Patient Health Questionnaire (PHQ-9)'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'his easy to use patient questionnaire is a self-administered version of the PRIME-MD diagnostic instrument for common mental disorders> The PHQ-9 is the depression module, which scores each of the nine DSM-IV criteria as "0" (not at all) to "3" (nearly every day). It has been validated for use in primary care.'
        )
      ),
      _react2['default'].createElement(_QuestionnaireJsx2['default'], { questions: questions }),
      _react2['default'].createElement(
        _reactBootstrapLibButton2['default'],
        { onClick: onTally, bsStyle: 'primary' },
        'Submit'
      )
    );
  }
});
module.exports = exports['default'];

//# sourceMappingURL=App-compiled.js.map